import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MygroupsPage} from '../mygroups/mygroups';
import {AccountPage} from '../account/account';

import {
    HttpClient
} from '@angular/common/http';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the JoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
	
	public user_data = {};
	
	myGroups = MygroupsPage;
	myAccount = AccountPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HttpClient, private storage : Storage) {
	  
	  var url = 'http://localhost/Server/get_user_data.php';
	  
	  storage.get('mail').then((mail) => {
			let data = {
            "mail": mail
        };
		
        let headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        this.http.post(url, data, headers).subscribe(
            (result) => {
				this.user_data = result['firstname'];

            }, (err) => {
                console.log(err);
            }
        );
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinPage');
  }

}

