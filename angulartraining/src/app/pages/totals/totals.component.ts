import { Component } from '@angular/core';
import {TotalsServiceService} from "../../services/totals-service.service";
import {AsyncPipe} from "@angular/common";
@Component({
  selector: 'app-totals',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './totals.component.html',
  styleUrl: './totals.component.scss'
})
export class TotalsPage {

  constructor(protected totalsService: TotalsServiceService) {
  }
}
