export const orders = {
  "ORD-10492": {
    id: "ORD-10492",
    status: "out-for-delivery",
    statusLabel: "Out for Delivery",
    eta: "Sep 24, 6:00 PM",
    customer: {
      name: "Saikat Sarkar",
    },
    product: {
      name: "Wireless Headphones",
      quantity: 1,
      price: 2499,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 22, 10:30 AM",
        complete: true,
        current: false,
      },
      {
        label: "Shipped",
        description: "Package has left the warehouse",
        time: "Sep 23, 2:15 PM",
        complete: true,
        current: false,
      },
      {
        label: "Out for Delivery",
        description: "Your package is on the way",
        time: "Sep 24, 9:20 AM",
        complete: false,
        current: true,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },

  "ORD-10518": {
    id: "ORD-10518",
    status: "delayed",
    statusLabel: "Delivery Delayed",
    eta: "Sep 26, 6:00 PM",
    customer: {
      name: "Nusrat Jahan",
    },
    product: {
      name: "Mechanical Keyboard",
      quantity: 1,
      price: 4299,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 23, 9:15 AM",
        complete: true,
        current: false,
      },
      {
        label: "Shipped",
        description: "Package has left the warehouse",
        time: "Sep 24, 11:40 AM",
        complete: true,
        current: false,
      },
      {
        label: "Delayed",
        description: "Delivery is taking longer than expected",
        time: "Sep 25, 3:20 PM",
        complete: false,
        current: true,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },

  "ORD-10531": {
    id: "ORD-10531",
    status: "processing",
    statusLabel: "Processing",
    eta: "Sep 28, 6:00 PM",
    customer: {
      name: "Rahim Ahmed",
    },
    product: {
      name: "Smart Watch",
      quantity: 1,
      price: 5999,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order is being prepared",
        time: "Sep 25, 10:00 AM",
        complete: false,
        current: true,
      },
      {
        label: "Shipped",
        description: "Package will leave the warehouse soon",
        time: null,
        complete: false,
        current: false,
      },
      {
        label: "Out for Delivery",
        description: "Your package will be delivered",
        time: null,
        complete: false,
        current: false,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },

  "ORD-10547": {
    id: "ORD-10547",
    status: "shipped",
    statusLabel: "Shipped",
    eta: "Sep 27, 6:00 PM",
    customer: {
      name: "Farhan Kabir",
    },
    product: {
      name: "USB-C Fast Charger",
      quantity: 2,
      price: 1599,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 24, 8:30 AM",
        complete: true,
        current: false,
      },
      {
        label: "Shipped",
        description: "Package has left the warehouse",
        time: "Sep 25, 1:10 PM",
        complete: false,
        current: true,
      },
      {
        label: "Out for Delivery",
        description: "Your package will be delivered soon",
        time: null,
        complete: false,
        current: false,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },

  "ORD-10562": {
    id: "ORD-10562",
    status: "delivered",
    statusLabel: "Delivered",
    eta: "Sep 23, 4:00 PM",
    customer: {
      name: "Mim Akter",
    },
    product: {
      name: "Bluetooth Speaker",
      quantity: 1,
      price: 3299,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 20, 9:00 AM",
        complete: true,
        current: false,
      },
      {
        label: "Shipped",
        description: "Package has left the warehouse",
        time: "Sep 21, 12:30 PM",
        complete: true,
        current: false,
      },
      {
        label: "Out for Delivery",
        description: "Your package was on the way",
        time: "Sep 23, 10:15 AM",
        complete: true,
        current: false,
      },
      {
        label: "Delivered",
        description: "Package delivered successfully",
        time: "Sep 23, 3:42 PM",
        complete: true,
        current: true,
      },
    ],
  },

  "ORD-10579": {
    id: "ORD-10579",
    status: "processing",
    statusLabel: "Processing",
    eta: "Sep 29, 6:00 PM",
    customer: {
      name: "Tanvir Hasan",
    },
    product: {
      name: "Laptop Stand",
      quantity: 1,
      price: 1899,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 25, 8:45 AM",
        complete: false,
        current: true,
      },
      {
        label: "Shipped",
        description: "Package will leave the warehouse soon",
        time: null,
        complete: false,
        current: false,
      },
      {
        label: "Out for Delivery",
        description: "Your package will be delivered",
        time: null,
        complete: false,
        current: false,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },

  "ORD-10584": {
    id: "ORD-10584",
    status: "out-for-delivery",
    statusLabel: "Out for Delivery",
    eta: "Sep 25, 7:00 PM",
    customer: {
      name: "Jannatul Ferdous",
    },
    product: {
      name: "Wireless Mouse",
      quantity: 2,
      price: 1299,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 22, 11:20 AM",
        complete: true,
        current: false,
      },
      {
        label: "Shipped",
        description: "Package has left the warehouse",
        time: "Sep 23, 4:30 PM",
        complete: true,
        current: false,
      },
      {
        label: "Out for Delivery",
        description: "Your package is on the way",
        time: "Sep 25, 9:45 AM",
        complete: false,
        current: true,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },

  "ORD-10603": {
    id: "ORD-10603",
    status: "shipped",
    statusLabel: "Shipped",
    eta: "Sep 27, 5:30 PM",
    customer: {
      name: "Sadia Rahman",
    },
    product: {
      name: "Portable SSD 1TB",
      quantity: 1,
      price: 7499,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 24, 10:15 AM",
        complete: true,
        current: false,
      },
      {
        label: "Shipped",
        description: "Package has left the warehouse",
        time: "Sep 25, 2:00 PM",
        complete: false,
        current: true,
      },
      {
        label: "Out for Delivery",
        description: "Your package will be delivered soon",
        time: null,
        complete: false,
        current: false,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },

  "ORD-10617": {
    id: "ORD-10617",
    status: "delivered",
    statusLabel: "Delivered",
    eta: "Sep 22, 5:00 PM",
    customer: {
      name: "Imran Hossain",
    },
    product: {
      name: "Gaming Mouse",
      quantity: 1,
      price: 2799,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 20, 8:00 AM",
        complete: true,
        current: false,
      },
      {
        label: "Shipped",
        description: "Package has left the warehouse",
        time: "Sep 20, 3:00 PM",
        complete: true,
        current: false,
      },
      {
        label: "Out for Delivery",
        description: "Your package was on the way",
        time: "Sep 22, 9:00 AM",
        complete: true,
        current: false,
      },
      {
        label: "Delivered",
        description: "Package delivered successfully",
        time: "Sep 22, 4:25 PM",
        complete: true,
        current: true,
      },
    ],
  },

  "ORD-10628": {
    id: "ORD-10628",
    status: "processing",
    statusLabel: "Processing",
    eta: "Sep 30, 6:00 PM",
    customer: {
      name: "Raisa Islam",
    },
    product: {
      name: "Webcam Full HD",
      quantity: 1,
      price: 3999,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order is being prepared",
        time: "Sep 25, 9:30 AM",
        complete: false,
        current: true,
      },
      {
        label: "Shipped",
        description: "Package will leave the warehouse soon",
        time: null,
        complete: false,
        current: false,
      },
      {
        label: "Out for Delivery",
        description: "Your package will be delivered",
        time: null,
        complete: false,
        current: false,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },

  "ORD-10641": {
    id: "ORD-10641",
    status: "out-for-delivery",
    statusLabel: "Out for Delivery",
    eta: "Sep 25, 8:00 PM",
    customer: {
      name: "Arif Chowdhury",
    },
    product: {
      name: "Power Bank 20000mAh",
      quantity: 1,
      price: 2199,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 22, 7:30 AM",
        complete: true,
        current: false,
      },
      {
        label: "Shipped",
        description: "Package has left the warehouse",
        time: "Sep 23, 1:00 PM",
        complete: true,
        current: false,
      },
      {
        label: "Out for Delivery",
        description: "Your package is on the way",
        time: "Sep 25, 10:00 AM",
        complete: false,
        current: true,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },

  "ORD-10655": {
    id: "ORD-10655",
    status: "delayed",
    statusLabel: "Delivery Delayed",
    eta: "Sep 28, 6:00 PM",
    customer: {
      name: "Mahin Ahmed",
    },
    product: {
      name: "Smartphone Case",
      quantity: 2,
      price: 799,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 23, 10:00 AM",
        complete: true,
        current: false,
      },
      {
        label: "Shipped",
        description: "Package has left the warehouse",
        time: "Sep 24, 5:00 PM",
        complete: true,
        current: false,
      },
      {
        label: "Delayed",
        description: "Delivery is taking longer than expected",
        time: "Sep 25, 1:45 PM",
        complete: false,
        current: true,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },

  "ORD-10672": {
    id: "ORD-10672",
    status: "shipped",
    statusLabel: "Shipped",
    eta: "Sep 29, 4:30 PM",
    customer: {
      name: "Nabila Sultana",
    },
    product: {
      name: "Bluetooth Earbuds",
      quantity: 1,
      price: 3599,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 24, 9:15 AM",
        complete: true,
        current: false,
      },
      {
        label: "Shipped",
        description: "Package has left the warehouse",
        time: "Sep 25, 12:45 PM",
        complete: false,
        current: true,
      },
      {
        label: "Out for Delivery",
        description: "Your package will be delivered soon",
        time: null,
        complete: false,
        current: false,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },

  "ORD-10689": {
    id: "ORD-10689",
    status: "delivered",
    statusLabel: "Delivered",
    eta: "Sep 21, 3:00 PM",
    customer: {
      name: "Fahim Hossain",
    },
    product: {
      name: "Laptop Backpack",
      quantity: 1,
      price: 2499,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order has been confirmed",
        time: "Sep 19, 8:30 AM",
        complete: true,
        current: false,
      },
      {
        label: "Shipped",
        description: "Package has left the warehouse",
        time: "Sep 19, 2:00 PM",
        complete: true,
        current: false,
      },
      {
        label: "Out for Delivery",
        description: "Your package was on the way",
        time: "Sep 21, 9:30 AM",
        complete: true,
        current: false,
      },
      {
        label: "Delivered",
        description: "Package delivered successfully",
        time: "Sep 21, 2:15 PM",
        complete: true,
        current: true,
      },
    ],
  },

  "ORD-10704": {
    id: "ORD-10704",
    status: "processing",
    statusLabel: "Processing",
    eta: "Oct 1, 6:00 PM",
    customer: {
      name: "Tanjim Hasan",
    },
    product: {
      name: "LED Desk Lamp",
      quantity: 1,
      price: 1699,
    },
    timeline: [
      {
        label: "Processing",
        description: "Your order is being prepared",
        time: "Sep 25, 11:00 AM",
        complete: false,
        current: true,
      },
      {
        label: "Shipped",
        description: "Package will leave the warehouse soon",
        time: null,
        complete: false,
        current: false,
      },
      {
        label: "Out for Delivery",
        description: "Your package will be delivered",
        time: null,
        complete: false,
        current: false,
      },
      {
        label: "Delivered",
        description: "Package delivered to you",
        time: null,
        complete: false,
        current: false,
      },
    ],
  },
};
