import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnityComponent } from "./components/unity/unity.component";
import { HomeComponent } from './views/home/home.component';

// layouts

const routes: Routes = [
  
  // no layout views
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}