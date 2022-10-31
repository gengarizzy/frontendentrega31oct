import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';




@Component({
  selector: 'app-bsheader',
  templateUrl: './bsheader.component.html',
  styleUrls: ['./bsheader.component.css']
})
export class BsheaderComponent   implements OnInit {
  isLogged=false;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;}
      else{
        this.isLogged = false;
      
      }

  }

  onLogOut(): void {

    this.tokenService.logOut();
    window.location.reload();
   
  }
 

  login(): void{

    this.router.navigate(['/login']);
  }

  

}

