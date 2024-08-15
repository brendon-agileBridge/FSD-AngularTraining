import {Component, OnInit} from '@angular/core';
import {CounterComponentComponent} from "../../components/counter-component/counter-component.component";
import {of} from "rxjs";
import {TotalsServiceService} from "../../services/totals-service.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CounterComponentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePage {

  protected tenItems = [1,2,3,4,5,6,7,8,9,10];

  constructor(private totalsService: TotalsServiceService) {
    totalsService.setTotal(0);
  }
}
