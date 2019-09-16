import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AddDetailsComponent } from './add-details/add-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { UpdateDetailsComponent } from './update-details/update-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecipeDetailComponent,
    HomeComponent,
    AddDetailsComponent,
    UpdateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
