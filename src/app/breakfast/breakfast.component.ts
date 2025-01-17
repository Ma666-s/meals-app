import { Component } from '@angular/core';
import { Breakfast } from '../models/breakfast.interface';
import { BreakfastCardComponent } from "../breakfast-card/breakfast-card.component";

@Component({
  selector: 'app-breakfast',
  imports: [BreakfastCardComponent],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.css'
})
export class BreakfastComponent {
cardBreak : Breakfast[] = [
  {pImgPath:"https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg", pName:"Bread omelette", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/1550441882.jpg", pName:"Breakfast Potatoes", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg", pName:"English Breakfast", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/1543774956.jpg", pName:"Fruit and Cream Cheese Breakfast Pastries", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg", pName:"Full English Breakfast", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg", pName:"Home-made Mandazi", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/1550440197.jpg", pName:"Salmon Eggs Eggs Benedict", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/1550441275.jpg", pName:"Smoked Haddock Kedgeree", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  
]
}
