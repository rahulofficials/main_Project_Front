import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-room-stay',
  templateUrl: './room-stay.component.html',
  styleUrls: ['./room-stay.component.css']
})
export class RoomStayComponent implements OnInit {

  constructor( private api:ApiService, private Router:Router, public _auth:AuthService ) {
   }

  ngOnInit(): void {
  }
//=================== GET ROOMS NILGIRI =======================
getrooms=()=>{
  this.api.viewRooms().subscribe(
    (response)=>{
      this.listOfRooms=response
    }
  )
}

// DELETE 
deleterooms=(id:any)=>{
  const deleteData:any = {"_id":id}
  this.api.deleteRooms(deleteData).subscribe(
    (response:any)=>{
      if (response.status=="success") {
        alert("Room Data Deleted Successfully")
      } else {
        alert("Error in deletion")
      }

    }
  )
}

// ============================ GET ROOMS WAYANAD ==============================
// GET
getwRooms=()=>{
  this.api.getWRooms().subscribe(
    (response)=>{
      this.listOfwRooms = response
    }
  )
}

// DELETE
deleteWrooms=(id:any)=>{
  const dataDelete:any = {"_id":id}
  this.api.deletewRooms(dataDelete).subscribe(
    (response:any)=>{
      if (response.status=="success") {
        alert("Rooms Data Deleted Succesfully")
      } else {
        alert("Error in Deletion")
      }

    }
  )

}

// ============================ ALERT BOX ======================================
alertonclick=()=>{
  alert("You are redirected to trip.com for booking rooms online")
}


// ============================ REDIRECTING TO ADDING PAGE =====================
navigateTo=()=>{
  this.Router.navigate(['/addroom'])
}


// ============================ ARRAY FOR RECEIVING DATA =======================
listOfRooms:any=[]
listOfwRooms:any=[]
}
