import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {map, share, startWith, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isHandset$: Observable<BreakpointState> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(share());

  constructor(private breakpointObserver: BreakpointObserver) {}
}
