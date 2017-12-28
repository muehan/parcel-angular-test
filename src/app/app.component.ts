/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

/**
 * App Component
 * Top Level Component
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    
  ],
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{

  constructor( ) {
    console.log('creating AppComponent');
  }

  public ngOnInit() {
    console.log('Initial App State');
  }
}
