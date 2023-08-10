import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
approvedCurriculums: any[]=[];

constructor(private api:CurriculumQueriesService,private router:Router){}

ngOnInit(): void {
  this.api.fetchCurriculums().subscribe((res:any)=>{
    this.approvedCurriculums= res.data.filter((curriculum:any)=>curriculum.approvedStatus === true );
  });
}
view(id:any){
  this.router.navigate(['dashboard/curriculum-list/view/'+id]);
}
}
