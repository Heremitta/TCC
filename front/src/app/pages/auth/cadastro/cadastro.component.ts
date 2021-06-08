import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { catchError, map, subscribeOn, tap } from 'rxjs/operators';
import { User } from '../../../@core/data/user.model';
import { userResultApi } from '../../../@core/data/userResultApi.model';
import { ThemeService } from '../../../@core/mock/services/theme.service';
import { UserService } from '../../../@core/mock/services/user.service';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CadastroComponent implements OnInit {
  subscribes:Subscription[]=[]
  form : FormGroup
  fb: FormBuilder
  hiddenSenha = false
  hiddenConfirmaSenha = false
  darkMode:BehaviorSubject<boolean>
  userApi$:Observable<userResultApi>
  userTypesApi$:Observable<any>

  constructor(private _userService:UserService,private _signupService:SignupService,private _snackBar: MatSnackBar, private _router: Router,private _themeService: ThemeService) { 
    this.darkMode = this._themeService.darkMode
   }

  ngOnInit(): void {
    this.fb = new FormBuilder()
    this.form = this.fb.group({
      name: this.fb.control('',[ Validators.required]),
      nickName: this.fb.control('',[Validators.required]),
      email: this.fb.control(' ',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required]),
      confirmaEmail: this.fb.control('',[ Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required]),
      telefone: this.fb.control('',[Validators.pattern('([\(]?[0-9]{2}[\)] ?[0-9]{5}[\-]?[0-9]{4})'), Validators.required]),
      password: this.fb.control('',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$.,;%^&*-]).{8,20}$')]),
      confirmPassword: this.fb.control('',[]),
      type:this.fb.control('',[Validators.required])
    })

      this.form.controls['confirmPassword'].setValidators([this.confirmaSenha(this.form.controls['password'], this.form.controls['confirmPassword']),Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$.,;%^&*-]).{8,20}$')])
      this.form.controls['confirmaEmail'].setValidators([this.confirmEmail(this.form.controls['email'], this.form.controls['confirmaEmail']),Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])

      this.userTypesApi$ = this._userService.getUserTypes()
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscribes.length > 0 ?
    this.subscribes.forEach(sub=>{
      sub.unsubscribe()
    })
    :''
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
     horizontalPosition:'center',
     verticalPosition:'top'
    });
  }

  //validação email === confirmarEmail
  confirmEmail(emailControl, confirmaEmailControl): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {
      let resp = {'emailIncorreto': 'true'}
          if(emailControl.value === confirmaEmailControl.value){
            resp = null
          }
          return resp
    }
  }
  //validação senha === confirmarsenha
  confirmaSenha(senha,confirmaSenha):ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let resp = {'SenhaIncorreto': 'true'}
          if(senha.value === confirmaSenha.value){
            resp = null
          }
          return resp
        }
  }
  signup(){
    let user = new User(
      this.form.value.name,
      this.form.value.nickName,
      this.form.value.telefone,
      this.form.value.email, 
      this.form.value.type,
      true,
      this.form.value.password
    )
    
     
     let sub = this._signupService.signUp(user)
     .subscribe(user=>{
      if("login" in user){
        this._signupService.isLoged(user)
        this._router.navigate(['/dashboard'])
      }
    },err=>{
      console.log(err)
    },()=>{
      sub.unsubscribe()
    })
     
  
  }
}
