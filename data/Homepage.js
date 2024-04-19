import { Truck,Receipt, Headset, WalletCards   } from "lucide-react";

export const data = [
    {
        id: 1,
        imgUrl : "/nike2.jpg",
        BrandName : "Nike",
        price: 2500,
        name:"Nike Running Shoes"
    },
    {
        id: 2,
        imgUrl : "/apple.jpg",
        BrandName : "Apple",
        price: 30000,
        name:"Greed Smart Watch"
    }
];

export const salesData = [
    {
      id: 1,
      iconName:<Truck className="size-8"/>,
      title:"Free Shipping",
      details: "Avove all Orders over ₹ 200"
    },
    {
      id:2,
      iconName:<Receipt className="size-8"/>,
      title:"Money Guarantee",
      details: "30 Days For Exchange"
    },
    {
      id:3,
      iconName:<Headset className="size-8"/>,
      title:"Online Support",
      details: "24/7 customer Care"
    },
    {
      id:4,
      iconName:<WalletCards className="size-8"/>,
      title:"Flexible payment",
      details:"Pay with multiple credit card"
    }
  ];

  export const categories = [
    {
        id: 1,
        category : "Men's",
        buttonText : "Shop Now",
        text:"Collection",
        offer:"sale 30% Off"
    },
    {
        id: 2,
        category: "Women's",
        buttonText:"Shop Now",
        text:"Collection",
        offer:"Limited Offers"
    },
    {
        id:3,
        buttonText:"Shop Now",
        text:"Branded Accessories",
    },
    {
        id: 4,
        buttonText: "Shop Now",
        text:"Branded Shoes"
    }
  ];