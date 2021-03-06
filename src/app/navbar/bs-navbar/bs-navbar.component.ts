import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AppUser } from '../../models/app-user';
import { auth } from 'firebase/app';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  appUser: AppUser;
  shoppingCartItemCount: number;

  constructor(
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService) {}

  async ngOnInit(){
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);

    let cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe(cart => {
      this.shoppingCartItemCount = 0;
      for(let productId in cart.items)
        this.shoppingCartItemCount += cart.items[productId].quantity;
    });
  }

  logout(){
    this.authService.logout();
  }
}
