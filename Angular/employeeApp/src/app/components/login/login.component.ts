import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { DataService } from 'src/app/services/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private dataService: DataService, private router: Router, private toast: HotToastService ) { }

  ngOnInit(){
    this.checkIfLoggedIn()
  }

  submit(){
    if(!this.loginForm.valid) return;

    const { username, password } = this.loginForm.value
    this.dataService.login(username!,password!).pipe(
      this.toast.observe({
        success: 'You are now Logged in!',
        loading: 'Logging in',
        error: 'Invalid Credentials!'
      })
    ).subscribe((data: any) => {
      sessionStorage.setItem("token", data.token)
      this.router.navigate(['/employee'])
    })
  }

  checkIfLoggedIn(){
      let token = sessionStorage.getItem('token')
      if(token) this.router.navigate(['/employee'])
  }
}
