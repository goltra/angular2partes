import {Injectable} from 'angular2/core';
import {Cliente} from '../model/cliente';
import {CLIENTES} from './mock.clientes';

@Injectable()

export class ClientesService{
	getClientes(){
		return CLIENTES;
	}

	addCliente(cliente: Cliente){
		Promise.resolve(CLIENTES).then((clientes: Cliente[])=>clientes.push(cliente));
	}
}