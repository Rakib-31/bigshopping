import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  products$;
  categories$;

  constructor(
    private productService: ProductService,
    categoryService: CategoryService) { 
    this.products$ = productService.getAll();
    this.categories$ = categoryService.getAll();
  }

}
