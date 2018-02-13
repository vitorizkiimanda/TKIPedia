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
  list_search: any;
  search = false;

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

  //Fungsi Searchbar
  getItems(ev) {
    this.search=true;

    // Reset items back to all of the items
    this.list_search = this.list;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list_search = this.list_search.filter((item) => {
        return (item.data.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {
      this.search=false;
    }

    console.log(this.list_search);
    console.log("search="+this.search);
  }

}
