import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HomePendingComponent } from './Components/ListPendingTasks/home-pending/home-pending.component';
import { PendingActiveComponent } from './Components/ListPendingTasks/pending-active/pending-active.component';
import { ScheduledPendingComponent } from './Components/ListPendingTasks/scheduled-pending/scheduled-pending.component';
import { CompletedEarringsComponent } from './Components/ListPendingTasks/completed-earrings/completed-earrings.component';
import { HomeDailyListComponent } from './Components/DailyTaskList/home-daily-list/home-daily-list.component';
import { DueDailyComponent } from './Components/DailyTaskList/due-daily/due-daily.component';
import { DailyTaskNotDueComponent } from './Components/DailyTaskList/daily-task-not-due/daily-task-not-due.component';
import { AllTodoComponent } from './Components/DailyTaskList/all-todo/all-todo.component';
import { HomeHabitsComponent } from './Components/HabitsList/home-habits/home-habits.component';
import { RegularComponent } from './Components/HabitsList/regular/regular.component';
import { WeakHabitsComponent } from './Components/HabitsList/weak-habits/weak-habits.component';
import { StrongHabitsComponent } from './Components/HabitsList/strong-habits/strong-habits.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'pending',
        component: HomePendingComponent,

        children: [
          { path: 'active', component: PendingActiveComponent },
          { path: 'scheduled', component: ScheduledPendingComponent },
          { path: 'completed', component: CompletedEarringsComponent },
        ],
      },
      {
        path: 'daily',
        component: HomeDailyListComponent,
        children: [
          { path: 'due', component: DueDailyComponent },
          { path: 'notDue', component: DailyTaskNotDueComponent },
          { path: 'all', component: AllTodoComponent },
        ],
      },
      {
        path: 'habits',
        component: HomeHabitsComponent,
        children: [
          { path: 'regular', component: RegularComponent },
          { path: 'weak', component: WeakHabitsComponent },
          { path: 'strong', component: StrongHabitsComponent },
        ],
      },
    ],
  },
  /**habitos */
  { path: 'regular', redirectTo: '/home/habits/regular' },
  { path: 'strong',  redirectTo: '/home/habits/strong' },
  { path: 'weak', redirectTo:'/home/habits/weak' },

  /**Pendientes */
  { path: 'active', component: PendingActiveComponent /* redirectTo: '/home/pending/active' */ },
  { path: 'scheduled', redirectTo: '/home/pending/scheduled' },
  { path: 'completed', redirectTo: '/home/pending/completed' },

  /**Diarios*/
  { path: 'due', redirectTo: '/home/daily/due' },
  { path: 'all', redirectTo: '/home/daily/all' },
  { path: 'notDue', redirectTo: '/home/daily/notDue' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
