import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

declare function openForm():any;
declare function closeForm():any

@Component({
  selector: 'app-nilgiriexplore',
  templateUrl: './nilgiriexplore.component.html',
  styleUrls: ['./nilgiriexplore.component.scss','./nilgiriexplore.component.css']
})
export class NilgiriexploreComponent implements OnInit {

  constructor( private api:ApiService ,public _auth:AuthService,private Router:Router) {
    this.fetchnCards()
   }

  ngOnInit(): void {
  }

  fetchnCards=()=>{
    this.api.getnCards().subscribe(
      (response)=>{
this.listCards=response
      }
    )
  }



// Delete EVENT

deletenCard=(id:any)=>{
  const deleteData:any = {"_id":id}
  this.api.deletenCard(deleteData).subscribe(
    (response:any)=>{
      if (response.status=="success") {
        alert("Data Deleted SuccessFully")
        
      } else {
        alert("Error In Deletion")
      }
    }
  )
}



listCards:any=[]

navigateTo=()=>{
  this.Router.navigate(['/addncards'])
}

}
