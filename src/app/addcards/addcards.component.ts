import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcards',
  templateUrl: './addcards.component.html',
  styleUrls: ['./addcards.component.css']
})
export class AddcardsComponent implements OnInit {

  constructor(private api:ApiService) {}

  ngOnInit(): void {
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
clearfield=()=>{
  this.image='',
  this.detail='',
  this.place=''
}
}
