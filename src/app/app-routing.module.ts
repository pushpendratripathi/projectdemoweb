import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './nav/home/home.component';
import { AboutComponent } from './nav/about/about.component';
import { ServicesComponent } from './nav/services/services.component';

const routes: Routes = [
  { path: 'Home', component:HomeComponent},
  { path: 'About', component:AboutComponent},
  { path: 'Services', component:ServicesComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
