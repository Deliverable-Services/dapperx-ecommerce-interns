import { Truck,Receipt, Headset, WalletCards, Home,CircleUserRound ,Rss, Handshake,BaggageClaim, ArrowUpNarrowWide,Heart   } from "lucide-react";
export const HERO_SECTION_PRODUCTS = [
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

export const SERVICE_DETAILS = [
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

  export const PRODUCTS_CATEGORIES = [
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


  export const DEALS = [
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
  export const SIDEBAR_LINKS = [
    {
      id:1,
      title:'Home',
      icon: <Home  className='size-4'/>,
      path: '/',
    },
    {
      id:2,
      title:'My Profile',
      icon: <CircleUserRound  className='size-4'/>,
      path: '/profile',
    },
    {
      id:3,
      title:'Cart',
      icon: <BaggageClaim  className='size-4'/>,
      path: '/cart',
    },
    {
      id:4,
      title:'My Wishlish',
      icon: <Heart  className='size-4'/>,
      path: '/liked-products',
    },
    {
      id:5,
      title:'Collections',
      icon: <ArrowUpNarrowWide  className='size-4'/>,
      path: '/collection',
    },
    {
      id:6,
      title:'Deals',
      icon: <Handshake  className='size-4'/>,
      path: '/deals',
    },
    {
      id:7,
      title:'Blogs',
      icon: <Rss  className='size-4'/>,
      path: '/blogs',
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

  export const ImageData = [
    {
      id:1,
      url:'/model.avif',
    },
    {
      id:2,
      url:'/btshirt.jpg'
    },
    {
      id:3,
      url:'/vertical.avif'
    },
    {
      id:4,
      url:'/shirtb.jpg'
    }
  ]