import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequirementformService } from 'src/app/requirementform.service';

@Component({
  selector: 'app-requirementlist',
  templateUrl: './requirementlist.component.html',
  styleUrls: ['./requirementlist.component.css']
})
export class RequirementlistComponent {
list:any[]=[];
searchText: string='';

  constructor(private router:Router,private api:RequirementformService){}

  ngOnInit(){
    this.api.getRequirements().subscribe((res:any)=>{
      this.list=res; 
    },
    (error) => {
      console.error('Error fetching requirements:', error);
    }
    )
  }
  

}
