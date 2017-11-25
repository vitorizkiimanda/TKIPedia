import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  content:any;
  lampiran:any;

  id:number;
  title:string;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public navParams: NavParams) {

      // console.log(this.navParams.data);
      let temp = this.navParams.data;

      this.id = temp.id;
      this.title = temp.data;

      console.log(this.title);

      // let content = JSON.parse(this.navParams.data);
      

      // this.id = content.id;
      // console.log(this.id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
    this.getData();
  }


  getData() {
    this.http.get('http://tkipedia.ocentrum.com/info/'+this.id).subscribe((data) => {
      let response = data.json();
       this.content = response;
       console.log(this.content);
    });

    this.http.get('http://tkipedia.ocentrum.com/lampiran/'+this.id).subscribe((data) => {
      let response = data.json();
       this.lampiran = response;
       console.log(this.lampiran);
    });

   
  }

}
