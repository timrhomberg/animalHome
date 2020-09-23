import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAnimalComponent } from './component/new-animal/new-animal.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: 'newAnimal', component: NewAnimalComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: DashboardComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  PageNotFoundComponent,
  DashboardComponent,
  NewAnimalComponent
  ];
