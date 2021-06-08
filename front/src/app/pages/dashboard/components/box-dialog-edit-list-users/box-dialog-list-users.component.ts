import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../../@core/data/user.model';

export interface DialogData {
  user:User
  alterou: boolean
  comando:string
}
@Component({
  selector: 'app-box-dialog-list-users',
  templateUrl: './box-dialog-edit-list-users.component.html',
  styleUrls: ['./box-dialog-edit-list-users.component.scss']
})
export class BoxDialogEditListUsersComponent implements OnInit {
  public user:User
  public form: FormGroup
  constructor(
    public dialogRef: MatDialogRef<BoxDialogEditListUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
      this.user = this.data.user
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  alter(){
      if(this.form.get('name').valid && this.form.get('nickName').valid && this.form.get('phone').valid ){
        console.log(this.form.value.name != this.data.user.name ||
          this.form.value.phone != this.data.user.phone ||
          this.form.value.nickName != this.data.user.nickName)
          if(
             this.form.value.name != this.data.user.name ||
             this.form.value.phone != this.data.user.phone ||
             this.form.value.nickName != this.data.user.nickName
            ){
            this.data.alterou = true
            this.data.user.name = this.form.value.name
            this.data.user.nickName = this.form.value.nickName
            this.data.user.phone = this.form.value.phone
          }
      }

  }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.user.name,[Validators.required]),
      nickName: new FormControl(this.user.nickName,[Validators.required]),
      phone: new FormControl(this.user.phone,[Validators.pattern('([\(]?[0-9]{2}[\)] ?[0-9]{5}[\-]?[0-9]{4})'), Validators.required]),
    })
  }

}
