// "name": "Black panther shaw",
//     "image": "https://www.gettyimages.in/detail/photo/young-asian-woman-with-hooded-top-royalty-free-image/82268918?adppopup=true",
//     "description": "The original puma collection , soft ribbing with coller and cuffs and hem for a clean ",
//     "price": 900,
//     "_id": "6452a83d1db055f8fdb2993b",
//     "createdAt": "2023-05-03T18:30:21.735Z",
//     "updatedAt": "2023-05-03T18:30:21.735Z",
//     "__v": 0

 export interface IProduct {
    _id: string
    name: string
    image: string
    description: string
    price: number
}

export interface ICartItem {
    name: string
    id: string
    price: number
    image: string
    quantity: number
    product: string
}

 export type RawCartItem = Pick<ICartItem, "image" | "name" | "price" | "product">