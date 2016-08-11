// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {PartesListComponent} from './components/partes-list.component';
import {ClientesListComponent} from './components/clientes-list.component';
import {ClienteEditComponent} from './components/cliente-edit.component';
import {PartesService} from './services/partes.service';
import {ClientesService} from './services/clientes.service';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';


 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl:'app/view/home.html',
    directives:[
            PartesListComponent,
            ClientesListComponent,
            ROUTER_DIRECTIVES
        ],
     providers:[PartesService, ClientesService]
})

@RouteConfig([
    {
        path:'/partes-list',
        name:'PartesList',
        component: PartesListComponent,
        useAsDefault: true,
    },
    {
        path:'/clientes-list',
        name:'ClientesList',
        component: ClientesListComponent
    },
    {
        path:'/cliente-edit/:nuevo',
        name:'ClienteEdit',
        component: ClienteEditComponent
    },
])
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
    public titulo: string = "Partes de Trabajo";
    
 }