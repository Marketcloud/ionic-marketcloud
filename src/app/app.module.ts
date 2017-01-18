import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProductsPage } from '../pages/products/products';
import { CategoriesPage } from '../pages/categories/categories';
import { ItemPage } from '../pages/item/item';
import { CartPage } from '../pages/cart/cart';
import { ConfigurationService } from '../providers/configuration-service';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    ProductsPage,
    CategoriesPage,
    ItemPage,
    CartPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductsPage,
    CategoriesPage,
    ItemPage,
    CartPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigurationService,
    Storage
  ]
})
export class AppModule {}
