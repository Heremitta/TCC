import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import io, { Socket } from 'socket.io-client';
import { environment } from '../../../../../../environments/environment';
import { UserService } from '../../../../../@core/mock/services/user.service';
// import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root',
})
export class ConexaoSocketService {
  public socket: Socket = io(environment.API, { transports: ['websocket'] });
  constructor(private _router: Router, private _userService: UserService) {
    setTimeout(() => {
      //   this.buscaTokenIndexedDb()
    }, 600);

    this.socket.on('invalid token', (e) => {
      if (
        this._router.url != '/Entrar' &&
        this._router.url != '/Cadastre-se' &&
        this._router.url != '/Home' &&
        this._router.url != '/' &&
        this._router.url != '/Anuncio'
      ) {
        this._userService.logout();
      }
      console.log(e);
    });
  }

  //    buscaTokenIndexedDb(){
  //     this.usuario.buscaUsuarioIndexDb()
  //     .then(token=>{
  //       this.socket.emit('validar token', token)
  //     })
  //    }
}
