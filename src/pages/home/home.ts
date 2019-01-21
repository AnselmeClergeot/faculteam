import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { JoinPage } from '../join/join';

import {
    HttpClient
} from '@angular/common/http';

import {
    Validators,
    FormBuilder,
    FormGroup,
    FormControl,
    AbstractControl
} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	login_form : FormGroup;

  constructor(public navCtrl: NavController, private formBuilder : FormBuilder, private http : HttpClient) {
	  
        this.login_form = this.formBuilder.group({

            password: new FormControl('', Validators.compose([
                Validators.required,
            ])),

            mail: new FormControl('', Validators.compose([
                Validators.required,
            ]))
		});

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }
  
  register() {
	  this.navCtrl.push(RegisterPage);
  }
  
  connect() {
	  
	  var url = 'http://localhost/Server/login.php';
	  
        let data = {
            "mail": this.login_form.controls['mail'].value,
            "password": this.login_form.controls['password'].value
        };
		
        let headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        this.http.post(url, data, headers).subscribe(
            (result) => {

				result = result['message'];
				
                if(result == 'connected') {
					this.navCtrl.push(JoinPage);
				}
				else if(result == 'no_such_user') {
					console.log('Unknown user.');
				}
				else if(result == 'wrong_password') {
					console.log('Wrong password');
				}
				else {
					console.log('error');
				}
            }, (err) => {
                console.log(err);
  }
        );
  }

}
