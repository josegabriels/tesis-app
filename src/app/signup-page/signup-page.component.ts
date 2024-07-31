import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  public signUpForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: [""],
      password: [""]
    })
  }

  signUp() {
    this.http.post<any>("http://localhost:3000/consultants", this.signUpForm.value)
      .subscribe(res => {
        alert('SIGNIN SUCCESFUL');
        this.signUpForm.reset()
        this.router.navigate(["login"])
      }, err => {
        alert("Something went wrong")
      })
  }
}
