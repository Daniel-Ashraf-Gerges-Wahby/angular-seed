import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';
import { HomepageRoutes } from './homepage.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomepageRoutes)
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }
