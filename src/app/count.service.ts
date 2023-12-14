import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  count = 0;

  constructor() { }

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data recupere')
      },2000)
    })
  }

  getCount() {
    return this.count;
  }
  increment() {
    this.count++;
  }
  decrement() {
    return this.count--;
  }
  reset(newCount) {
    this.count = newCount;
  }
}
