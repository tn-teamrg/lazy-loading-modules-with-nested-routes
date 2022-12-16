import { Component, Input, OnInit } from '@angular/core';
import { ITEMS } from '../mocks/mock-items';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  // * NOTE: passing in as a string
  @Input() childItem = '';

  items = ITEMS;

  currentItem = 'bananas in boxes';

  constructor() { }

  ngOnInit(): void {
  }
}
