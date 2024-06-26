import { Injectable } from '@angular/core';

export interface User {
    id: number;
    username: string;
    email: String;
    mobile: string;
    password: string;
    confirm_password?: string;
}
@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends User> {
  protected model!: T[];

  create(newItem: T): void {
    console.log(this.model);
    console.log("newItem: ",newItem);
    this.model.push(newItem);
  }
  getAll(): T[] {
    return this.model;
  }
  get(id: number): T | undefined {
    return this.model.find((item: T) => item?.id === id);
  
  }
  update(id: number, updatedItem: T): void {
    const index = this.model.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.model[index] = updatedItem;
    }
  }
}
