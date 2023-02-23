import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addrooms',
  templateUrl: './addrooms.component.html',
  styleUrls: ['./addrooms.component.css']
})
export class AddroomsComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
// ======================= Nilgiri Rooms POST ===========================================
pname=""
pimage=""
prating=""
pdirection=""
  addRooms=()=>{
let rooms={
"pname":this.pname,
"pimage":this.pimage,
"prating":this.prating,
"pdirection":this.pdirection
}
console.log(rooms)
this.api.addRooms(rooms).subscribe(
  (response)=>{
    console.log(response)
    alert("Rooms Data Added Successfully")
   }
 )
}


// ======================================== Wayanad Rooms Post =============================================

wname=""
wimage=""
wrating=""
wdirection=""

addWrooms=()=>{
  let roomsw={
    "wimage":this.wimage,
    "wname":this.wname,
    "wrating":this.wrating,
    "wdirection":this.wdirection
  }
  this.api.addwRooms(roomsw).subscribe(
    (response)=>{
      console.log(response)
      alert("Rooms Data Added Successfully")
    }
  )
}

}
