System.register(['../model/cliente'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var cliente_1;
    var CLIENTES;
    return {
        setters:[
            function (cliente_1_1) {
                cliente_1 = cliente_1_1;
            }],
        execute: function() {
            exports_1("CLIENTES", CLIENTES = [
                new cliente_1.Cliente('Pepe', '987654321'),
                new cliente_1.Cliente('Juan', '123456789'),
                new cliente_1.Cliente('Antonio', '765432123')
            ]);
        }
    }
});
//# sourceMappingURL=mock.clientes.js.map