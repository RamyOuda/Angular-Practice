import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { map, catchError } from 'rxjs';
import { Observable, of } from 'rxjs';
import { ProductResolved } from './product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<ProductResolved> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(Number(id))) {
      const message = `Product id was not a number: ${id}`;
      console.error(message);
      return of({ product: null, error: message });
    }

    return this.productService.getProduct(Number(id)).pipe(
      map((product) => ({ product: product })),
      catchError((error) => {
        const message = `Reteival error: ${error}`;
        console.error(message);
        return of({ product: null, error: message });
      })
    );
  }
}
