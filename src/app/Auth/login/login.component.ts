import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({});

  constructor(
    private formB: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.form = this. formB.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    console.log('estos son los datos',this.form.value);

    console.log("si login");

  }
}
