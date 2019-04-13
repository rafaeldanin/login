import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireAuth: AngularFireAuth){

  }
  userName: string;


  ionViewDidLoad(){
    const userState = this.angularFireAuth.authState.subscribe( user => {
      if(user){
        this.userName = user.displayName;
        userState.unsubscribe();
      }
    })
  }

  sair(){
    this.angularFireAuth.auth.signOut();
    this.userName='';
  }
}
