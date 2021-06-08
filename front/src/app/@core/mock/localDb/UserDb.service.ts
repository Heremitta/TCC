import { Injectable } from '@angular/core';
import dexie from 'dexie'
import { UserLocalData } from '../../data/userLocalData.model';

@Injectable({
  providedIn: 'root'
})
export class UserDbService extends dexie{
  userDb: dexie.Table<UserLocalData,any>  
  user:UserLocalData
  dex:dexie

  constructor() { 
    super("db-user");
    this.version(1).stores({
        user: '++id',
    });
    this.userDb = this.table("user");

    this.userDb.toArray().then(usuario=>{
      this.user = usuario[0]
    })
  }
  async getUser() {
    return await this.userDb.toArray(user => this.user = user[0])
  }
  async saveUser({userId,token}){
    try {
      await this.userDb.clear()
      let usuario = {userId, token}
      await this.userDb.add(usuario);
      let dados = await this.userDb.toArray();
      console.log('User save in indexedDb ', dados)
    } catch (e) {
      console.log("erro to save user in indexedDb ", e)
    }
  }

}
