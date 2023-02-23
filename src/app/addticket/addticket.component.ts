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




pName=""
pdis=""
pwrtime=""
pwrtimet=""
pticket=""
pticketA=""

readData=()=>{
  let data={
"pName":this.pName,
"pdis":this.pdis,
"pwrtime":this.pwrtime,
"pwrtimet":this.pwrtimet,
"pticket":this.pticket,
"pticketA":this.pticketA,
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


// clear field
clearfield=()=>{
  this.pName=''
  this.pdis=''
  this.pwrtime=''
  this.pticket=''
  this.pwrtimet=''
}



}




