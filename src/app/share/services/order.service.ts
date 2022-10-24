import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject } from 'rxjs';
import { Order } from 'src/app/models/order';
import { LocalStorageKey, StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders$ = new ReplaySubject<Order[]>(1);
  private orders: Order[] = [];

  constructor(private storageService: StorageService) {
    const orders = this.storageService.getItem(LocalStorageKey.PRODUCT_ORDERS);
    this.orders$.next(orders as Order[]);
  }

  getOrders(): Observable<Order[]> {
    return this.orders$.asObservable();
  }

  getTotalNumber(): Observable<number> {
    return this.getOrders().pipe(
      map((orders) =>
        orders.reduce((accumulate, order) => accumulate + order.quantity, 0)
      )
    );
  }

  addOrder(order: Order): void {
    this.handleAddOrder(order);
    this.orders$.next(this.orders);
    this.storageService.store(LocalStorageKey.PRODUCT_ORDERS, this.orders);
  }

  private handleAddOrder(newOrder: Order): void {
    const product = this.orders.find(
      (order) => order.color === newOrder.color && order.size === newOrder.size
    );

    if (product) {
      product.quantity += newOrder.quantity;
      return;
    }

    this.orders.push(newOrder);
  }
}
