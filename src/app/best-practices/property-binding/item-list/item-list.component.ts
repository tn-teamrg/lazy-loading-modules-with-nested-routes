import { Component, Input, OnInit } from '@angular/core';
import { ITEMS } from '../mocks/mock-items';
import { Item } from '../models/items';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  listItems = ITEMS;

  // * NOTE: passing in as an object
  @Input() items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
