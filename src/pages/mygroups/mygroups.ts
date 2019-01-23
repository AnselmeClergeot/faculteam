import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddgroupPage } from '../addgroup/addgroup';

/**
 * Generated class for the MygroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mygroups',
  templateUrl: 'mygroups.html',
})
export class MygroupsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MygroupsPage');
  }
  
  addGroup() {
	  this.navCtrl.push(AddgroupPage);
	  console.log('groupe');
  }

}
