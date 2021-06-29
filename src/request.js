const axios = require('axios');
const { endpoints} = require('./configs');

class Request
{
    constructor (cielo) {
        this.cielo = cielo;

        if (typeof endpoints[cielo.env] == undefined) {
            throw "Env not implemented: " + cielo.env;
        }

        this.baseurl = endpoints[cielo.env];
    }

    /**
     * Enviar requisicao.
     * 
     * @param {string} urlPart 
     * @param {string} method 
     * @param {Object} data 
     * @returns {Object}
     */
    async send(urlPart, method, data) {

        var url = this.getFullUrl(urlPart);

        var headers = {
            'Content-Type'  : 'application/json; charset=utf-8',
            'MerchantId'    : this.cielo.merchant_id,
            'MerchantKey'   : this.cielo.merchant_key,
        };

        var req = { url, method, headers, data };  

        try {
            var res = await axios(req);
        } catch (err) {
            if (err.response && err.response.data) {
                var info = err.response.data;
                var error = {
                    message: info.message,
                    code: info.status_code,
                    detalhe: info.details,
                }

                throw error;
            }
            
            throw err;
        }

        if ((res.status != 200) && (res.status != 201) && (res.status != 202)) {
            throw res.data;
        }

        return res.data;
    }

    /**
     * Retorna a URL completa.
     * 
     * @param {string} url_part 
     * @returns {string}
     */
    getFullUrl(url_part) {
        return this.baseurl + url_part;
    }

    /**
     * Retorna a URL base do ambiente.
     * 
     * @returns {string}
     */
    getBaseUrl() {
        return this.baseurl;
    }

    async get(url_part) {
        return await this.send(url_part, 'get');
    }

    async post(url_part, data = {}) {
        return await this.send(url_part, 'post', data);
    }

    async put(url_part, data = {}) {
        return await this.send(url_part, 'put', data);
    }
}

module.exports = Request;