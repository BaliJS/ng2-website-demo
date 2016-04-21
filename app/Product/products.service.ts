import { Injectable } from 'angular2/core';

export interface Product {
    id: number;
    name: string;
    imageFileName?: string;
    price: number;
    description: string;
}

@Injectable()
export class ProductService {

    products: Product[] = [
        {
            id: 1,
            name: "Chocolate Cake",
            imageFileName: "chocolate_cake.jpg",
            price: 8.99,
            description: "Rich chocolate frosting cover this chocolate lover’s dream."
        },
        {
            id: 2,
            name: "Carrot Cake",
            imageFileName: "carrot_cake.jpg",
            price: 8.99,
            description: "A scrumptious mini-carrot cake encrusted with sliced almonds"
        },
        {
            id: 3,
            name: "Lemon Tart",
            imageFileName: "lemon_tart.jpg",
            price: 9.99,
            description: "A delicious lemon tart with fresh meringue cooked to perfection"
        }
        ,
        {
            id: 4,
            name: "Bread",
            imageFileName: "bread.jpg",
            price: 1.49,
            description: "Fresh baked French-style bread"
        }
        ,
        {
            id: 5,
            name: "Pear Tart",
            imageFileName: "pear_tart.jpg",
            price: 7.99,
            description: "A glazed pear tart topped with sliced almonds and a dash of cinnamon"
        }
        ,
        {
            id: 6,
            name: "Cupcakes",
            imageFileName: "cupcakes.jpg",
            price: 8.99,
            description: "Delectable vanilla and chocolate cupcakes"
        }
    ];
    
    

    getProducts(): Product[] {
        return this.products;
    }
    
    getFeaturedProduct() : Product {
        return this.products[0];
    }



}