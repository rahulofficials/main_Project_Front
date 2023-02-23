import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addn-cards',
  templateUrl: './addn-cards.component.html',
  styleUrls: ['./addn-cards.component.css']
})
export class AddnCardsComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  // post card api
  place=""  
  image=""
  detail=""
  
  postData=()=>{
    let ncard = {
      "place":this.place,
      "image":this.image,
      "detail":this.detail
    }
    console.log(ncard)
  this.api.addnCards(ncard).subscribe(
    (response)=>{
      console.log(response)
      alert("Data Added SuccesFully")
      this.clearfield()
    }
  )
  
  }

clearfield=()=>{
  this.image='',
  this.detail='',
  this.place=''
}

}
