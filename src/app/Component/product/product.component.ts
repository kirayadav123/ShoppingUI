import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productlist : any ;
  public filterCategory : any;
  searchKey:string="";
  constructor(private api : ApiService, private cartService : CartService) {}
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productlist = res;
      this.filterCategory =res;


      this.productlist.forEach((a:any) => {
        if(a.category==="women's clothing" || a.catgory ==="men's clothing"){
          a.category="fashion"
        }
        Object.assign(a,{Quantity:1,total:a.price});
        
      });
      console.log(this.productlist);
    });
    this.cartService.search.subscribe(val=>{
      this.searchKey = val;

    })
  }
  addtocart(item : any){
this.cartService.addtocart(item);
  }
  filter(category:string){
    this.filterCategory = this. productlist
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}
