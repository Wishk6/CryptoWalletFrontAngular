import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowApiComponent } from './show-api/show-api.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [{
  path: '',
  component: ShowApiComponent
},

{
  path: 'training',
  component: TrainingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }