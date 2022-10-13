type orderStatus =
  | "In Confirmation"
  | "Shipped"
  | "Out For Delivery"
  | "Delivered";
type paymentMode =
  | "Cash On Delivery"
  | "UPI"
  | "Net Banking"
  | "Debit/Credit Card";
type paymentStatus = "Unpaid" | "Paid";

interface Iorder {
  orderId: number;
  itemId: string;
  orderStatus: orderStatus;
  paymentAmount: number;
  paymentStatus: paymentStatus;
  paymentMode: paymentMode;
}

const order: Iorder = {
  orderId: 45,
  orderStatus: "Shipped",
  itemId: "45906AE34",
  paymentAmount: 4859.56,
  paymentMode: "Cash On Delivery",
  paymentStatus: "Unpaid",
};

console.log(order);
export {};
