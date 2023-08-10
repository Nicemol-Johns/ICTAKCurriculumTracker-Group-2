import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'src/assets/Message.model';
import { ChatsBackendServicesService } from './chats-backend-services.service';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  private reqname = '';

  private Reqname = '';

  private username = '';

  private recipient = '';

  private allMessages:any[] = [];

  // private FacultyMessages:any[] = [];

  // private AdminMessages:any[] = [];

  private messages:Message[] =[];
  
  constructor() {
    
   }
//------------------------------------------------
//  adminMesssages:String[] = [];
//  facultyMessages:String[] = [];

//  setAdminMessages(messages:any){
//   this.adminMesssages.push(messages);
//   console.log(`The messages from admin are: ${this.adminMesssages}`)
//  }

//  getAdminMessages(){
//   return this.adminMesssages;
//  }
//  setFacultyMessages(messages:any){
//   this.facultyMessages.push(messages);
//  }

//  getFacultyMessages(){
//   return this.facultyMessages;
//  }
//------------------------------------------------
    setReqname(name:any){ //for faculty dashboard
      this.reqname = name
      console.log(this.reqname)   //Gives the req.name of the req.form currently opened for curriculum generation
    }

    getReqname(){ // for faculty dashboard
      return this.reqname;
    }

    setReqName(name:any){
      this.Reqname=name;
    }

    getReqName(){
      return this.Reqname;
    } 

   setUser(user:any){
    this.username = user;
   }

   getUser(){
    return this.username;
   }

   setChatRecipientAdmin(recipient:any){
    this.recipient = recipient;
   }

   getChatRecipientAdmin(){
    return this.recipient;
   }


  addMessage(message:any){
    this.messages.push(message);
    console.log(this.messages)
  }

  getMessage(){
    return this.messages.sort((a:any, b:any) => a.timestamp - b.timestamp);
  }



  // setFacultyMessages(messages:any){
  //   this.FacultyMessages = [];
  //   this.FacultyMessages.push(messages);
  //   console.log(this.FacultyMessages)
  // }
  // getFacultyMessages(){
  //   return this.FacultyMessages;
  // }

  // setAdminMessages(messages:any){
  //   this.AdminMessages = [];
  //   this.AdminMessages.push(messages);
  //   console.log(this.AdminMessages)
  // }

  // getAdminMessages(){
  //   return this.AdminMessages;
  // }

  // backUpChats(){
  //   const backupMessages = this.getMessage()
  //   console.log(backupMessages)
  //   this.chatMessages.chatmessagesBackup(backupMessages).subscribe((res)=>{
  //     console.log(" Backup Status: Success")
  //   })
  // }

}
 