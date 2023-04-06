import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./Component/product/product.component";
import { CartComponent } from "./Component/cart/cart.component";
import { LoginComponent } from "./Component/login/login.component";
import { SignupComponent } from "./Component/signup/signup.component";

const routes: Routes =[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},

{path:'',redirectTo:'product',pathMatch:'full'},
{path:'product',component:ProductComponent},
{path:'cart',component:CartComponent}

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}