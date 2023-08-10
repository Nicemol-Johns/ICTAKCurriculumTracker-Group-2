import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-pending-faculty',
  templateUrl: './pending-faculty.component.html',
  styleUrls: ['./pending-faculty.component.css']
})
export class PendingFacultyComponent {
  pendingCurriculums: any[]=[];

  constructor(private api: CurriculumQueriesService,private router:Router){}
  
  ngOnInit(): void {
    this.api.fetchPendingCurriculums().subscribe((res:any)=>{
      this.pendingCurriculums = res.data.filter((curriculum: any)=> curriculum.approvedStatus === false);
    })
  }
  view(id:any){
    this.router.navigate(['faculty-dashboard/curriculum-fetch/curriculum-view/'+id]);
  }
}
