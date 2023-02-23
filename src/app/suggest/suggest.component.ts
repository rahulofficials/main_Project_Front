import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {

  pname:any;
  age:any;
  gender:any
  isformValid=()=>{
    return this.pname && this.age && this.gender;
  }
  isFormValid=()=>{
    return this.uname && this.uemail && this.uphone && this.udistrict && this.ulocality && this.ulocation && this.usdistrict && this.upstation && this.ulankmark && this.utown && this.udetail;
   }

alert:boolean=false;   
  constructor(private api:ApiService) {
   }
  ngOnInit(): void {
  }


  uname=""
  uemail=""
  uphone=""
  udistrict=""
  ulocality=""
  ulocation=""
  usdistrict=""
  ulankmark=""
  utown=""
  upstation=""
  udetail=""
  
addData=()=>{
    let suggestData={
      "uname":this.uname,
      "uemail":this.uemail,
      "uphone":this.uphone,
      "udistrict":this.udistrict,
      "ulocality":this.ulocality,
      "ulocation":this.ulocation,
      "usdistrict":this.usdistrict,
      "ulankmark":this.ulankmark,
      "utown":this.utown,
      "upstation":this.upstation,
      "udetail":this.udetail
    }
    this.api.postData(suggestData).subscribe(
      (response)=>{
        console.log(response)
          this.alert=true
          this.clearfield()
      }
    )
  }


// ======================== ALERT BOX CLOSE BUTTON =============================
closeButton=()=>{
this.alert=false
}



// ======================== To Clear Input Fields =========================
clearfield=()=>{
  this.uname=""
  this.uemail=""
  this.uphone=""
  this.udistrict=""
  this.ulocality=""
  this.ulocation=""
  this.usdistrict=""
  this.ulankmark=""
  this.utown=""
  this.upstation=""
  this.udetail=""
}

}
