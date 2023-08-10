import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'src/assets/Message.model';
import { ChatServiceService } from './chat-service.service';
import { AdminMessage } from 'src/assets/AdminMessage.model';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatsBackendServicesService {

  constructor(private http:HttpClient, private chats:ChatServiceService) { }

  fetchedMessages:[] = []
  facultymessages:[] = []
  adminmessages:[] = []

  

  getNewMessage(message:Message){
    //console.log(message.sender)
    //const username = message.sender 
    // this.http.get(`http://localhost:3000/curriculum-tracker/login-faculty/${username}`).subscribe(res=>{
    //   console.log(res)
    // })
    console.log(message)
    return this.http.post<any>(`http://localhost:3000/curriculum-tracker/send-message-faculty`,message)
  }



  getNewMessageAdmin(message:AdminMessage){
   return  this.http.post<any>(`http://localhost:3000/curriculum-tracker/send-message-admin`,message)
  }

  // getAllMessages(facultyname:any){
  //   this.http.get(`http://localhost:3000/curriculum-tracker/messages-all/${facultyname}`).subscribe((res:any)=>{
  //     this.fetchedMessages = res.messages
  //   })
  // }

  // async getAllMessages(facultyname: any): Promise<any[]> { // Change the return type to Promise<any[]>
  //   try {
  //     console.log(facultyname)
  //     const response = await this.http.get<any[]>(`http://localhost:3000/curriculum-tracker/messages-all/${facultyname}`).subscribe((response:any)=>{
  //       this.fetchedMessages = response.messages
  //     })
  //     return this.fetchedMessages; // Assuming the messages are returned as an array in the 'messages' property
  //   } catch (error) {
  //     console.error('Error while fetching messages:', error);
  //     throw error; // You can handle the error at the component level if needed
  //   }
  // }

    getAllMessages(requirementname:any){  //Get messages for faculty Dashboard
      const facultyname = this.chats.getUser();
      //const collectionSuffix = "s"
      const reqname =requirementname
      const facultyName = facultyname.toLowerCase();
      //const facultyName = tempname.concat(collectionSuffix)
      console.log(`This is the service file: ${facultyName}`)
      console.log(facultyName,reqname)
      const facultyMessages$ = this.http.get<any>(`http://localhost:3000/curriculum-tracker/messages-all?facultyname=${facultyName}&requirementName=${reqname}`)
      .pipe(
        map((res: any) => res.messages)
      );

    const adminMessages$ = this.http.get<any>(`http://localhost:3000/curriculum-tracker/messages-all-admin?facultyname=${facultyName}&requirementName=${reqname}`)
      .pipe(
        map((res: any) => res.messages)
      );
    return forkJoin([facultyMessages$, adminMessages$]);
      //return this.http.get(`http://localhost:3000/curriculum-tracker/messages-all/${facultyName}`),this.http.get(`http://localhost:3000/curriculum-tracker/messages-all-admin/${facultyName}`)
      //  this.http.get<any>(`http://localhost:3000/curriculum-tracker/messages-all/${facultyName}`).subscribe((res:any)=>{
      //       this.facultymessages = res.messages
      //       console.log(this.facultymessages)
      //  });
      // this.http.get<any>(`http://localhost:3000/curriculum-tracker/messages-all-admin/${facultyName}`).subscribe((res:any)=>{
      //   this.adminmessages = res.messages
      //   console.log(this.adminmessages)
      // });
      // return [...this.facultymessages,...this.adminmessages]
       //console.log(adminMessages$)

      //  return forkJoin([facultyMessages$, adminMessages$]).pipe(
      //   map(([facultyMessages, adminMessages]) => [...facultyMessages, ...adminMessages])
      // );

    }

    
    getAllMessagesAdmin(){
      const facultyname = this.chats.getChatRecipientAdmin();
     // const collectionSuffix = "s"
      const facultyName = facultyname.toLowerCase();
      const reqname = this.chats.getReqName();
     // const facultyName = tempname.concat(collectionSuffix)
      console.log(`This is the service file: ${facultyName}`)
      console.log(facultyName,reqname)
      //return this.http.get(`http://localhost:3000/curriculum-tracker/messages-all-admin/${facultyName}`)
      const facultyMessages$ = this.http.get<any>(`http://localhost:3000/curriculum-tracker/messages-all?facultyname=${facultyName}&requirementName=${reqname}`)
      .pipe(
        map((res: any) => res.messages)
      );

    const adminMessages$ = this.http.get<any>(`http://localhost:3000/curriculum-tracker/messages-all-admin?facultyname=${facultyName}&requirementName=${reqname}`)
      .pipe(
        map((res: any) => res.messages)
      );
    return forkJoin([facultyMessages$, adminMessages$]);
    }
  

  }


