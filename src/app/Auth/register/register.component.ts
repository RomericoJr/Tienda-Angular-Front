import { Component, OnInit } from '@angular/core';
import { Register } from '../../interface/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({});

  constructor(
    private formB: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formB.group({
      name: ['',Validators.required],
      apellidoP: ['',Validators.required],
      apellidoM: ['',Validators.required],
      email: ['',Validators.required],
      telefono: ['',Validators.required],
      password: ['',Validators.required],
    })
  }

  register(){
    console.log('estos son los datos',this.registerForm.value);
  }
}
