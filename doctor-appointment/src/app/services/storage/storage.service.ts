/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  ret: any;

  constructor(private storage: Storage) { }

  // Store the value
  async store(storageKey: string, value: any) {
    await this.storage.set(storageKey, value);
    console.log('success storage');
  }

  // Get the value
  async get(storageKey: string) {
    await this.storage.get(storageKey).then(
      (res: any) => {
        this.ret = res;
        console.log(res);
      }
    );
    return this.ret;
  }

  async removeStorageItem(storageKey: string) {
    await this.storage.remove(storageKey);
  }

  // Clear storage
  async clear() {
    await this.storage.clear();
  }
}
