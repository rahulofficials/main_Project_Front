import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'explore',component:ExploreComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
