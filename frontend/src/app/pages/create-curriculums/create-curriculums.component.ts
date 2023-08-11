import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';
import { ChatsBackendServicesService } from 'src/app/chats-backend-services.service';
import { Message } from 'src/assets/Message.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-create-curriculums',
  templateUrl: './create-curriculums.component.html',
  styleUrls: ['./create-curriculums.component.css']
})
export class CreateCurriculumsComponent implements OnInit{

  constructor(private router:Router,
    private chats:ChatServiceService,
    private chats_backup:ChatsBackendServicesService,
    private http:HttpClient,
    private datePipe: DatePipe){}

  isReloadClicked=false;
  reqname = '';
  username_chat = '';
  message = '';
  messages_unsorted:any[] = []
  messages:any[] = []
  facultymessages:any[] = [];
  adminMessages:any[] = [];

  ngOnInit(): void {
    this.reqname = this.chats.getReqname()
    this.router.navigate(['/requirements'])
    this.username_chat = this.chats.getUser();
    //console.log(`Faculty logged in : ${this.username_chat}`)
    // console.log(`Messages for faculty dashboard:`)
    // this.chats_backup.getAllMessagesAdmin().subscribe((response: any) => {
    //   this.adminMessages = response.messages;
    // });
    this.chats_backup.getAllMessages(this.chats.getReqname()).subscribe((messages: any[]) => {
      this.facultymessages = messages[0];
      this.adminMessages = messages[1];
      this.messages_unsorted = [...this.facultymessages, ...this.adminMessages];
      this.messages = this.messages_unsorted.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
      console.log('Messages:', this.messages);
      //console.log('Faculty Messages:', this.facultymessages);
      //console.log('Admin Messages:', this.adminMessages);
    });

     // console.log(this.facultymessages);
     // console.log(this.adminMessages)
  
  }

  reload(){
    this.isReloadClicked=true
    this.ngOnInit();
    setTimeout(() => {
      this.isReloadClicked = false;
  }, 1000);
  }

  onToggleButtonClick(){
    console.log('hello');
    this.router.navigate(['/chats'])
  }
  
  isSentMessage(sender:any):boolean{
    if(sender != "Admin"){
      return true;
    }
    else{
      return false;
    }

  }

  onSubmit(){

    const newMessage: Message = {
      sender: this.username_chat.toLowerCase(), 
      content: this.message,
      requirementName:this.reqname,
      timestamp: new Date(),
    };
    
    this.chats_backup.getNewMessage(newMessage).subscribe(res=>{
      console.log(res.message)
      this.chats_backup.getAllMessages(this.chats.getReqname()).subscribe((messages: any[]) => {
        this.facultymessages = messages[0];
        this.adminMessages = messages[1];
        this.messages_unsorted = [...this.facultymessages, ...this.adminMessages];
        this.messages = this.messages_unsorted.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
        //console.log('Faculty Messages:', this.facultymessages);
        //console.log('Admin Messages:', this.adminMessages);
        console.log('Messages:', this.messages);
      });
    });


    // console.log(this.facultymessages);
    // console.log(this.adminMessages)
    this.message = '';
  }



}
