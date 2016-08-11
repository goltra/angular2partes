System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Cliente;
    return {
        setters:[],
        execute: function() {
            Cliente = (function () {
                function Cliente(
                    //public id: number,
                    nombre, telefono) {
                    this.nombre = nombre;
                    this.telefono = telefono;
                }
                return Cliente;
            }());
            exports_1("Cliente", Cliente);
        }
    }
});
//# sourceMappingURL=cliente.js.map