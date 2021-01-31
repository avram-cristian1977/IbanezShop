import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProductsComponent} from './products/products.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ElectricComponent} from './electric/electric.component';
import {AcousticComponent} from './acoustic/acoustic.component';
import {ClassicalComponent} from './classical/classical.component';
import {HollowBodyComponent} from './hollow-body/hollow-body.component';
import {BassesComponent} from './basses/basses.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {AdminComponent} from './admin/admin.component';
 


const routes: Routes = [
  {path : 'admin', component:AdminComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home', component:HomeComponent},
  {path : 'about', component:AboutComponent},
  {path : 'products', component:ProductsComponent},
  {path : 'products/electric', component:ElectricComponent},
  {path : 'products/acoustic', component:AcousticComponent},
  {path : 'products/classical', component:ClassicalComponent},
  {path : 'products/hollow', component:HollowBodyComponent},
  {path : 'products/basses', component:BassesComponent},
  {path : 'contactUs', component:ContactUsComponent},
  {path : '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
