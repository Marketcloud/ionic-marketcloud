import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

declare var Marketcloud: any;

import '../../node_modules/marketcloud-js/dist/marketcloud.min';

/*
  Generated class for the MarketcloudService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MarketcloudService {

  client:any;

  utils:any;

  constructor() {

    // Here we create an instance of the client
    // Since this Service is created once
    // we will not have to re-create other instances of the client.

    this.client = new Marketcloud.Client({
    	publicKey : 'f84af487-a315-42e6-a57a-d79296bd9d99'
    });

    this.utils = Marketcloud.Utils;

  }

}
