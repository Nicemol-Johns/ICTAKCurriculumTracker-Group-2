import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';
import { ChatsBackendServicesService } from 'src/app/chats-backend-services.service';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';
import { Message } from 'src/assets/Message.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-curriculum-view',
  templateUrl: './curriculum-view.component.html',
  styleUrls: ['./curriculum-view.component.css']
})
export class CurriculumViewComponent {
  constructor(private api:CurriculumQueriesService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private chats:ChatServiceService,
    private chats_backup:ChatsBackendServicesService,
    private http:HttpClient,
    private datePipe: DatePipe,
    private sanitizer: DomSanitizer){}

  isEditing = false;
  changeText=false;

  reqname = '';
  username_chat = '';
  message = '';
  messages_unsorted:any[] = []
  messages:any[] = []
  facultymessages:any[] = [];
  adminMessages:any[] = [];

  isReferenceLinkAvailable = false;
  isReloadClicked=false;
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

  editCurriculum() {
    if (this.data.approvedStatus !== 'Approved') {
      // If the curriculum is not approved (i.e., pending), handle the edit logic here.
      // For example, navigate to the edit component or show a modal for editing.
      console.log('Editing pending curriculum');
      // Replace the following line with your logic to handle editing pending curriculum
    } else {
      console.log('Editing approved curriculum is not allowed');
    }
  }

  formURL(referenceLinkID: string): SafeResourceUrl {
    console.log(referenceLinkID)
    const url = `https://drive.google.com/file/d/${referenceLinkID}/preview`;
    console.log(url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  
  }

  ngOnInit():void{
    //this.reqname = this.chats.getReqname()
    console.log(this.reqname)
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.username_chat = this.chats.getUser();
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
      console.log('approvedStatus:', this.data.approvedStatus);

      this.isReferenceLinkAvailable = !!this.data.referenceLinkID;

      this.chats_backup.getAllMessages(this.data.requirementName).subscribe((messages: any[]) => {
        this.facultymessages = messages[0];
        this.adminMessages = messages[1];
        this.messages_unsorted = [...this.facultymessages, ...this.adminMessages];
        this.messages = this.messages_unsorted.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
        console.log('Messages:', this.messages);
        //console.log('Faculty Messages:', this.facultymessages);
        //console.log('Admin Messages:', this.adminMessages);
      });
    })
    // this.chats_backup.getAllMessages(this.data.requirementName).subscribe((messages: any[]) => {
    //   this.facultymessages = messages[0];
    //   this.adminMessages = messages[1];
    //   this.messages_unsorted = [...this.facultymessages, ...this.adminMessages];
    //   this.messages = this.messages_unsorted.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    //   console.log('Messages:', this.messages);
    //   //console.log('Faculty Messages:', this.facultymessages);
    //   //console.log('Admin Messages:', this.adminMessages);
    // });

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
    requirementName:this.data.requirementName,
    timestamp: new Date(),
  };
  
  this.chats_backup.getNewMessage(newMessage).subscribe(res=>{
    console.log(res.message)
    this.chats_backup.getAllMessages(this.data.requirementName).subscribe((messages: any[]) => {
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

