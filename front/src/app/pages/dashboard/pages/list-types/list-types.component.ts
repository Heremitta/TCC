import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { User } from '../../../../@core/data/user.model';
import { UserService } from '../../../../@core/mock/services/user.service';
import { BoxDialogEditTypeComponent } from '../../components/box-dialog-edit-type/box-dialog-edit-type.component';
import { BoxSialogDeleteTypesComponent } from '../../components/box-dialog-delete-types/box-dialog-delete-types.component';

@Component({
  selector: 'app-list-types',
  templateUrl: './list-types.component.html',
  styleUrls: ['./list-types.component.scss']
})
export class ListTypesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'description','active','edit','delete'];
  dataSource :MatTableDataSource<User>= new MatTableDataSource([]);
  listTypes:any[]=[]
  listTypesDysplay:any[]=[]

  @ViewChild(MatSort)
  sort: MatSort;

  length = 0
  pageSize = 5
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage = 1
  pageEvent: PageEvent

  constructor(private _snackBar:MatSnackBar,public dialog: MatDialog,private _userService:UserService) {
    if(this._userService.types.length == 0){
      let sub = this._userService.getUserTypes()
      .pipe(
        map((types:any[])=>{
          types.forEach((e,index)=>{e.position = index+1;})
          return types
        })
        )
        .subscribe(types=>{
          this._userService.types = types
          this.listTypes = types
          this.listTypesDysplay = this.listTypes.slice(0,this.pageSize)
          this.dataSource = new MatTableDataSource(this.listTypesDysplay)
          this.dataSource.sort = this.sort;
          this.length = this.listTypes.length
        },err=>{
          console.log(err)
        },()=>{
          sub.unsubscribe()
        })
    }else{
      this.dataSource = new MatTableDataSource(this._userService.types)
      this.dataSource.sort = this.sort;
      this.listTypes = this._userService.types
    }
  }
  ngOnInit(){
    
  }
  sortData(sort: Sort) {
    const data = this.dataSource
    if (!sort.active || sort.direction === '') {
      this.dataSource = data;
      return;
    }

    data.sortData(data.filteredData,data.sort)
    //   const isAsc = sort.direction === 'asc';
    //   switch (sort.active) {
    //     case 'id': return this.compare(a.id, b.id, isAsc);
    //     case 'name': return this.compare(a.name, b.name, isAsc);
    //     case 'email': return this.compare(a.email, b.email, isAsc);
    //     case 'phone': return this.compare(a.phone, b.phone, isAsc);
    //     default: return 0;
    //   }
    // }
    
  } 
  openEditDialog(type) {
    const dialogRef = this.dialog.open(BoxDialogEditTypeComponent, {
      width: '100%',
      data: {type:type, alterou : false}
    });
    return dialogRef.afterClosed()
  }
  openDeleteDialog(type) {
    const dialogRef = this.dialog.open(BoxSialogDeleteTypesComponent, {
      width: '100%',
      data: {type:type, alterou : false}
    });
    return dialogRef.afterClosed()
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
     horizontalPosition:'center',
     verticalPosition:'top'
    });
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  deleteUse(user:User){
    let sub = this.openDeleteDialog(user)
    .subscribe(delet=>{
      if(delet?.choice){
        console.log(delet)
        let sub2 = this._userService.deleteUserTypes(user.id)
        .subscribe(del=>{
          
          this.openSnackBar('User Type was Deleted!','Close')
          let index = this.listTypes.indexOf(user)
          this.listTypes.splice(index,1)
          this.listTypesDysplay = this.listTypes.slice(0,this.pageSize)
          this.dataSource = new MatTableDataSource(this.listTypesDysplay)
          this.dataSource.sort = this.sort;
        },err=>{
          console.log(err)
        },()=>{
          sub2.unsubscribe()
        })
      }
    },err=>{
      console.log(err)
    },()=>{
      sub.unsubscribe()
    })
  }
  alterUser(type){
    let sub = this.openEditDialog(type)
    .subscribe(alter=>{
      if(alter?.alterou){
        let sub2 = this._userService.updateUserTypes(alter.type)
        .subscribe(userApi=>{
          this.listTypes[this.listTypes.indexOf(type)] = alter.type
          this.listTypesDysplay = this.listTypes.slice(0,this.pageSize)
          this.dataSource = new MatTableDataSource(this.listTypesDysplay)
          this.dataSource.sort = this.sort;
          this.openSnackBar('User Type was updated!','Close')
        },err=>{
          console.log(err)
        },()=>{
          sub2.unsubscribe()
        })
        }else{
        this.openSnackBar('Nothing has changed!','Close')
      }
    },err=>{
      console.log(err)
    },()=>{
      sub.unsubscribe()
    })
    
  }
  paginator(page){
    this.listTypesDysplay = this.listTypes.slice(page.pageIndex * page.pageSize,(page.pageIndex + 1)*page.pageSize)
    this.dataSource = new MatTableDataSource(this.listTypesDysplay)
    this.dataSource.sort = this.sort;
  }

}
