import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private api:ApiService, private router:Router, public _auth:AuthService) { }

  ngOnInit(): void {
  }
// ============================= NILGIRI RESTAURANT ============================
// get
getrest=()=>{
  this.api.getRest().subscribe(
    (response)=>{
      this.listOfRest = response
    }
  )
}

// delete
deleteRest=(id:any)=>{
  const deleteData:any = {"_id":id}
  this.api.deleteRest(deleteData).subscribe(
    (response:any)=>{
      if (response.status=="success") {
        alert("Restaurant Data Deleted Successfully")
      } else {
        alert("Error in Deletion")
        
      }

    }
  )

}

// ============================== WAYANAD RESTAURANT ========================
// get
getwrest=()=>{
this.api.getwRest().subscribe(
  (response)=>{
    this.listOfwRest=response
  }
)
}

// delete
deletewRest=(id:any)=>{
  const deletewData:any = {"_id":id}
  this.api.deletewRest(deletewData).subscribe(
    (response:any)=>{
      if (response.status=="success") {
        alert("Restaurant Data Deleted Successfully")
      } else {
        alert("Error in Deletion")
      }
    }
  )

}

// ============================== NAVIGATING ================================
navigateTo=()=>{
  this.router.navigate(['/addrest'])
}

// ============================== ARRAY OF GETTING DATA ========================
listOfRest:any=[]
listOfwRest:any=[]
}
