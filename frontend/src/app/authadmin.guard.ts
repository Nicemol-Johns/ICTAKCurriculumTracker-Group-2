import { CanActivateFn, Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2';

interface MyToken {
  data:{
    role: string,
    email: string,    
  }

}

export const authadminGuard: CanActivateFn = (route, state) => {

 // const token =localStorage.getItem('token');
 const router= new Router
  var token = localStorage.getItem('token') || '';
  console.log("Token from Authadmin",token)

  try {
    var user = jwt_decode<MyToken>(token);
    console.log(user)
    if (user.data.role=="admin"){
      return true
    }else{
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        
      })
      // router.navigate(['/']);
      return false;
    }
  } catch (error) {
    console.log('Token error', error)
    
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
     
    })
    // router.navigate(['/'])
    return false
  }

  
};
