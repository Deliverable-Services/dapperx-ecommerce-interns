import { Truck, Receipt, Headset, WalletCards, Home, CircleUserRound, Rss, Handshake, BaggageClaim, ArrowUpNarrowWide, Heart, Dot, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export const HERO_SECTION_PRODUCTS = [
  {
    id: 1,
    imgUrl: '/nike2.jpg',
    BrandName: 'Nike',
    price: 2500,
    name: 'Nike Running Shoes'
  },
  {
    id: 2,
    imgUrl: '/apple.jpg',
    BrandName: 'Apple',
    price: 30000,
    name: 'Greed Smart Watch'
  }
];

export const SERVICE_DETAILS = [
  {
    id: 1,
    iconName: <Truck className='sm:size-12' />,
    title: 'Free Shipping',
    details: 'Avove all Orders over ₹ 200'
  },
  {
    id: 2,
    iconName: <Receipt className='sm:size-12' />,
    title: 'Money Guarantee',
    details: '30 Days For Exchange'
  },
  {
    id: 3,
    iconName: <Headset className='sm:size-12' />,
    title: 'Online Support',
    details: '24/7 customer Care'
  },
  {
    id: 4,
    iconName: <WalletCards className='sm:size-12' />,
    title: 'Flexible payment',
    details: 'Pay with multiple credit card'
  }
];

export const CATEGORIES_DETAILS = [
  {
    id: 1,
    category: 'Men\'s',
    buttonText: 'Shop Now',
    text: 'Collection',
    offer: 'sale 30% Off',
    bgimage: '/men suit.jpg'
  },
  {
    id: 3,
    category: 'Women\'s',
    buttonText: 'Shop Now',
    text: 'Collection',
    offer: 'Limited Offers',
    bgimage: '/girl-jacket.jpg'
  },
  {
    id: 2,
    category: 'Accessories',
    buttonText: 'Shop Now',
    text: 'Branded Accessories',
    bgimage: '/accesserios-image.webp'
  },
  {
    id: 4,
    category: 'Shoes',
    buttonText: 'Shop Now',
    text: 'Branded Shoes',
    bgimage: '/mens-shoes.jpg'
  },
];

export const PRODUCTS_CATEGORIES = [
  {
    id: 1,
    imageUrl: '/carousel/accessory-carousel.avif',
    category: 'Accessories',
  },
  {
    id: 2,
    imageUrl: '/carousel/belt-carousel.avif',
    category: 'Belt',
  },
  {
    id: 3,
    imageUrl: '/carousel/shirt-carousel.avif',
    category: 'Active',
  },
  {
    id: 4,
    imageUrl: '/carousel/women-carousel.avif',
    category: 'Women',
  },
  {
    id: 5,
    imageUrl: '/carousel/watch-carousel.avif',
    category: 'Watch',
  },
  {
    id: 6,
    imageUrl: '/carousel/mens-carousel.avif',
    category: 'Men',
  }
];


export const SIDEBAR_LINKS = [
  {
    id: 1,
    title: 'Home',
    icon: <Home className='size-4' />,
    path: '/',
  },
  {
    id: 2,
    title: 'My Profile',
    icon: <CircleUserRound className='size-4' />,
    path: '/profile',
  },
  {
    id: 3,
    title: 'Cart',
    icon: <BaggageClaim className='size-4' />,
    path: '/cart',
  },
  {
    id: 4,
    title: 'My Wishlish',
    icon: <Heart className='size-4' />,
    path: '/liked-products',
  },
  {
    id: 5,
    title: 'Collections',
    icon: <ArrowUpNarrowWide className='size-4' />,
    path: '/collection',
  },
  {
    id: 6,
    title: 'Deals',
    icon: <Handshake className='size-4' />,
    path: '/deals',
  },
  {
    id: 7,
    title: 'Blogs',
    icon: <Rss className='size-4' />,
    path: '/blogs',
  }
];

export const MARQUEE_DETAILS = [

  {
    id: 1,
    title: 'SHORTS AND TRACKSUITS',
    icon: <Dot size={56} strokeWidth={3} />
  },
  {
    id: 2,
    title: 'SUNGLASSES',
    icon: <Dot size={56} strokeWidth={3} />
  },
  {
    id: 3,
    title: '30% OFF ON FRAGRANCES',
    icon: <Dot size={56} strokeWidth={3} />
  },
  {
    id: 4,
    title: 'FORMAL WEARS',
    icon: <Dot size={56} strokeWidth={3} />
  }

]

export const SLIDER_CARD_DETAILS = [
  {
    id: 1,
    imageUrl: '/deals/combo-tshirt.avif',
    text: 'Combo T-Shirt',
    price: 750,
    btnIcon: '+',
  },
  {
    id: 2,
    imageUrl: '/deals/girl-tshirt.avif',
    text: 'Premium Tshirt',
    price: 1000,
    btnIcon: '+',
  },
  {
    id: 3,
    imageUrl: '/deals/jacket.avif',
    text: 'Premium Jacket',
    price: 1500,
    btnIcon: '+',
  },
  {
    id: 4,
    imageUrl: '/deals/combo-tshirt.avif',
    text: 'Combo T-Shirt',
    price: 750,
    btnIcon: '+',
  },
  {
    id: 5,
    imageUrl: '/deals/girl-tshirt.avif',
    text: 'Premium Tshirt',
    price: 1000,
    btnIcon: '+',
  },
  {
    id: 6,
    imageUrl: '/deals/jacket.avif',
    text: 'Premium Jacket',
    price: 1500,
    btnIcon: '+',
  }
];

export const BLAZER_IMAGES = [
  {
    id: 1,
    imageUrl: '/carousel/coat1.avif',
  },
  {
    id: 2,
    imageUrl: '/carousel/coat2.avif',
  },
  {
    id: 3,
    imageUrl: '/carousel/coat3.avif',
  },
  {
    id: 4,
    imageUrl: '/carousel/coat3.avif',
  },
  {
    id: 5,
    imageUrl: '/carousel/coat2.avif',
  },
  {
    id: 6,
    imageUrl: '/carousel/coat1.avif',
  },
  {
    id: 7,
    imageUrl: '/carousel/coat2.avif',
  }
]
export const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: '40%OFF GOING ON',
    icon: <Dot size={56} strokeWidth={3} />
  },
  {
    id: 2,
    title: 'OCCASIONAL KING',
    icon: <Dot size={56} strokeWidth={3} />
  },
  {
    id: 3,
    title: 'ONLY MAKE SENSE',
    icon: <Dot size={56} strokeWidth={3} />
  }
]

export const REVIEWS_SECTION_DETAILS = [
  {
    id: 1,
    name: 'Sahil Gupta',
    imgUrl: '/carousel/mens-carousel.avif',
    review: 'The dress i bought from DapperX was perfect! superb quality and fit. Received countless compliments.Definatly shopping here again!\''
  },
  {
    id: 2,
    name: 'Anuj Tiwari',
    imgUrl: '/girl-jacket.jpg',
    review: 'DapperX never disappoints! impressive veriety and sizes. Fantastic customer service. Highly recommended!\''
  },
  {
    id: 3,
    name: 'Aniket Gupta',
    imgUrl: '/men suit.jpg',
    review: 'DapperX offers trendy styles at resonable prices. impressed with quality and value. A must visit for fashion forward shoppers!\''
  },

]

export const FOOTER_LINKS = [

  {
    title: 'About',
    links: [
      {
        id: 1,
        sublink: 'Our Story'
      },
      {
        id: 2,
        sublink: 'Factories'
      },
      {
        id: 3,
        sublink: 'Contact us'
      },
      {
        id: 4,
        sublink: 'Help and Advices'
      },
      {
        id: 5,
        sublink: 'Refund Policy'
      },

    ]
  },
  {
    title: 'Information',
    links: [
      {
        id: 1,
        sublink: 'Delivery information'
      },
      {
        id: 2,
        sublink: 'Privacy and policy'
      },
      {
        id: 3,
        sublink: 'Terms of Use'
      },

    ]
  },
  {

    title: 'Category',
    links: [
      {
        id: 1,
        sublink: 'New Arrivals'
      },
      {
        id: 2,
        sublink: 'Men '
      },
      {
        id: 3,
        sublink: 'Women'
      },
      {
        id: 4,
        sublink: 'Shoes'
      },
      {
        id: 5,
        sublink: 'Luxury Attire'
      },
      {
        id: 6,
        sublink: 'Kids'
      },
      {
        id: 7,
        sublink: 'Accessories'
      },

    ]
  },
  {
    title: 'Contact Us',
    links: [
      {
        id: 1,
        sublink: 'Dapperx@gmail.com'
      },
      {
        id: 2,
        sublink: '+91 9486512354'
      }
    ]
  }
]

export const SOCIAL_CONTACT_DETAILS = [
  {
    id: 1,
    icon: <Facebook />,
  },
  {
    id: 2,
    icon: <Instagram />,
  },
  {
    id: 3,
    icon: <Linkedin />,
  },
  {
    id: 4,
    icon: <Twitter />,
  },
]

export const GRID_IMAGES = [
  {
    id: 1,
    bgimage: '/girl-jacket.jpg'
  },
  {
    id: 2,

    bgimage: '/accesserios-image.webp'
  },
  {
    id: 3,

    bgimage: '/mens-shoes.jpg'
  },
  {
    id: 4,

    bgimage: '/girl-jacket.jpg'
  },
  {
    id: 5,

    bgimage: '/accesserios-image.webp'
  },
  {
    id: 6,

    bgimage: '/mens-shoes.jpg'
  },
  {
    id: 7,
    bgimage: '/mens-shoes.jpg'
  }
]

export const Fav_IMAGES = [
  {
    id: 1,
    imgUrl: '/ajio.avif'
  },
  {
    id: 2,
    imgUrl: '/ajio1.png'
  },
  {
    id: 3,
    imgUrl: '/ajio2.png'
  },
  {
    id: 4,
    imgUrl: '/ajio.avif'
  },
  {
    id: 5,
    imgUrl: '/ajio1.png'
  },
  {
    id: 6,
    imgUrl: '/ajio2.png'
  },

]