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

  export const category1 = [
    {
        id: 1,
        category : "Men's",
        buttonText : "Shop Now",
        text:"Collection",
        offer:"sale 30% Off",
        bgimage:"/men suit.jpg"
    },
    {
        id: 2,
        category: "Women's",
        buttonText:"Shop Now",
        text:"Collection",
        offer:"Limited Offers",
        bgimage:"/girl-jacket.jpg"
    },
    
  ];
  export const category2 = [
    {
      id:1,
      category : "Accessories",
      buttonText:"Shop Now",
      text:"Branded Accessories",
      bgimage:"/accesserios-image.webp"
  },
  {
      id: 2,
      category : "Shoes",
      buttonText: "Shop Now",
      text:"Branded Shoes",
      bgimage:"/mens-shoes.jpg"
  }
  ];

  export const crauselData = [
    {
      id:1,
      imageUrl: '/crausel/accessory-crausel.avif',
      category: "Accessories",
    },
    {
      id:2,
      imageUrl: '/crausel/belt-crausel.avif',
      category: "Belt",
    },
    {
      id:3,
      imageUrl: '/crausel/crausel-shirt.avif',
      category: "Active",
    },
    {
      id:4,
      imageUrl: '/crausel/women-crausel.avif',
      category: "Women",
    },
    {
      id:5,
      imageUrl: '/crausel/watch-crausel.avif',
      category: "Watch",
    },
    {
      id:6,
      imageUrl: '/crausel/mens-crausel.avif',
      category: "Men",
    }
  ];


  export const dealsData = [
    {
      id:1,
      imageUrl: '/deals/combo-tshirt.avif',
      name: "Combo T-Shirt",
      price: 750,
      btnIcon: "+",
    },
    {
      id:2,
      imageUrl: '/deals/girl-tshirt.avif',
      name: "Premium Tshirt",
      price: 1000,
      btnIcon: "+",
    },
    {
      id:3,
      imageUrl: '/deals/jacket.avif',
      name:"Premium Jacket",
      price: 1500,
      btnIcon: "+",
    }
  ];

