import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShowApiComponent } from './show-api/show-api.component';
import { UserTestComponent } from './view/user-test/user-test.component';

const routes: Routes = [{
  path: '',
  component: UserTestComponent
},

{
  path: 'data',
  component: ShowApiComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }