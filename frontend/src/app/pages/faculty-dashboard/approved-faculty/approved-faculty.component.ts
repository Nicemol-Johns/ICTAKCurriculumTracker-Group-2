import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-approved-faculty',
  templateUrl: './approved-faculty.component.html',
  styleUrls: ['./approved-faculty.component.css']
})
export class ApprovedFacultyComponent implements OnInit {
  approvedCurriculums: any[]=[];

  constructor(private api:CurriculumQueriesService,private router:Router){}
  

  ngOnInit(): void {
    this.api.fetchCurriculums().subscribe((res:any)=>{
      this.approvedCurriculums= res.data.filter((curriculum:any)=>curriculum.approvedStatus === true );
    });
  }
  view(id:any){
    this.router.navigate(['faculty-dashboard/curriculum-fetch/curriculum-view/'+id]);
  }
}
