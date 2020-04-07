import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  { path: 'comp-two', component: ComponentTwoComponent},
  { path: 'comp-three', component: ComponentThreeComponent},
  { path: 'default', component: DefaultComponent},

  { path: '', 
    redirectTo: '/default',
    pathMatch: 'full' }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
