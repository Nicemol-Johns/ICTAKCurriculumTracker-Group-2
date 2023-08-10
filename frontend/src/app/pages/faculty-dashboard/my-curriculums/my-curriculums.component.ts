import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-my-curriculums',
  templateUrl: './my-curriculums.component.html',
  styleUrls: ['./my-curriculums.component.css']
})
export class MyCurriculumsComponent implements OnInit {

  curriculums:any[] = [];


  constructor(private curriculumsQueries:CurriculumQueriesService,private chats:ChatServiceService,private router:Router){}

  user =this.chats.getUser()

  ngOnInit(): void {
    this.curriculumsQueries.fetchCurriculumsUser(this.user).subscribe((res:any)=>{
      this.curriculums = res.data;
   })
  }

  view(id:any){
    this.router.navigate(['faculty-dashboard/curriculum-fetch/curriculum-view/'+id]);
  }



}
