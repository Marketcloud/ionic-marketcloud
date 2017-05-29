import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';

import { ProductsPage } from '../products/products';
/**
 * Generated class for the OrderCompleteModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-complete-modal',
  templateUrl: 'order-complete-modal.html',
})
export class OrderCompleteModalPage {

  constructor(
    public appCtrl : App,
    public viewCtrl : ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderCompleteModalPage');
  }

  returnHome() {
    this.viewCtrl.dismiss()
  }

}
