import {RouterModule, Routes} from '@angular/router';
import {VideoComponent} from './video.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: VideoComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VideoRoutingModule {
}
