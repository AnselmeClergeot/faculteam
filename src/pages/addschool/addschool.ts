import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
    Validators,
    FormBuilder,
    FormGroup,
    FormControl,
    AbstractControl
} from '@angular/forms';

/**
 * Generated class for the AddschoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addschool',
  templateUrl: 'addschool.html',
})
export class AddschoolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder : FormBuilder) {
	  
	  this.addschool_form = this.formBuilder.group({

            name : new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(30)
            ])),

            city: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(30)
            ]))

        });
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddschoolPage');
  }
  

}
