import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-box-dialog-delete-types',
  templateUrl: './box-dialog-delete-types.component.html',
  styleUrls: ['./box-dialog-delete-types.component.scss']
})
export class BoxSialogDeleteTypesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BoxSialogDeleteTypesComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
  escolha(){
    this.data.choice = true
  }
  ngOnInit(): void {
  }
}
