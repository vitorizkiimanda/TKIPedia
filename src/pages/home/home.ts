import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

import { ContentPage } from '../content/content';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list: any;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.getData();
  }

  Content(data) {
    console.log(data);
    this.navCtrl.push(ContentPage, data);
  }

  getData() {

    let loading = this.loadCtrl.create({
        content: 'memuat..',
        duration: 1000
    });
    
    loading.present(); 

    this.http.get('http://tkipedia.ocentrum.com/kriteria').subscribe((data) => {
       let response = data.json();
       this.list = response;
       console.log(this.list);
       loading.dismiss();
    });
  }

}
