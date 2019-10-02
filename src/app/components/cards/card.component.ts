import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { myImg } from '../../models/common.model';


@Component({
  selector: 'cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class cardsComponent implements OnChanges {

  @Input() item: string;
  image: string;

  constructor(private router: Router) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['item']) {
      console.log(this.item);
      this.image = myImg[this.item]
    }
  }
  nav(item) {
    this.router.navigate(['/food'], { queryParams: { itemName: item } });

  }
}
