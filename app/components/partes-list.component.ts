import {Component} from 'angular2/core';
import {Parte} from '../model/parte';
import {PartesService} from '../services/partes.service';

@Component({
	templateUrl: 'app/view/partes-list.html',
	selector: 'partes-list'
})

export class PartesListComponent{
	public partes: Parte[];

	constructor(private _ParteService: PartesService){
		this.partes = _ParteService.getPartes();
	}
}