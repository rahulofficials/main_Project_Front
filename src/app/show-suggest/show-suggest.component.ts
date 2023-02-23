import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-show-suggest',
  templateUrl: './show-suggest.component.html',
  styleUrls: ['./show-suggest.component.css']
})
export class ShowSuggestComponent implements OnInit {

  constructor( private api:ApiService ) {
    this.showData()
   }

  ngOnInit(): void {
  }

 showData=()=>{
  this.api.suggestGet().subscribe(
    (response)=>{
      this.listSuggestData=response

    }
  )

 }

// DELETE EVENT

deleteData=(id:any)=>{
const deletesugest:any = {"_id":id}
this.api.deleteSuggest(deletesugest).subscribe(
  (response:any)=>{
    if (response.status==="success") {
      alert("Data Deleted Succesfully")
    } else {
      alert("Error in Deletion")
    }
  }
)
}

listSuggestData:any=[];
}
