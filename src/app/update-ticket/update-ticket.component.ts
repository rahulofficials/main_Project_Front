import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

updateForm = FormGroup;
  constructor(private api:ApiService ,private route:ActivatedRoute, private Router:Router) { }
id:any
data={
  pticketA:'',
  pticket:'',
  pwrtimet:'',
  pwrtime:'',
  pdis:'',
  pName:''
  }
  
   ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id')   //VIEW DATA FOR EDITING
console.log('id is',this.id)
if(this.id){                         //just for checking (not compulsory) 
this.api.editDataById(this.id).subscribe(
(response:any)=>{
  console.log('Response',response)
  this.data=response.item
  })

}

  }

  //UPDATE DATA
  updateData=()=>{
    this.api.updateData(this.id,this.data).subscribe(
      (response:any)=>{
        if (response.success===1){    //if statement is not compulsory ,return only for checking
          alert("Data Updated")
          this.Router.navigate(['/editTicket'])
        }
        else{
          alert("Error in Updating Data")
        }
      }
      )

  }
}


  

  

 



 
  
  


