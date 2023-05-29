import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeDailyListComponent } from "./Components/DailyTaskList/home-daily-list/home-daily-list.component";
import { DailyTaskNotDueComponent } from "./Components/DailyTaskList/daily-task-not-due/daily-task-not-due.component";
import { DueDailyComponent } from "./Components/DailyTaskList/due-daily/due-daily.component";
import { HomePendingComponent } from "./Components/ListPendingTasks/home-pending/home-pending.component";
import { CompletedEarringsComponent } from "./Components/ListPendingTasks/completed-earrings/completed-earrings.component";
import { PendingActiveComponent } from "./Components/ListPendingTasks/pending-active/pending-active.component";
import { ScheduledPendingComponent } from "./Components/ListPendingTasks/scheduled-pending/scheduled-pending.component";
import { HomeHabitsComponent } from "./Components/HabitsList/home-habits/home-habits.component";
import { StrongHabitsComponent } from "./Components/HabitsList/strong-habits/strong-habits.component";
import { WeakHabitsComponent } from "./Components/HabitsList/weak-habits/weak-habits.component";
import { HomeRewardsComponent } from "./Components/RewardsList/home-rewards/home-rewards.component";
import { CustomRewardsComponent } from "./Components/RewardsList/custom-rewards/custom-rewards.component";
import { WishListComponent } from "./Components/RewardsList/wish-list/wish-list.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./Components/home/home.component";
import { AllTodoComponent } from './Components/DailyTaskList/all-todo/all-todo.component';
import { RegularComponent } from './Components/HabitsList/regular/regular.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AllPendingComponent } from './Components/ListPendingTasks/all-pending/all-pending.component';
import { AllSubTaskComponent } from './Components/all-sub-task/all-sub-task.component';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompletedEarringsComponent,
    PendingActiveComponent,
    ScheduledPendingComponent,
    CustomRewardsComponent,
    WishListComponent,
    HomeDailyListComponent,
    DailyTaskNotDueComponent,
    DueDailyComponent,
    HomePendingComponent,
    HomeHabitsComponent,
    StrongHabitsComponent,
    WeakHabitsComponent,
    HomeRewardsComponent,
    AllTodoComponent,
    RegularComponent,
    AllPendingComponent,
    AllSubTaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
