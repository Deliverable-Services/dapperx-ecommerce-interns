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

export const CategoriesData=[
  {
    id: 1,
    category:"Men",
  },
  {
    id: 2,
    category:"Women",
  },
  {
    id: 3,
    category:"Kids",
  },
  {
    id: 4,
    category:"Watches",
  },
  {
    id: 5,
    category:"Shoes",
  },
]

export const sizeData = [
  {
    size:'XS'
  },
  {
    size:'S'
  },
  {
    size:'M'
  },
  {
    size:'L'
  },
  {
    size:"XL"
  },
  {
    size:"2X"
  },
]

export const colorData = [
  {
    id:1,
    colour:'#5f5d5e',
  },
  {
    id:2,
    colour:'#c5c3c6',
  },
  {
    id:3,
    colour:'#abadaa',
  },
  {
    id:4,
    colour:'#76ed74',
  },
  {
    id:5,
    colour:'#987562',
  },
  {
    id:6,
    colour:'#de9200',
  },
  {
    id:6,
    colour:'#FEFEFE',
  },
  {
    id:7,
    colour:'#d20001',
  },
  {
    id:8,
    colour:'#0B66C3',
  },
  {
    id:9,
    colour:'#CFB47F',
  },
  {
    id:10,
    colour:'#808080',
  },
  {
    id:11,
    colour:'#ce6dfd',
  },
  {
    id:12,
    colour:'#0D0D0C',
  },
  {
    id:13,
    colour:'#909CA8',
  },
  {
    id:14,
    colour:'#7B0000',
  },
  {
    id:15,
    colour:'#D8AC91',
  }
]

export const CollectionData=[
  {
    id:1,
    col:'Featured'
  },
  {
    id:2,
    col:'New Arrivals'
  },
  {
    id:3,
    col:'Deal of the Day'
  },
  {
    id:4,
    col:'Best Seller'
  }
]

export const tagData=[
  {
    id:1,
    tag:'Trends',
  },
  {
    id:2,
    tag:'Bags',
  },
  {
    id:4,
    tag:'Shirts',
  },
  {
    id:5,
    tag:'Trousers',
  },
  {
    id:6,
    tag:'Flats',
  },
  {
    id:7,
    tag:'Jerkin',
  },
]