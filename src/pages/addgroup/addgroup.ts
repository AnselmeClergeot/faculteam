import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddschoolPage } from '../addschool/addschool';

/**
 * Generated class for the AddgroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addgroup',
  templateUrl: 'addgroup.html',
})
export class AddgroupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddgroupPage');
  }
  
  createPrivateGroup() {
	  console.log('private');
  }
  
  joinRandomGroup() {
	  console.log('random');
  }
  
  search() {
	  console.log('search');
  }
  
  addSchool() {
	  this.navCtrl.push(AddschoolPage);
	  console.log('add');
  }

}
