import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitsComponent } from './habits/habits.component';
import { DailyTasksComponent } from './daily-tasks/daily-tasks.component';
import { ObjectivesOrPendingComponent } from './objectives-or-pending/objectives-or-pending.component';
import { RewardsComponent } from './rewards/rewards.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitsComponent,
    DailyTasksComponent,
    ObjectivesOrPendingComponent,
    RewardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
