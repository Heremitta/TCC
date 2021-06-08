import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../../../@core/data/user.model';

export interface DialogData {
  user:User
  emailIsCorrect: boolean
}
@Component({
  selector: 'app-box-dialog-exclude-list-users',
  templateUrl: './box-dialog-exclude-list-users.component.html',
  styleUrls: ['./box-dialog-exclude-list-users.component.scss']
})
export class BoxDialogExcludeListUsersComponent implements OnInit {

  public user:User
  public form: FormGroup
  constructor(private _snackBar:MatSnackBar,
    public dialogRef: MatDialogRef<BoxDialogExcludeListUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
      this.user = this.data.user
    }
    ngOnInit(): void {
      this.form = new FormGroup({
        email: new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required]),
      })
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  alter(){
    console.log(this.form.valid)
      if(this.form.get('email').valid){
        if(this.form.value.email === this.user.email){
          this.data.emailIsCorrect = true 
        }else{
          this.openSnackBar('To delete the user, enter the user\'s email','Close')
        }
      }else{
        this.openSnackBar('Email is invalid!','Close')
      }

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
     horizontalPosition:'center',
     verticalPosition:'top'
    });
  }


}
