import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-inappwebview',
  templateUrl: './inappwebview.page.html',
  styleUrls: ['./inappwebview.page.scss'],
})
export class InappwebviewPage implements OnInit {
  

  ngOnInit() {
    this.openBlank();
  }
  constructor(private iab: InAppBrowser) {

  }

  openBlank() {
    this.iab.create('https://www.sivaasakty.in/payment-page/', '_blank');
  }
 
}