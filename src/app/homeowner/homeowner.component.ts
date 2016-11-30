import { Component, OnInit } from '@angular/core';

import { AppState } from '../app.service';

export interface DarlehensDaten {
  darlehen: number;
  inflation: number;
  sollzins: number;
  tilgung: number;
  laufzeit: number;
}

@Component({
  providers: [
    AppState
  ],
  selector: 'ho-homeowner',
  styleUrls: [ 'homeowner.component.css'],
  templateUrl: 'homeowner.component.html'
})
export class HomeownerComponent implements OnInit {
  private verbose: boolean = true;
  private input: DarlehensDaten = {
    darlehen: 350000,
    inflation: 1.5,
    sollzins: 1.5,
    tilgung: 2.0,
    laufzeit: 10
  };

  get diagnostic() {
    return JSON.stringify(this.input, null, 2);
  }
  constructor(private appState: AppState) { }

  ngOnInit() { }

  onSubmit () {
    // TODO: call reset form #ref-var here
    // http://stackoverflow.com/questions/36345618/angular-2-get-reference-to-a-directive-used-in-a-component
    // http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders/
    console.log('submitted');
  }
  toggleVerbose(): boolean {
    return this.verbose = !this.verbose;
  }
}
