import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeDailyListComponent } from './Components/DailyTaskList/home-daily-list/home-daily-list.component';
import { DailyTaskNotDueComponent } from './Components/DailyTaskList/daily-task-not-due/daily-task-not-due.component';
import { DueDailyComponent } from './Components/DailyTaskList/due-daily/due-daily.component';
import { HomePendingComponent } from './Components/ListPendingTasks/home-pending/home-pending.component';
import { CompletedEarringsComponent } from './Components/ListPendingTasks/completed-earrings/completed-earrings.component';
import { PendingActiveComponent } from './Components/ListPendingTasks/pending-active/pending-active.component';
import { ScheduledPendingComponent } from './Components/ListPendingTasks/scheduled-pending/scheduled-pending.component';
import { HomeHabitsComponent } from './Components/HabitsList/home-habits/home-habits.component';
import { StrongHabitsComponent } from './Components/HabitsList/strong-habits/strong-habits.component';
import { WeakHabitsComponent } from './Components/HabitsList/weak-habits/weak-habits.component';
import { HomeRewardsComponent } from './Components/RewardsList/home-rewards/home-rewards.component';
import { CustomRewardsComponent } from './Components/RewardsList/custom-rewards/custom-rewards.component';
import { WishListComponent } from './Components/RewardsList/wish-list/wish-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDailyListComponent,
    DailyTaskNotDueComponent,
    DueDailyComponent,
    HomePendingComponent,
    HomeHabitsComponent,
    StrongHabitsComponent,
    WeakHabitsComponent,
    HomeRewardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }