import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { JoinPage } from '../join/join';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  register() {
	  this.navCtrl.push(RegisterPage);
  }
  
  connect() {
	  this.navCtrl.push(JoinPage);
  }

}
