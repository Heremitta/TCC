import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './@core/mock/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'theme-master';
  loading: BehaviorSubject<boolean>;
  constructor(private _loadingService: LoaderService) {
    this.loading = this._loadingService.isLoading;
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
