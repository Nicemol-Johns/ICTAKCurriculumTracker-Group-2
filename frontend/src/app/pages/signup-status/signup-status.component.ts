import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup-status',
  templateUrl: './signup-status.component.html',
  styleUrls: ['./signup-status.component.css']
})
export class SignupStatusComponent {
  constructor(private router:Router){}

  newlogin(){
    this.router.navigate(['/login'])
  }

}
