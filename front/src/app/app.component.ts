import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './@core/mock/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme-master';
  loading:BehaviorSubject<boolean>
  constructor(private _loadingService:LoaderService){
    this.loading = this._loadingService.isLoading
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
