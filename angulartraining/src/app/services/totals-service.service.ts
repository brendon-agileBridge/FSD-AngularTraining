import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TotalsServiceService {

  public total: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }
  public incrementBy(value: number) {
    this.total.next(this.total.getValue() + value);

  }

  public setTotal(value: number) {
    this.total.next(value);
  }
}
