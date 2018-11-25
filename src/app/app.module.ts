import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './nav/home/home.component';
import { AboutComponent } from './nav/about/about.component';
@NgModule({
  declarations: [
    AppComponent, NavbarComponent,SliderComponent, HomeComponent, AboutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
