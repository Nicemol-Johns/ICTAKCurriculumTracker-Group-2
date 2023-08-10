import { Component, OnInit } from '@angular/core';
import { FetchRequirementsFacultyDashboardService } from 'src/app/fetch-requirements-faculty-dashboard.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  ReceivedList:any = {}
  list = {
    requirementName:'',
    trainingArea:'',
    institution:'',
    category:'',
    trainingHours:'',
    referenceLink:'',
    referenceLinkID:''
  }

  constructor(private fetch:FetchRequirementsFacultyDashboardService,
    private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.list = this.fetch.getRequirements();
    console.log(this.list.referenceLinkID)
  }

    formURL(referenceLinkID: string): SafeResourceUrl {
      console.log(referenceLinkID)
      const url = `https://drive.google.com/file/d/${referenceLinkID}/preview`;
      console.log(url)
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    
  }

  

}
