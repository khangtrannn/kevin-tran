import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders$ = new ReplaySubject<Order[]>(1);
  private orders: Order[] = [];

  addOrder(order: Order): void {
    this.orders.push(order);
    this.orders$.next(this.orders);
  }

  getOrders(): Observable<Order[]> {
    return this.orders$.asObservable();
  }
}
