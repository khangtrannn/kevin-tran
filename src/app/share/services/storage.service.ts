import { Inject, Injectable } from '@angular/core';
import {
  LOCAL_STORAGE,
  SESSION_STORAGE,
  StorageService as NgxStorageService,
} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(
    @Inject(LOCAL_STORAGE) private storage: NgxStorageService,
    @Inject(SESSION_STORAGE) private sessionStorage: NgxStorageService
  ) {}

  public getItem<T>(key: string): T {
    return this.storage.get(key) as T;
  }
  public store(key: string, obj: unknown): void {
    this.storage.set(key, obj);
  }

  public remove(key: string): void {
    this.storage.remove(key);
  }

  public getSessionItem<T>(key: string): T {
    return this.sessionStorage.get(key) as T;
  }
  public storeSessionItem(key: string, obj: unknown): void {
    this.sessionStorage.set(key, obj);
  }

  public removeSession(key: string): void {
    this.sessionStorage.remove(key);
  }
}

export const LocalStorageKey = {
  PRODUCT_ORDERS: 'PRODUCT_ORDER',
};
