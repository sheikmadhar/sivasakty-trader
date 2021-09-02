import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InappwebviewPageRoutingModule } from './inappwebview-routing.module';

import { InappwebviewPage } from './inappwebview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InappwebviewPageRoutingModule
  ],
  declarations: [InappwebviewPage]
})
export class InappwebviewPageModule {}
