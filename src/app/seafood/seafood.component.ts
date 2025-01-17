import { Component } from '@angular/core';
import { Seafood } from '../models/seafood.interface';
import { SeafoodCardComponent } from "../seafood-card/seafood-card.component";

@Component({
  selector: 'app-seafood',
  imports: [SeafoodCardComponent],
  templateUrl: './seafood.component.html',
  styleUrl: './seafood.component.css'
})
export class SeafoodComponent {

  cardSeafood : Seafood[] = [
    {pImgPath: "https://www.themealdb.com/images/media/meals/1548772327.jpg", pName:"Baked salmon with fennel", pCat: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {pImgPath: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg", pName:"Cajun spiced fish tacos", pCat: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {pImgPath: "https://www.themealdb.com/images/media/meals/1520084413.jpg", pName:"Escovitch Fish", pCat: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {pImgPath: "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg", pName:"Fish fofos", pCat: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {pImgPath: "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg", pName:"Fish pie", pCat: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {pImgPath: "https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg", pName:"Fish Soup (Ukha)", pCat: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {pImgPath: "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg", pName:"Fish Stew with Rouille", pCat: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {pImgPath: "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg", pName:"Garides Saganaki", pCat: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {pImgPath: "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg", pName:"Grilled Portuguese sardines", pCat: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {pImgPath: "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg", pName:"Honey Teriyaki Salmon", pCat: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {pImgPath: "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg", pName:"Kedgeree", pCat: "Some quick example text to build on the card title and make up the bulk of the card's content."},
  ]
}
