import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import {AF} from './providers/af';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule} from '@angular/router';
// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyB55exQWgqr9RPR2unRv-gFqKhUZCRVdXc',
  authDomain: 'testapp-68044.firebaseapp.com',
  databaseURL: 'https://testapp-68044.firebaseio.com',
  storageBucket: 'testapp-68044.appspot.com',
  messagingSenderId: '812861050432'

};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, MycomponentComponent, LoginPageComponent, HomePageComponent ],
  bootstrap: [ AppComponent ],
  providers: [AF]
})
export class AppModule {}


