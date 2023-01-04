import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private api:ApiService) { 
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

  listCards:any=[];

}
