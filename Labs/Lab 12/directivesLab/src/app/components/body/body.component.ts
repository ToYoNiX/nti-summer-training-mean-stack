import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {
  laptops: Product[] = [
    {
      id: 1, name: "hp 15s", quantity: 30, description: "a powerful notebook", price: 20000
    },
    {
      id: 2, name: "lenovo ideapad", quantity: 10, description: "a slick notebook", price: 30000
    },
    {
      id: 3, name: "hp envy 15", quantity: 5, description: "a gaming laptop", price: 50000
    },
    {
      id: 4, name: "dell g15", quantity: 5, description: "a sick gaming laptop", price: 60000
    },
  ]

  isLaptopsAvailable () : boolean {
    if (this.laptops.length != 0) {
      return true
    } else {
      return false
    }
  }
}

interface Product {
  id: number,
  name: string,
  quantity: number,
  description: string,
  price: number
}