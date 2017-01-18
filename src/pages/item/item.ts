import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import {MarketcloudService} from '../../providers/marketcloud-service';
import {ConfigurationService} from '../../providers/configuration-service';

import { Storage } from '@ionic/storage';
/*
  Generated class for the Item page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

  product:any;
  selectedVariants:any = {};
  cart_id:number;
  constructor(  public navCtrl: NavController,
                public navParams: NavParams,
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController,
                private marketcloud: MarketcloudService,
                public storage: Storage,
                public configuration: ConfigurationService) {
  	

        this.product = this.navParams.get('product');



  }



  ionViewDidLoad() {
    
  }

  addToCart(product) {
  	
  	let loading = this.loadingCtrl.create({
	    content: 'Adding to cart...'
	  });
  	loading.present();

    let line_item:any = {};

    line_item.product_id = this.product.id;
    line_item.quantity = 1;

    if (this.product.type === 'product_with_variants'){
      line_item.options = this.selectedVariants;
    }

    this.marketcloud.client.carts.add(this.configuration.get('cart_id'),[
        line_item
    ])
  	.then((response) => {
      loading.dismiss();
      let alert = this.alertCtrl.create({
          title: 'Added to cart!',
          subTitle: 'Item added to cart',
          buttons: ['Ok']
        });

        alert.present();

    })
    .catch((error) => {
      loading.dismiss();
      let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'An error has occurred, please retry.',
          buttons: ['Ok']
        });
        alert.present();

    })
  }

  keys(obj) : Array<string> {
    return Object.keys(obj);
  }


  requiredOptionsAreMissing() {
    


    if (this.product.type === 'product_with_variants') {
      if (Object.keys(this.selectedVariants).length < Object.keys(this.product.variantsDefinition).length)
        return true;
    }

    return false;
  }

}
