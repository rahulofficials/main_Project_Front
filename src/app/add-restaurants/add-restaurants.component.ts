import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.css']
})
export class AddRestaurantsComponent implements OnInit {

  constructor( private api:ApiService, public Router:Router ) { }

  ngOnInit(): void {
  }

  // ======================= Nilgiri RESTAURANT POST ===========================================
pname=""
pimage=""
prating=""
pdirection=""
  addRest=()=>{
let restaurant={
"pname":this.pname,
"pimage":this.pimage,
"prating":this.prating,
"pdirection":this.pdirection
}
console.log(restaurant)
this.api.addRest(restaurant).subscribe(
  (response)=>{
    console.log(response)
    alert("Restaurant Data Added Successfully")
   }
 )
}


// ======================================== Wayanad RESTAURANT Post =============================================

wname=""
wimage=""
wrating=""
wdirection=""

addWrest=()=>{
  let restaurantw={
    "wimage":this.wimage,
    "wname":this.wname,
    "wrating":this.wrating,
    "wdirection":this.wdirection
  }
  this.api.addwRest(restaurantw).subscribe(
    (response)=>{
      console.log(response)
      alert("Restaurant Data Added Successfully")
    }
  )
}



}
