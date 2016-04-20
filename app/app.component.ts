import {Component} from 'angular2/core';

export class Item {
  id: number;
  name: string;
}
var ITEMS: Item[] =[
	{id: 1,name: 'PHP'},
	{id: 2,name: 'C++'},
	{id: 3,name: 'c#'},
	{id: 4,name: 'Angular 1'},
	{id: 5,name: 'Angular 2'},
	{id: 6,name: 'Bootstrap'},
	{id: 7,name: 'Lisp'},
	{id: 8,name: 'VB6'},

];

@Component({
    selector: 'my-app',
    template: `<h1>Welcome to {{title}}, {{location}}</h1>
    			
    			 <h2>Courses offered</h2>
				<ul class="items">
				  <li *ngFor="#item of items" 
				   [class.selected]="item === selectedItem"
				   (click)="onSelect(item)" >
				    <!-- each hero goes here -->
				      <span class="badge">{{item.id}}</span>  {{item.name}}
				  </li>
				</ul>
				<div  *ngIf="selectedItem">
				<h2>{{selectedItem.name}} details!</h2>
				<div><label>id: </label>{{selectedItem.id}}</div>
				
				    <label>name: </label>
				    <input [(ngModel)]="selectedItem.name" placeholder="name"/>
				</div>

    		  `,
    styles:[`
			  .selected {
			    background-color: #999 !important;
			    color: white;
			  }
			  .items {
			    margin: 0 0 2em 0;
			    list-style-type: none;
			    padding: 0;
			    width: 15em;
			  }
			  .items li {
			    cursor: pointer;
			    position: relative;
			    left: 0;
			    background-color: #EEE;
			    margin: .5em;
			    padding: .3em 0;
			    height: 1.6em;
			    border-radius: 0px;
			  }
			  .items li.selected:hover {
			    background-color: #BBD8DC !important;
			    color: white;
			  }
			  .items li:hover {
			    color: #607D8B;
			    background-color: #DDD;
			    left: .1em;
			  }
			  .items .text {
			    position: relative;
			    top: -3px;
			  }
			  .items .badge {
			    display: inline-block;
			    font-size: small;
			    color: white;
			    padding: 0.8em 0.7em 0 0.7em;
			    background-color: #424242;
			    line-height: 1em;
			    position: relative;
			    left: -1px;
			    top: -4px;
			    height: 1.8em;
			    margin-right: .8em;
			    border-radius: 4px 0 0 4px;
			  }
			`]		  
})
export class AppComponent {
	title = 'Programming Tech';
	location = 'Milano,Italy';
	items = ITEMS;

	selectedItem: Item;
	onSelect(item: Item) { this.selectedItem = item; }
	
	
 }

