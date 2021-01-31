import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { GuitarsComponent } from './guitars/guitars.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ElectricComponent } from './electric/electric.component';
import { AcousticComponent } from './acoustic/acoustic.component';
import { ClassicalComponent } from './classical/classical.component';
import { HollowBodyComponent } from './hollow-body/hollow-body.component';
import { BassesComponent } from './basses/basses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    GuitarsComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactUsComponent,
    ElectricComponent,
    AcousticComponent,
    ClassicalComponent,
    HollowBodyComponent,
    BassesComponent,
    PageNotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }