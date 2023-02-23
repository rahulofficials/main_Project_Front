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

  
  // ............................WAYANAD CARDS..................................
  // show wayanad cards

  getCards=()=>{
    return this.http.get("http://localhost:3000/app/getcards")
  }

//UPLOAD WAYANAD CARDS

addCards=(card:any)=>{
  return this.http.post("http://localhost:3000/app/cards",card)
}


// DELETE WAYANAD CARD

deletecards=(card:any)=>{
  return this.http.post("http://localhost:3000/app/deleteCard",card)
}

  // Upload Tickets
  addTicket=(data:any)=>{
    return this.http.post("http://localhost:3000/app/addData",data)
  }


  // Delete Event for Ticket
  removeData=(data:any)=>{
   return this.http.post("http://localhost:3000/app/deleteById",data)
  }

  // Edit Event for Ticket

editDataById=(id:any)=>{
  return this.http.get<any>(`http://localhost:3000/app/edit/${id}`);    //error to be noted
}

// Update Event for Ticket
updateData=(id:any, data:any)=>{
  return this.http.put(`http://localhost:3000/app/update/${id}`,data)
}

// ......................................NILGIRI CARDS..........................................................

// POST NILGIRI CARDS

addnCards=(ncard:any)=>{
  return this.http.post("http://localhost:3000/app/addNcards",ncard)
}

// GET NILGIRI CARDS

getnCards=()=>{
  return this.http.get("http://localhost:3000/app/getNcards")
}

// DELETE NILGIRI CARD

deletenCard=(ncard:any)=>{
  return this.http.post("http://localhost:3000/app/ncardDelete",ncard)
}

// .......................................SUGGSET API"S..................................................

// POST
postData=(suggestData:any)=>{
  return this.http.post("http://localhost:3000/app/give",suggestData)
}

// GET
suggestGet=()=>{
  return this.http.get("http://localhost:3000/app/getSuggest")
}

// delete
deleteSuggest=(suggestData:any)=>{
  return this.http.post("http://localhost:3000/app/deleteSuggest",suggestData)
}

// ................................................ROOM STAY.........................................................

// POST 
addRooms=(rooms:any)=>{
  return this.http.post("http://localhost:3000/app/addrooms",rooms)
}

// GET
viewRooms=()=>{
  return this.http.get("http://localhost:3000/app/getrooms")
}

// DELETE
deleteRooms=(rooms:any)=>{
  return this.http.post("http://localhost:3000/app/deleteRooms",rooms)
}

// ================== WAYANAD ROOMS STAY ============================

// POST 
addwRooms=(roomsw:any)=>{
  return this.http.post("http://localhost:3000/app/addwrooms",roomsw)
}

// GET
getWRooms=()=>{
  return this.http.get("http://localhost:3000/app/getwrooms")
}

// DELETE
deletewRooms=(roomsw:any)=>{
  return this.http.post("http://localhost:3000/app/deletewRooms",roomsw)
}

// ============================= NILGIRI RESTAURANT ===========================
// POST
addRest=(restaurant:any)=>{
  return this.http.post("http://localhost:3000/app/addrest",restaurant)
}

// GET
getRest=()=>{
  return this.http.get("http://localhost:3000/app/getrest")
}

// DELETE 
deleteRest=(restaurant:any)=>{
  return this.http.post("http://localhost:3000/app/deleteRest",restaurant)
}
// ============================= NILGIRI RESTAURANT ===========================
// POST
addwRest=(restaurantw:any)=>{
  return this.http.post("http://localhost:3000/app/addwrest",restaurantw)
}

// GET
getwRest=()=>{
  return this.http.get("http://localhost:3000/app/getwrest")
}

// DELETE 
deletewRest=(restaurantw:any)=>{
  return this.http.post("http://localhost:3000/app/deletewRest",restaurantw)
}
}



