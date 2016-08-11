import {Injectable} from 'angular2/core';
import {PARTES} from './mock.partes';
import {Parte} from '../model/parte';

@Injectable()

export class PartesService{
	getPartes(){
		return PARTES;
	}

	addParte(parte: Parte){
		Promise.resolve(PARTES).then((partes: Parte[])=>partes.push(parte));
	}
}
