import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { MarketcloudService } from '../../providers/marketcloud-service'; 

import { ProductsPage } from '../products/products';
/*
  Generated class for the Categories page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
  providers: [],
  entryComponents: [ProductsPage]
})
export class CategoriesPage {

  categories: Array<any>;
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private marketcloud: MarketcloudService,
      private alertCtrl: AlertController) {

    marketcloud.client.categories.list()
    .then((response) => {
      this.categories = response.data;
    })
    .catch((error) => {
      let alert = this.alertCtrl.create({
          title: 'Oops',
          subTitle: 'Unable to load categories, please check your internet connection.',
          buttons: ['Ok']
        });

        alert.present();
    })

  }

  showProductsInCategory(category) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductsPage, {
      query : {
        category_id : category.id
      }
    });
  }

}
