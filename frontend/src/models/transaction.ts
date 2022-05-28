import { Product } from "./product";

export default interface Transaction {
    transactionId: number;
    date: Date;
    product: Product
}