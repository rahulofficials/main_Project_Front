import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(private api:ApiService, public _auth:AuthService) { 
    this.fetchData()
  }

  // Show Ticket Rates
  fetchData=()=>{
    this.api.getTickets().subscribe(
      (response)=>{
        this.listTickets=response
      }
    )
  }

  ngOnInit(): void {
  }

  listTickets:any=[];

}
