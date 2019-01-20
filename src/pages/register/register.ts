import {
    Component,
    Input
} from '@angular/core';

import {
    Validators,
    FormBuilder,
    FormGroup,
    FormControl,
    AbstractControl
} from '@angular/forms';

import {
    IonicPage,
    NavController,
    NavParams
} from 'ionic-angular';

import {
    HttpClient
} from '@angular/common/http';

@IonicPage()

@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})

export class RegisterPage {

    private register_form: FormGroup;

    static passwordMatching(group: FormGroup) {

        var firstPassword = group.controls['password'].value;
        var secondPassword = group.controls['passwordconfirm'].value;

        if ((firstPassword && secondPassword) && (firstPassword != secondPassword)) {
            group.controls['passwordconfirm'].setErrors({
                "password_mismatch": true
            });
            return {
                "password_mismatch": true
            };
        } else
            return null;

    }

    static mailAvailable(http: HttpClient) {

        return (control: AbstractControl): {
            [key: string]: any
        } => {
            var mail = control.value;
            let headers = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            http.post('http://localhost/Server/register_check.php', {
                'mail': mail
            }, headers).subscribe(res => {
                    if (res == '1') {
                        console.log("aie");
                        control.setErrors({
                            'not_available': true
                        });
                        return {
                            'not_available': true
                        };
                    } else {
                        return null;
                    }
                },
                err => {
                    console.log(err)
                });
            return null;
        };

    }

    constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public http: HttpClient) {

        this.register_form = this.formBuilder.group({

            firstname: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[A-zÀ-ú]+$'),
                Validators.minLength(2),
                Validators.maxLength(15)
            ])),

            lastname: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[A-zÀ-ú]+$'),
                Validators.minLength(2),
                Validators.maxLength(20)
            ])),

            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,15}$"),
            ])),

            passwordconfirm: new FormControl('', Validators.required),

            mail: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email,
                RegisterPage.mailAvailable(this.http)
            ]))

        }, {
            'validator': RegisterPage.passwordMatching
        });

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }

    register() {

        var url = 'http://localhost/Server/register.php';
        let data = {
            "mail": this.register_form.controls['mail'].value,
            "firstname": this.register_form.controls['firstname'].value,
            "lastname": this.register_form.controls['lastname'].value,
            "password": this.register_form.controls['password'].value
        };
        let headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        this.http.post(url, data, headers).subscribe(
            (result) => {
                console.log(result)
            }, (err) => {
                console.log(err);
            }
        );
    }
}
