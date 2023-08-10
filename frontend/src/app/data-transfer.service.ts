import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  id=''
  setID(id:any){
    id = id
  }

  getID(){
    return this.id;
  }

}
