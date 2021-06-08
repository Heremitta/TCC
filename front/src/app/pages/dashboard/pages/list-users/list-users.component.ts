import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../../@core/data/user.model';
import { userResultApi } from '../../../../@core/data/userResultApi.model';
import { UserService } from '../../../../@core/mock/services/user.service';
import { BoxDialogEditListUsersComponent } from '../../components/box-dialog-edit-list-users/box-dialog-list-users.component';
import { BoxDialogExcludeListUsersComponent } from '../../components/box-dialog-exclude-list-users/box-dialog-exclude-list-users.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','nickName', 'email', 'phone','edit','delete'];
  dataSource :MatTableDataSource<User>= new MatTableDataSource([]);
  listUsers:User[]=[]
  listUsersDysplay:User[]=[]

  @ViewChild(MatSort)
  sort: MatSort;

  length = 0
  pageSize = 5
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage = 1
  pageEvent: PageEvent

  constructor(private _snackBar:MatSnackBar,public dialog: MatDialog,private _userService:UserService) {
  }
  ngOnInit(){
    if(this._userService.users.length == 0){
      let sub = this._userService.getAllUsers()
      .pipe(
        map(user=>{
          user.forEach((e,index)=>{e.position = index+1;})
          return user
        })
      )
      .subscribe(users=>{
        this._userService.users = users
        this.listUsers = users
        this.listUsersDysplay = this.listUsers.slice(0,this.pageSize)
        this.dataSource = new MatTableDataSource(this.listUsersDysplay)
        this.dataSource.sort = this.sort;
        this.length = this.listUsers.length
      },err=>{
        console.log(err)
      },()=>{
        sub.unsubscribe()
      })
    }else{
      this.dataSource = new MatTableDataSource(this._userService.users)
      this.dataSource.sort = this.sort;
      this.listUsers = this._userService.users
    }
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
  openEditDialog(user) {
    const dialogRef = this.dialog.open(BoxDialogEditListUsersComponent, {
      width: '100%',
      data: {user:user, alterou : false}
    });
    return dialogRef.afterClosed()
  }
  openDeleteDialog(user) {
    const dialogRef = this.dialog.open(BoxDialogExcludeListUsersComponent, {
      width: '100%',
      data: {user:user, alterou : false}
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
      if(delet?.emailIsCorrect){
        console.log(user.id)
        let sub2 = this._userService.deleteUser(user.id)
        .subscribe(del=>{
          
          this.openSnackBar('User was Deleted!','Close')
          let index = this.listUsers.indexOf(user)
          this.listUsers.splice(index,1)
          this.listUsersDysplay = this.listUsers.slice(0,this.pageSize)
          this.dataSource = new MatTableDataSource(this.listUsersDysplay)
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
  alterUser(user){
    let sub = this.openEditDialog(user)
    .subscribe(alter=>{
      if(alter?.alterou){
        let sub2 = this._userService.updateUser(alter.user)
        .subscribe(userApi=>{
          this.listUsers[this.listUsers.indexOf(user)] = alter.user
          this.listUsersDysplay = this.listUsers.slice(0,this.pageSize)
          this.dataSource = new MatTableDataSource(this.listUsersDysplay)
          this.dataSource.sort = this.sort;
          this.openSnackBar('User was updated!','Close')
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
    this.listUsersDysplay = this.listUsers.slice(page.pageIndex * page.pageSize,(page.pageIndex + 1)*page.pageSize)
    this.dataSource = new MatTableDataSource(this.listUsersDysplay)
    this.dataSource.sort = this.sort;
  }
}
