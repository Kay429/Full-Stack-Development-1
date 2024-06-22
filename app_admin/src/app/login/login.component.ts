import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule, NgIf, FormsModule],
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public formError: string = '';
  
  public credentials = {
    name: '',
    email: '',
    password: ''
  };
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  
  ngOnInit() {}
  
  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else {
      console.log("onLoginSubmit() call doLogin()");
      this.doLogin();
    }
  }

  private doLogin(): void {
    var resp = this.authenticationService.login(this.credentials)
      .then(() => this.router.navigateByUrl('#'))
      .catch((message) => this.formError = message);
    console.log("Returned val: " + resp);
  }
}