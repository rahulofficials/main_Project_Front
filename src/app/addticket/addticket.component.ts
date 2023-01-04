import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.css']
})
export class AddticketComponent implements OnInit {
  
  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute) {}

  
  ngOnInit():void {
  }


data: any

pName=""
pwrtime=""
pwrtimet=""
pticket=""

readData=()=>{
  let data={
"pName":this.pName,
"pwrtime":this.pwrtime,
"pwrtimet":this.pwrtimet,
"pticket":this.pticket,
}
console.log(data)
this.api.addTicket(data).subscribe(
  (response)=>{
    console.log(response)
     alert("Data Added Successfully" )
     this.clearfield()
    
  }
)
}

// add card data

place=""
image=""
detail=""

readCard=()=>{
  let card={
    "place":this.place,
    "image":this.image,
    "detail":this.detail
  }
  console.log(card)
  this.api.addCards(card).subscribe(
    (response)=>{
      console.log(response)
      alert("Data added Succesfully")
      this.clearfield()
    }
  )
}

// clear field
clearfield=()=>{
  this.pName=''
  this.pwrtime=''
  this.pticket=''
  this.pwrtimet=''
  this.place=''
  this.image=''
  this.detail=''
}



}




