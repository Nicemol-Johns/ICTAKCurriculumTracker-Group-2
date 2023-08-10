import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private _auth:AuthService,private router:Router){  }

  user = {
    name: '',
    email: '',
    ph: null,
    password:'',
    confirm_pwd:''
  };

  isConfirmInvalid(): boolean {
     return this.user.password !== this.user.confirm_pwd;
  }

    userSignup(){
      console.log(`Function called ${this.user}`)
      this._auth.signupuser(this.user).subscribe((res:any)=>{
        console.log('SignUp Success');
        this.router.navigate(['/login']);
        Swal.fire('Success!', 'You have successfully signed up.', 'success');
        },(error)=>{
          console.log('SignUp Faild',error);
          Swal.fire('Error!', 'Something went wrong with the sign-up process.', 'error');
        })

    }
    
}

