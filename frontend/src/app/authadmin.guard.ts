import { CanActivateFn, Router } from '@angular/router';


import jwt_decode from "jwt-decode"

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
  console.log("Token from Auth",token)

  try {
    var user = jwt_decode<MyToken>(token);
    console.log(user)
    if (user.data.role=="admin"){
      return true
    }else{
      router.navigate(['/login']);
      return false;
    }
  } catch (error) {
    console.log('Token error', error)
    router.navigate(['/login']);
    return false
  }

  
};
