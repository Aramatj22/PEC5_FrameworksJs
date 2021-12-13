import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WineItemComponent } from "./wines/wine-item/wine-item.component";
import { WineListComponent } from "./wines/wine-list/wine-list.component";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateWineComponent } from './wines/create-wine/create-wine.component';

@NgModule({
  declarations: [
    AppComponent,WineItemComponent, WineListComponent, CreateWineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
