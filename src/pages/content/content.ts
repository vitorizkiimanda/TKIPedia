import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
    public navParams: NavParams,
    public loadCtrl: LoadingController) {

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

    let loading = this.loadCtrl.create({
        content: 'memuat..',
        duration: 1000
    });
    
    loading.present(); 

    this.http.get('http://tkipedia.ocentrum.com/info/'+this.id).subscribe((data) => {
      let response = data.json();
       this.content = response;
       console.log(this.content);

       loading.dismiss();
    });

    this.http.get('http://tkipedia.ocentrum.com/lampiran/'+this.id).subscribe((data) => {
      let response = data.json();
       this.lampiran = response;
       console.log(this.lampiran);
    });   
  }

}
