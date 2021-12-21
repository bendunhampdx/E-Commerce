const SHOP_DATA = {
  guitars: {
    id: 1,
    title: 'Guitars',
    routeName: 'guitars',
    items: [
      {
        id: 1,
        name: 'Fender Jaguar: Kurt Cobain Signature',
        imageUrl: 'https://m.media-amazon.com/images/I/91Tp2XM8quL._AC_SL1500_.jpg',
        price: 1200
      },
      {
        id: 2,
        name: 'Fender Stratocaster: Tom Morello Signature',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/q27vL2MUXz3YVAAHFdNYgF-970-80.jpg.webp',
        price: 1200
      },
      {
        id: 3,
        name: 'Fender Stratocaster: Limited Edition: Sonic Blue',
        imageUrl: 'https://davesguitar.com/wp-content/uploads/2020/11/116780.jpg',
        price: 1000
      },
      {
        id: 4,
        name: 'Fender Jag-Stang: Designed by: Kurt Cobain',
        imageUrl: 'https://www.fmicassets.com/Damroot/ZoomJpg/10001/0141030372_fen_ins_cbr_1_nr.jpg',
        price: 2200
      },
      {
        id: 5,
        name: 'Fender: Telecaster: Joe Strummer Signature',
        imageUrl: 'https://images.reverb.com/image/upload/s--3FuVmwUx--/f_auto,t_large/v1639766287/yy2mxhumzpysp7yitqqv.jpg',
        price: 1349
      },
      {
        id: 6,
        name: 'Fender: Joe Strummer Signature Camp-Fire Acoustic',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/Tj9wQNXMSZ6pQKeaHcEMJQ-970-80.jpg.webp',
        price: 599
      },
      {
        id: 7,
        name: 'Earnie Ball Music Man: St. Vincent Signature',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/slides-1/slide-76.jpg?1526921638',
        price: 2799
      },
      {
        id: 8,
        name: 'Gibson Custom 1957 Les Paul Custom',
        imageUrl: 'https://www.ginoguitars.com/libimg2/products/1100x734/1/87/Gibson-Custom-1957-Les-Paul-Custom-Reissue-Black-Beauty-2-Pickup-Extra-Heavy-Aged-289-VE_01.jpg',
        price: 8500
      },
      {
        id: 9,
        name: 'Gibson SG Standard',
        imageUrl: 'https://www.keymusic.com/contentassets/2094350680f949efae0e448c2e787904/gibson-sg.jpg',
        price: 1000
      }
    ]
  },
  pedals: {
    id: 2,
    title: 'Pedals',
    routeName: 'pedals',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  accessories: {
    id: 3,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  bass: {
    id: 4,
    title: 'Bass',
    routeName: 'bass',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  amps: {
    id: 5,
    title: 'Amps',
    routeName: 'amps',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 25
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;