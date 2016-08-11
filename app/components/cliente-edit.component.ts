import {Component, OnInit} from 'angular2/core';
import {Cliente} from '../model/cliente';
import {Router, RouteParams} from 'angular2/router';
import {ClientesService} from '../services/clientes.service';

@Component({
	templateUrl: 'app/view/cliente-edit.html',
	selector: 'cliente-edit',
})

export class ClienteEditComponent{

	public cliente: Cliente;

	constructor(private _clientesService: ClientesService, 
		private _routeParams: RouteParams,
		private _router: Router){

	}	
	onSubmit(){
		let nuevo;
		nuevo = this._routeParams.get("nuevo");
		console.log(nuevo);
		if(nuevo){
			this._clientesService.addCliente(this.cliente);
			this._router.navigate(["ClientesList"]);
		} else {
			alert('aun no he implementado el guardar un cliente existente');
		}


		//TODO: Guardar cambios en un cliente existente.
	}
	ngOnInit():any{
		this.cliente = new Cliente("","");
	}
}