import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-curriculum-fetch',
  templateUrl: './curriculum-fetch.component.html',
  styleUrls: ['./curriculum-fetch.component.css']
})
export class CurriculumFetchComponent {
  
  constructor(private getCurriculum:CurriculumQueriesService,private router:Router){}

  curriculums: any[] = [];
  searchText: string='';

  ngOnInit(): void {
    this.getCurriculum.fetchCurriculums().subscribe((res:any)=>{
      this.curriculums = res.data;
   })
  }

  view(id:any){
    this.router.navigate(['faculty-dashboard/curriculum-fetch/curriculum-view/'+id]);
  }

}
