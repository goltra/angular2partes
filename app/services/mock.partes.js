System.register(["../model/parte"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var parte_1;
    var PARTES;
    return {
        setters:[
            function (parte_1_1) {
                parte_1 = parte_1_1;
            }],
        execute: function() {
            exports_1("PARTES", PARTES = [
                new parte_1.Parte("Juan", "01/01/2015", "observaciones"),
                new parte_1.Parte("Pepe", "01/12/2015", "observaciones"),
                new parte_1.Parte("Antonio", "19/01/2015", "observaciones"),
                new parte_1.Parte("Fran", "01/08/2015", "observaciones"),
                new parte_1.Parte("Jesús", "01/07/2015", "observaciones")
            ]);
        }
    }
});
//# sourceMappingURL=mock.partes.js.map