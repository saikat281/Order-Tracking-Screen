import { orders } from "@/data/orders";


export default async function OrderDetailsPage({ params }) {
  const { orderId } = await params;

  const order = orders[orderId];

  if (!order) {
    return (
      <div>
        <h1>Order not found</h1>
        <p>No order found with ID: {orderId}</p>
      </div>
    );
  }

  return (
    <div>
        <h1>specific order</h1>
    </div>
  );
}
