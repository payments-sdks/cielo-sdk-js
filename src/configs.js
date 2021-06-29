module.exports = {
    envs : {
        EV_SANDBOX    : "sandbox",
        EV_HOMOLOG    : "homolog",
        EV_PRODUCTION : "production",
    },

    endpoints : {
        sandbox    : "https://apisandbox.cieloecommerce.cielo.com.br",
        homolog    : "https://apisandbox.cieloecommerce.cielo.com.br",
        production : "https://api.cieloecommerce.cielo.com.br",
    },

    codes: {
        RET_AUTHORIZED: '4',
        RET_CAPTURED  : '6',

        ST_Authorized       : '1',
        ST_PaymentConfirmed : '2',
        ST_Voided           : '10',
    }
};