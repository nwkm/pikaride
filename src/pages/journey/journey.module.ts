import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JourneyPage } from './journey';


@NgModule({
  declarations: [
    JourneyPage
  ],
  imports: [
    IonicPageModule.forChild(JourneyPage),
  ],
  entryComponents: [
  ],
  exports: [
  ]
})
export class JourneyPageModule {}
