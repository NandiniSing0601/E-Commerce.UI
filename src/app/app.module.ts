import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product/product.component';
import { SuggestedProductsComponent } from './products/suggested-products/suggested-products.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SuggestedProductsComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
