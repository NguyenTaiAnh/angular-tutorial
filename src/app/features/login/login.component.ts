import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    trigger('helpMotion', [
      state(
        'inactive',
        style({
          opacity: 0,
        })
      ),
      state(
        'active',
        style({
          opacity: 1,
        })
      ),
      transition('inactive => active', [animate('0.5s ease-in')]),
      transition('active => inactive', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  isRegister: boolean = false;

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {}
  formGroup: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true],
  });

  validateForm: FormGroup<{
    userName: FormControl<string>;
    mobile: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    confirm: FormControl<string>;
  }>=this.fb.group({
    userName: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirm: ['', [Validators.required]],
  });;
// current locale is key of the nzAutoTips
  // if it is not found, it will be searched again with `default`
  autoTips: Record<string, Record<string, string>> = {
    'zh-cn': {
      required: '必填项'
    },
    en: {
      required: 'Input is required'
    },
    default: {
      email: '邮箱格式不正确/The input is not valid email'
    }
  };
  clickRegister(){
    this.isRegister = !this.isRegister
  }
  submitForm(type?:any) {
    type == 0 ?  console.log('submit', this.formGroup.value) :  console.log('submit', this.validateForm.value)
    // console.log('submit', this.formGroup.value);
    // if (this.formGroup.valid) {
    //   console.log('submit', this.formGroup.value);
    // } else {
    //   Object.values(this.formGroup.controls).forEach((control) => {
    //     if (control.invalid) {
    //       control.markAsDirty();
    //       control.updateValueAndValidity({ onlySelf: true });
    //     }
    //   });
    // }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }
}
