import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {


  constructor(private api:ApiService , private router:Router, ) { 
    this.fetchTicket()
  }

  fetchTicket=()=>{
    this.api.getTickets().subscribe(
      (response)=>{
        this.editTickets=response
      }
    )
  }


       
  ngOnInit(): void {
  }
  editTickets:any=[];     //creating ARRAY for incoming Data

  // DELETE EVENT

  deleteEvent=(id:any)=>{
    const deleteData:any ={"_id":id}
    this.api.removeData(deleteData).subscribe(
      (response:any)=>{
        if (response.status=="Success") {
          alert("Succesfully Deleted")
          this.fetchTicket()
        } else {
          alert("Error in Deletion")
        }
      }
    )
  }

// NAVIGATING 
navigateToEdit(id:any) {
 this.router.navigate([`/edit/${id}`])
  }


//Navigating to add Page 
navigateToadd=()=>{
  this.router.navigate(["addTicket"])
} 
}
