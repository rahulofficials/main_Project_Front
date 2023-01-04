import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddticketComponent } from './addticket/addticket.component';
import { ContactComponent } from './contact/contact.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'explore',component:ExploreComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:"tickets",component:TicketsComponent},
{path:"addTicket",canActivate:[AuthGuard],component:AddticketComponent},
{path:"editTicket", canActivate:[AuthGuard],component:EditTicketComponent},
{path:"login",component:LoginComponent},
{path:"edit/:id",component:UpdateTicketComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
