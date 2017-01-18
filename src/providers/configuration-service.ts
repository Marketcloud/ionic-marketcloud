import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConfigurationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConfigurationService {

  // Declared as any for the sake of simplicity
  // we will dive more into Typescript later
  data:any = {};

  constructor() {
  }

  set(key,value) {
  	this.data[key] = value;
  }

  get(key) {
  	return this.data[key];
  }



}
