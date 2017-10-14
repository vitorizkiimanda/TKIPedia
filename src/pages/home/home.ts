import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContentPage } from '../content/content';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  Content() {
    this.navCtrl.push(ContentPage);
  }

}
