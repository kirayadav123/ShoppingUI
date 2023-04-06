import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  public CartItemList : any =[]

  public productlist = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getproduct(){
   return this.productlist.asObservable();
  }

  setProduct(product : any){
    this.CartItemList.push(...product);
    this.productlist.next(product);
  }
  addtocart(product : any){
    this.CartItemList.push(product);
    this.productlist.next(this.CartItemList);
    this.getTotalPrice();
    console.log(this.CartItemList);

  }
  getTotalPrice(): number{
    let grandTotal =0;
    this.CartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product : any){
    this.CartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.CartItemList.splice(index,1);

      }
    })
    this.productlist.next(this.CartItemList);
  }
  removeAllCart(){
    this.CartItemList=[]
      this.productlist.next(this.CartItemList);
    
  }
}
