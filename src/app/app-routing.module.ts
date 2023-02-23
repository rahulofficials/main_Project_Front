import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddticketComponent } from './addticket/addticket.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { NilgiriexploreComponent } from './nilgiriexplore/nilgiriexplore.component';
import { SuggestComponent } from './suggest/suggest.component';
import { ShowSuggestComponent } from './show-suggest/show-suggest.component';
import { AddcardsComponent } from './addcards/addcards.component';
import { AddnCardsComponent } from './addn-cards/addn-cards.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RoomStayComponent } from './room-stay/room-stay.component';
import { AddroomsComponent } from './addrooms/addrooms.component';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';



const routes: Routes = [
{path:'',component:HomeComponent},
{path:'explore',component:ExploreComponent},
{path:"tickets",component:TicketsComponent},
{path:"addTicket",canActivate:[AuthGuard],component:AddticketComponent},
{path:"editTicket", canActivate:[AuthGuard],component:EditTicketComponent},
{path:"login",component:LoginComponent},
{path:"edit/:id",component:UpdateTicketComponent},
{path:"nexplore",component:NilgiriexploreComponent},
{path:"suggest",component:SuggestComponent},
{path:"showsuggest",canActivate:[AuthGuard], component:ShowSuggestComponent},
{path:"addcards",canActivate:[AuthGuard],component:AddcardsComponent},
{path:"addncards",canActivate:[AuthGuard],component:AddnCardsComponent},
{path:"restaurants",component:RestaurantsComponent},
{path:"roomStay",component:RoomStayComponent},
{path:"addroom",canActivate:[AuthGuard],component:AddroomsComponent},
{path:"addrest",component:AddRestaurantsComponent} 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
