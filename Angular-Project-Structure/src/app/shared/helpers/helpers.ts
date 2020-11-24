import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Helpers {
  constructor() { }

  helperMethodName(n) {
      return n;
    }

}
