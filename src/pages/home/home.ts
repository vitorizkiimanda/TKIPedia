import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
    public http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.getData();
  }

  Content() {
    this.navCtrl.push(ContentPage);
  }

  getData() {
    this.http.get('http://localhost/Projects/TKIPedia/src/assets/json/list-tkipedia.json').subscribe((data) => {
       let response = data.json();
       this.list = response.Data;
       console.log(this.list);
    });

    // this.http.get('http://localhost/Projects/TKIPedia/src/assets/json/search-list.json').subscribe(data => {
    //   let response = data.json();
    //   console.log(response);
    // });


  }

}
