import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public login() {
    if (this.username==="karthik" && this.password==="karthik") {
      alert("valid");
      this.route.navigate(['/post']);
    } else {
      alert("invalid login");
    }
  }

}
