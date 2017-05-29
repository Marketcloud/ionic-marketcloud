import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MarketcloudService } from '../../providers/marketcloud-service'; 
import { ItemPage } from '../item/item';
import { CartPage } from '../cart/cart';

/*
  Generated class for the Products page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
  providers: [],
  entryComponents: [ItemPage]
})
export class ProductsPage {

  products:Array<any>;
  
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private marketcloud: MarketcloudService, 
      private alertCtrl: AlertController) {


  	var promise:any;
  	if (this.navParams.get('query')){
  		promise = marketcloud.client.products.list(this.navParams.get('query'));
  	} else {
  		promise = marketcloud.client.products.list();
  	}

    promise
    .then((response) => {
    	this.products = response.data;
    })
    .catch((error) => {
    	let alert = this.alertCtrl.create({
          title: 'Oops',
          subTitle: 'Unable to load products, please check your internet connection.',
          buttons: ['Ok']
        });

        alert.present();
    })
  }

  viewItemDetails(product){
  	// Showing single product details
  	this.navCtrl.push(ItemPage,{
  		product : product
  	})
  }

  viewCart() {
    this.navCtrl.push(CartPage)
  }

}
