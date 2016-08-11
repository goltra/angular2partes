System.register(['angular2/core', '../model/cliente', 'angular2/router', '../services/clientes.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cliente_1, router_1, clientes_service_1;
    var ClienteEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cliente_1_1) {
                cliente_1 = cliente_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (clientes_service_1_1) {
                clientes_service_1 = clientes_service_1_1;
            }],
        execute: function() {
            ClienteEditComponent = (function () {
                function ClienteEditComponent(_clientesService, _routeParams, _router) {
                    this._clientesService = _clientesService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                ClienteEditComponent.prototype.onSubmit = function () {
                    var nuevo;
                    nuevo = this._routeParams.get("nuevo");
                    console.log(nuevo);
                    if (nuevo) {
                        this._clientesService.addCliente(this.cliente);
                        this._router.navigate(["ClientesList"]);
                    }
                    else {
                        alert('aun no he implementado el guardar un cliente existente');
                    }
                    //TODO: Guardar cambios en un cliente existente.
                };
                ClienteEditComponent.prototype.ngOnInit = function () {
                    this.cliente = new cliente_1.Cliente("", "");
                };
                ClienteEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/view/cliente-edit.html',
                        selector: 'cliente-edit',
                    }), 
                    __metadata('design:paramtypes', [clientes_service_1.ClientesService, router_1.RouteParams, router_1.Router])
                ], ClienteEditComponent);
                return ClienteEditComponent;
            }());
            exports_1("ClienteEditComponent", ClienteEditComponent);
        }
    }
});
//# sourceMappingURL=cliente-edit.component.js.map