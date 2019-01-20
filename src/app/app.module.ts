import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { JoinPage } from '../pages/join/join';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	RegisterPage,
	JoinPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	RegisterPage,
	JoinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
