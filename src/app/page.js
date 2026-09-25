import { orders } from "@/data/orders";

export default async function Home() {


  const ordersData = Object.values(orders)

  console.log(ordersData);

  return (
    <div>
      <div>hellow world</div>

      {
        ordersData.map(order => {
          return (
            <div key={order.id} >
              <p>{order.customer?.name}</p>
            </div>
          )
        })
      }
    </div>

  );
}
