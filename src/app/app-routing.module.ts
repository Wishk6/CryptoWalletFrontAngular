import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataViewComponent } from './view/data-view/data-view.component';
import { MenuComponent } from './view/menu/menu.component';

const routes: Routes = [{
  path: '',
  component: MenuComponent
},

{
  path: 'data',
  component: DataViewComponent,
//  data:{requiresLogin:true}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }