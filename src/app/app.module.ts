import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable ,  BehaviorSubject } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular5-data-table';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './navbar/bs-navbar/bs-navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './component/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { CustomFormsModule } from 'ng2-validation';
import { ProductFilterComponent } from './component/products/product-filter/product-filter.component';
import { ProductCardComponent } from './component/products/product-card/product-card.component';
import { ShoppingCartService } from './services/shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTableModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path:'products', component: ProductsComponent},
      {path:'shopping-cart', component: ShoppingCartComponent},
      {path:'login', component: LoginComponent},

      {path:'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path:'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
      {path:'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
      
      {
        path:'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path:'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path:'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },

      {
        path:'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
