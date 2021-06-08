import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../@core/mock/services/theme.service';
import { SignInService } from './signIn.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _subscribes: Subscription[]=[]

  form:FormGroup
  darkMode
  hide = true

  constructor(private _router:Router,private _singInService:SignInService,private _snackBar: MatSnackBar,private _themeService: ThemeService) { 
    this.darkMode = this._themeService.darkMode
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required]),
      password: new FormControl('',[Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$.,;%^&*-]).{8,20}$'), Validators.required]),
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._subscribes.length > 0 ?
    this._subscribes.forEach(sub=>{
      sub.unsubscribe()
    }) : undefined
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
     horizontalPosition:'center',
     verticalPosition:'top'
    });
  }
  logar(){
    if(this.form.valid){
      let login = {
        email: this.form.value.email,
        password: this.form.value.password
      }
      let sub = this._singInService.signIn(login)
      .subscribe(user=>{
        if("login" in user){
          this._singInService.isLoged(user)
          this._router.navigate(['/dashboard'])
        }
      },err=>{
        console.log(err)
      },()=>{
        sub.unsubscribe()
      })
    }
  }
}
