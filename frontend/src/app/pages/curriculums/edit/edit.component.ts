import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent  implements OnInit {

    constructor(private api:CurriculumQueriesService,private activatedRoute:ActivatedRoute,private router:Router){}
  
    curriculum={
      id:'',
      name:'',
      area:'',
      referenceLink:''
    }
  
    ngOnInit():void{
      const id=this.activatedRoute.snapshot.paramMap.get('id');
      this.api.getDetails(id).subscribe((res:any)=>{
        console.log('calling service')
        this.curriculum.id=res.data._id;
        this.curriculum.name = res.data.name;
        this.curriculum.area = res.data.area;
        this.curriculum.referenceLink = res.data.referenceLink;
        console.log(this.curriculum)
      })
    }

    update(){
        //console.log('The form data is:',this.employee);
    
        this.api.editDetails(this.curriculum,this.curriculum.id).subscribe(
          (data) => {
            console.log('success');
          }
       );
        this.router.navigate(["/dashboard/curriculum-list"])
  
    }

}
  
