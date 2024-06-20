import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    trigger('helpMotion', [
      state('inactive', style({
        opacity: 0
      })),
      state('active', style({
        opacity: 1
      })),
      transition('inactive => active', [
        animate('0.5s ease-in')
      ]),
      transition('active => inactive', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  constructor( private fb: NonNullableFormBuilder){}
  ngOnInit(): void {
    
  }
  formGroup:FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });
  submitForm(){
    console.log('submit', this.formGroup.value);

  }
}
