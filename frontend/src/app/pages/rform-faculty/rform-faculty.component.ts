import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequirementformService } from 'src/app/requirementform.service';
import { CommonModule } from '@angular/common';
import { FetchRequirementsFacultyDashboardService } from 'src/app/fetch-requirements-faculty-dashboard.service';
import { ChatServiceService } from 'src/app/chat-service.service';

@Component({
  selector: 'app-rform-faculty',
  templateUrl: './rform-faculty.component.html',
  styleUrls: ['./rform-faculty.component.css']
})
export class RformFacultyComponent {
  list:any[]=[];
  searchText: string='';
  constructor(private router:Router,
    private api:RequirementformService,
    private fetch:FetchRequirementsFacultyDashboardService,
    private chats:ChatServiceService
    ){}

  ngOnInit(){
    this.api.getRequirements().subscribe((res:any)=>{
      this.list=res; 
    },
    )
  }

  getRequirementFormById(id:any,reqname:any){
    //console.log(id)
    this.api.getRequirementById(id).subscribe((res:any)=>{
      //console.log(res.data)
      this.fetch.setRequirements(res.data)
    })
    this.chats.setReqname(reqname)
  }

  
}
