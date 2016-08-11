System.register(['angular2/core', './components/partes-list.component', './components/clientes-list.component', './components/cliente-edit.component', './services/partes.service', './services/clientes.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, partes_list_component_1, clientes_list_component_1, cliente_edit_component_1, partes_service_1, clientes_service_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (partes_list_component_1_1) {
                partes_list_component_1 = partes_list_component_1_1;
            },
            function (clientes_list_component_1_1) {
                clientes_list_component_1 = clientes_list_component_1_1;
            },
            function (cliente_edit_component_1_1) {
                cliente_edit_component_1 = cliente_edit_component_1_1;
            },
            function (partes_service_1_1) {
                partes_service_1 = partes_service_1_1;
            },
            function (clientes_service_1_1) {
                clientes_service_1 = clientes_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = "Partes de Trabajo";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/view/home.html',
                        directives: [
                            partes_list_component_1.PartesListComponent,
                            clientes_list_component_1.ClientesListComponent,
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [partes_service_1.PartesService, clientes_service_1.ClientesService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/partes-list',
                            name: 'PartesList',
                            component: partes_list_component_1.PartesListComponent,
                            useAsDefault: true,
                        },
                        {
                            path: '/clientes-list',
                            name: 'ClientesList',
                            component: clientes_list_component_1.ClientesListComponent
                        },
                        {
                            path: '/cliente-edit/:nuevo',
                            name: 'ClienteEdit',
                            component: cliente_edit_component_1.ClienteEditComponent
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map