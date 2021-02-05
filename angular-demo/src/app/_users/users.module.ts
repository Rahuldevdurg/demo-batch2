import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'details',
        component: UserDetailsComponent,
      },
    ]),
    SharedModule,
  ],
  exports: [],
  declarations: [UserListComponent, UserDetailsComponent],
  providers: [],
})
export class UsersModule {}
