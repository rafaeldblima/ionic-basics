import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopPage } from './shop';
import { BuyoutPageModule } from './buyout/buyout.module';

@NgModule({
  declarations: [
    ShopPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopPage),
    BuyoutPageModule
  ],
})
export class ShopPageModule {}
