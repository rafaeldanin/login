import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticaProvider } from './../../providers/autentica/autentica';

@IonicPage()
@Component({
  selector: 'page-criar-conta',
  templateUrl: 'criar-conta.html',
})
export class CriarContaPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private autenticaProvider: AutenticaProvider,
    private toast: ToastController,
    private formBuilder: FormBuilder
    ) {
}

}
