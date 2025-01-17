import { Component } from '@angular/core';
import { Pasta } from '../models/pasta.interface';
import { PastaCardComponent } from "../pasta-card/pasta-card.component";

@Component({
  selector: 'app-pasta',
  imports: [PastaCardComponent],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {
cardPasta : Pasta[] = [
  {pImgPath:"https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg", pName:"Chilli prawn linguine", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg", pName:"Fettuccine Alfredo", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg", pName:"Fettucine alfredo", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg", pName:"Grilled Mac and Cheese Sandwich", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg", pName:"Lasagna Sandwiches", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg", pName:"Lasagne", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg", pName:"Pilchard puttanesca", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg", pName:"Spaghetti alla Carbonara", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
  {pImgPath:"https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg", pName:"Venetian Duck Ragu", pCat:"Some quick example text to build on the card title and make up the bulk of the card's content."},
]
}
