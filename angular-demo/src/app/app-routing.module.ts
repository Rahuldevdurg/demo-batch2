import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  // {
  //   path: 'products',
  //   loadChildren: './_products/products.module#ProductsModule',
  // },

  {
    path: 'products',
    loadChildren: () =>
      import('./_products/products.module').then((x) => x.ProductsModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./_users/users.module').then((x) => x.UsersModule),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
