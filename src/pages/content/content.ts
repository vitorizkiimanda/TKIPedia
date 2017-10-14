import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

}
