const Request = require('./request');

class Cielo
{
    constructor (merchantId, merchantKey, env) {
        this.merchant_id  = merchantId;
        this.merchant_key = merchantKey;
        this.env           = env;

        this.request = new Request(this);
    }

    /**
     * Set new env.
     * 
     * @param {string} env 
     * @returns {Cielo}
     */
    setEnv(env) {
        this.env = env;

        return this;
    }

    /**
     * Get env.
     * 
     * @returns {string}
     */
    getEnv() {
        return this.env;
    }

    /**
     * Autorizar transação de credito.
     * 
     * @param {Object} transaction 
     * @returns {Object}
     */
    async authorizeCredit(transaction) {

        // Autorizar transacao de credito
        var response = await this.request.post('/1/sales/', transaction);

        return response;
    }

    /**
     * Confirmar transacao de credito tardia.
     * 
     * @param {String} pagtoId 
     * @returns {Object}
     */
    async confirmCredit(pagtoId) {

        // Confirmar transacao de credito
        var response = await this.request.put('/1/sales/' + pagtoId + '/capture');

        return response;

    }

    /**
     * Cancelar transacao de credito tardia.
     * 
     * @param {String} pagtoId 
     * @returns {Object}
     */
     async cancelCredit(pagtoId) {

        // Cancelar transacao de credito
        var response = await this.request.put('/1/sales/' + pagtoId + '/void');

        return response;

    }
}

module.exports = Cielo;