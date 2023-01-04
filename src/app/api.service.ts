import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // show ticket rates

  getTickets=()=>{
    return this.http.get("http://localhost:3000/app/dataview")
  }

  // show cards

  getCards=()=>{
    return this.http.get("http://localhost:3000/app/getcards")
  }

//UPLOAD CARDS

addCards=(card:any)=>{
  return this.http.post("http://localhost:3000/app/cards",card)
}

  // Upload Tickets
  addTicket=(data:any)=>{
    return this.http.post("http://localhost:3000/app/addData",data)
  }


  // Delete Event
  removeData=(data:any)=>{
   return this.http.post("http://localhost:3000/app/deleteById",data)
  }

  // Edit Event

editDataById=(id:any)=>{
  return this.http.get<any>(`http://localhost:3000/app/edit/${id}`);    //error to be noted
}

// Update Event
updateData=(id:any, data:any)=>{
  return this.http.put(`http://localhost:3000/app/update/${id}`,data)
}

}

