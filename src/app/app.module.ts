import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddticketComponent } from './addticket/addticket.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
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
import { Ng2SearchPipeModule } from 'ng2-search-filter';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ExploreComponent,
    AboutComponent,
    FooterComponent,
    TicketsComponent,
    AddticketComponent,
    EditTicketComponent,
    LoginComponent,
    UpdateTicketComponent,
    NilgiriexploreComponent,
    SuggestComponent,
    ShowSuggestComponent,
    AddcardsComponent,
    AddnCardsComponent,
    RestaurantsComponent,
    RoomStayComponent,
    AddroomsComponent,
    AddRestaurantsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
