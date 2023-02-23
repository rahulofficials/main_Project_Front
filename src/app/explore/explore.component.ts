import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss','./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(private api:ApiService, public _auth:AuthService , private Router:Router ) { 
    this.fetchCards()
  }

// showcards

fetchCards=()=>{
  this.api.getCards().subscribe(
    (response)=>{
      this.listCards=response
    }
  )
}

  ngOnInit(): void {
  }
// DELETE CARD

deletecard=(id:any)=>{
  const dltcards:any = {"_id":id}
  this.api.deletecards(dltcards).subscribe(
    (response:any)=>{
      if (response.status =="success") {
        alert("Data Deleted Succesfully")
        
      } else {
        alert("Error In deletion")
      }
    }
  )
}


  listCards:any=[];

  navigateTo=()=>{
    this.Router.navigate(['/addcards'])
  }


}
