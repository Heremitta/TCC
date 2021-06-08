import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../../@core/data/user.model';

export interface DialogData {
  type
  alterou: boolean
}
@Component({
  selector: 'app-box-dialog-edit-type',
  templateUrl: './box-dialog-edit-type.component.html',
  styleUrls: ['./box-dialog-edit-type.component.scss']
})
export class BoxDialogEditTypeComponent implements OnInit {
  public type
  public form: FormGroup
  constructor(
    public dialogRef: MatDialogRef<BoxDialogEditTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    this.type = this.data.type
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  alter(){
      if(this.form.get('description').valid && this.form.get('active').valid ){
          if(
             this.form.value.description != this.data.type.description ||
             this.form.value.active != this.data.type.active 
            ){
            this.data.alterou = true
            this.data.type.description = this.form.value.description
            this.data.type.active = this.form.value.active
          }
      }

  }
  ngOnInit(): void {
    console.log(this.type)
    this.form = new FormGroup({
      description: new FormControl(this.type.description,[Validators.required]),
      active: new FormControl(this.type.active,[Validators.required]),
    })
  }


}
