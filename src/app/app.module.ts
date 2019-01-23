import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { SubscribedPage } from '../pages/subscribed/subscribed';
import { RegisterErrorPage } from '../pages/register-error/register-error';
import { WelcomePage } from '../pages/welcome/welcome';
import { MygroupsPage } from '../pages/mygroups/mygroups';
import { AccountPage } from '../pages/account/account';
import { AddgroupPage } from '../pages/addgroup/addgroup';
import { AddschoolPage } from '../pages/addschool/addschool';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	RegisterPage,
	SubscribedPage,
	WelcomePage,
	MygroupsPage,
	AccountPage,
	AddgroupPage,
	AddschoolPage,
	RegisterErrorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	HttpClientModule,
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	RegisterPage,
	SubscribedPage,
	WelcomePage,
	MygroupsPage,
	AccountPage,
	AddgroupPage,
	AddschoolPage,
	RegisterErrorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
