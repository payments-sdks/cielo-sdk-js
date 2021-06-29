# Cielo SDK - JS
SDK JS to Cielo 3.0

## Documentation
 - API Reference - [https://developercielo.github.io/manual/cielo-ecommerce](https://developercielo.github.io/manual/cielo-ecommerce)

 ## Operações de crédito

 **Exemplo de uso**:

  ```javascript
    const { Cielo, Envs, Codes } = require('cielo-sdk-js');

    var trans = {
        //.... conforme o objeto DA TRANSAÇÃO EXEMPLIFICADO ABAIXO
    };

    const cielo = new Cielo(merchant_id, merchant_key, Envs.EV_SANDBOX);


    // Autorizar transacao de credito
    var trans = await cielo.authorizeCredit(trans);

    // Para CONFIRMAR uma autorização tardia
    if (trans.Payment.Status == Codes.ST_Authorized) {
        await cielo.confirmCredit(trans.Payment.PaymentId);
    }    

    // Para CANCELAR uma autorização tardia
    if (trans.Payment.Status == Codes.ST_Authorized) {
        await cielo.cancelCredit(trans.Payment.PaymentId);
    }   

 ```