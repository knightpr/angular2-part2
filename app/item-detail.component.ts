import {Component, Input} from 'angular2/core';
import {Item} from './item';
@Component({
  selector: 'my-item-detail',
  template:`<div  *ngIf="item">
				<h2>{{item.name}} details!</h2>
				<div><label>id: </label>{{item.id}}</div>
				
				    <label>name: </label>
				    <input [(ngModel)]="item.name" placeholder="name"/>
				</div>
  `
})
export class ItemDetailComponent {
	@Input() 
	item : Item;
}
