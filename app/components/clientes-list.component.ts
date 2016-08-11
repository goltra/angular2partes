import {Component} from 'angular2/core';
import {ClientesService} from '../services/clientes.service';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Cliente} from '../model/cliente';

@Component({
	templateUrl: 'app/view/clientes-list.html',
	selector: 'clientes-list',
	directives:[ROUTER_DIRECTIVES]
})

export class ClientesListComponent{
	public clientes: Cliente[];
	constructor(private _clientesService: ClientesService){
		this.clientes = _clientesService.getClientes();
	}
}