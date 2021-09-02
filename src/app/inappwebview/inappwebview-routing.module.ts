import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InappwebviewPage } from './inappwebview.page';

const routes: Routes = [
  {
    path: '',
    component: InappwebviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InappwebviewPageRoutingModule {}
