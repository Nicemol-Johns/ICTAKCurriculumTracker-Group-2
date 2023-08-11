import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';
import { ChatsBackendServicesService } from 'src/app/chats-backend-services.service';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';
import { AdminMessage } from 'src/assets/AdminMessage.model';
import { Message } from 'src/assets/Message.model';
import { DatePipe } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Fname: string[] = [];
  faculty = ''

  constructor(private api:CurriculumQueriesService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private chats:ChatServiceService,
    private datePipe: DatePipe,
    private chats_backup:ChatsBackendServicesService,
    private sanitizer: DomSanitizer){}

  isReloadClicked=false;
  isEditing = false;
  changeText=false;
  message = '';
  Reqname = '';
  messages:any[] = [];
  messages_unsorted:any[] = []
  facultymessages:any[] = [];
  adminMessages:any[] = [];

  isReferenceLinkAvailable = false;

  data = {
    id:'',
    s_no: '',
    name: '',
    description: '',
    approvedStatus: '',
    requirementName:'',
    trainingArea:'',
    institution:'',
    category:'',
    trainingHours:'',
    referenceLink:'',
    referenceLinkID:''
  };

  Edit(){
    this.isEditing=true;
  }

  Save(){
    this.api.editDetails(this.data,this.data.id).subscribe(
      (data) => {
        console.log('success');
        alert('Saving changes')
      }
   );
    this.isEditing=false;
  }

  EditText(){
    this.changeText = true;
  }
  SaveText(){
    this.api.editDetails(this.data,this.data.id).subscribe(
      (data) => {
        console.log('success');
      }
   );
    this.changeText = false;
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
    this.faculty = this.chats.getChatRecipientAdmin()
    this.Fname = this.faculty.split(' ')
    const newMessage:AdminMessage = {
      sender : "Admin",
      content:this.message,
      recipient:this.Fname[0].toLowerCase(),
      requirementName:this.Reqname,
      timestamp:new Date()
    };
    console.log(newMessage)
    this.chats_backup.getNewMessageAdmin(newMessage).subscribe((res:any)=>{
      console.log(res.message);
      this.chats_backup.getAllMessagesAdmin().subscribe((messages: any[]) => {
        this.facultymessages = messages[0];
        this.adminMessages = messages[1];
        this.messages_unsorted = [...this.facultymessages, ...this.adminMessages];
        this.messages = this.messages_unsorted.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
        console.log('Messages:', this.messages);
        //console.log('Faculty Messages:', this.facultymessages);
        //console.log('Admin Messages:', this.adminMessages);
      });
    });
    this.message = ''
  }

  ngOnInit():void{
    this.Reqname = this.chats.getReqName()
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getDetails(id).subscribe((res:any)=>{
      console.log('calling service')
      this.data.id=res.data._id;
      this.data.s_no=res.data.s_no;
      this.data.name = res.data.name;
      this.data.description=res.data.description;
      this.data.approvedStatus = res.data.approvedStatus;
      this.data.requirementName = res.data.requirementName;
      this.data.trainingArea = res.data.trainingArea;
      this.data.institution = res.data.institution;
      this.data.category = res.data.category;
      this.data.trainingHours = res.data.trainingHours;
      this.data.referenceLink = res.data.referenceLink;
      this.data.referenceLinkID =res.data.referenceLinkID
      console.log(`Admin communicates with faculty`,this.data.name)
      this.isReferenceLinkAvailable = !!res.data.referenceLinkID;
    })

     // this.Fname = this.data.name.split(' ')
    // console.log(`Messages for admin dashboard:`)
    // const facultyName = this.Fname[0]; // Assuming Fname contains the faculty name
     //await this.fetchMessages(facultyName);
    // try {
    //   console.log(facultyName)
    //   this.messages =await this.chats_backup.getAllMessages(facultyName)
    //   } catch (error) {
    //     console.error('Error while fetching messages:', error);
    //   }
    this.chats_backup.getAllMessagesAdmin().subscribe((messages: any[]) => {
      this.facultymessages = messages[0];
      this.adminMessages = messages[1];
      this.messages_unsorted = [...this.facultymessages, ...this.adminMessages];
      this.messages = this.messages_unsorted.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
      console.log('Messages:', this.messages);
      //console.log('Faculty Messages:', this.facultymessages);
      //console.log('Admin Messages:', this.adminMessages);
    });
  
  }

  reload(){
    this.isReloadClicked=true
    this.ngOnInit();
    setTimeout(() => {
      this.isReloadClicked = false;
  }, 1000);
  }
  
    approve(){
      this.api.approveCurriculum(this.data.id).subscribe(
        (data)=>{
          console.log('curriculum approved');
          alert('Aprroved successfully')
          // this.router.navigate(['/approve']);
        },
        (error)=>{
          console.error('Failed to approve curriculum',error);
        }
      )
    }
    

    formURL(referenceLinkID: string): SafeResourceUrl {
      console.log(referenceLinkID)
      const url = `https://drive.google.com/file/d/${referenceLinkID}/preview`;
      console.log(url)
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    
    }

  }

  



  
   // this.router.navigate(["/dashboard/curriculum-list"])



  
    
  



