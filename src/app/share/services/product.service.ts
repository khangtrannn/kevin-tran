import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products$ = new ReplaySubject<Product[]>(1);

  constructor(private httpClient: HttpClient) {}

  initData(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>('/assets/data/product.json')
      .pipe(
        tap((products) =>
          this.products$.next(
            products.map((product) => Object.assign(new Product(), product))
          )
        )
      );
  }

  getAllProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.getAllProducts().pipe(
      map((products) => products.find((product) => product.id === id))
    );
  }
}
