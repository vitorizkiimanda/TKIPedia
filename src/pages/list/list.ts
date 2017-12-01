import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  quest1=false;
  quest2=false;
  quest3=false;
  quest4=false;
  quest5=false;
  quest6=false;
  quest7=false;
  quest8=false;
  quest9=false;
  quest10=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  Quest1() {
    if(this.quest1==true) this.quest1 = false;
    else this.quest1 = true; 
  }

  Quest2() {
    if(this.quest2==true) this.quest2 = false;
    else this.quest2 = true; 
  }

  Quest3() {
    if(this.quest3==true) this.quest3 = false;
    else this.quest3 = true; 
  }

  Quest4() {
    if(this.quest4==true) this.quest4 = false;
    else this.quest4 = true; 
  }

  Quest5() {
    if(this.quest5==true) this.quest5 = false;
    else this.quest5 = true; 
  }

  Quest6() {
    if(this.quest6==true) this.quest6 = false;
    else this.quest6 = true; 
  }

  Quest7() {
    if(this.quest7==true) this.quest7 = false;
    else this.quest7 = true; 
  }

  Quest8() {
    if(this.quest8==true) this.quest8 = false;
    else this.quest8 = true; 
  }

  Quest9() {
    if(this.quest9==true) this.quest9 = false;
    else this.quest9 = true; 
  }

  Quest10() {
    if(this.quest10==true) this.quest10 = false;
    else this.quest10 = true; 
  }
  
}
