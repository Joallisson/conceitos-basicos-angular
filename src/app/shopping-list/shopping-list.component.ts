import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemList } from './item-list';

@Component({
  selector: 'app-shopping-list',
  imports: [
    FormsModule,
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  item: string = '';
  list: ItemList[] = [];

  addItem(){
    let itemList = new ItemList();
    itemList.name = this.item;
    itemList.id = this.list.length + 1;
    this.list.push(itemList)

    this.item = '';
  }
}
