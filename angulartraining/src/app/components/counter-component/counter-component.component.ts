import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {TotalsServiceService} from "../../services/totals-service.service";

@Component({
  selector: 'app-counter-component',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe
  ],
  templateUrl: './counter-component.component.html',
  styleUrl: './counter-component.component.scss'
})
export class CounterComponentComponent implements OnInit{

  @Input() public initialCount: number | undefined;

  public count: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public oldCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public letter: BehaviorSubject<string>  = new BehaviorSubject<string>('');
  constructor(protected totalsService: TotalsServiceService) {
    this.count.subscribe((value) => {
      this.setLetter(value+1);
      totalsService.incrementBy(value - this.oldCount.getValue());
      this.oldCount.next(value);
    });
  }

  //on Init
  ngOnInit() {
    this.count.next(this.initialCount || 0);
  }

  setLetter(count: number) {
    let ordA = 'a'.charCodeAt(0);
    let ordZ = 'z'.charCodeAt(0);
    let len = ordZ - ordA + 1;

    let s = "";
    let n = count;
    while(n >= 0) {
      s = String.fromCharCode(n % len + ordA) + s;
      n = Math.floor(n / len) - 1;
    }
    this.letter.next(s);
  }
}
