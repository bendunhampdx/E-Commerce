const SHOP_DATA = {
  guitars: {
    id: 1,
    title: 'Guitars',
    routeName: 'guitars',
    items: [
      {
        id: 1,
        name: 'Fender Jaguar: Kurt Cobain Signature',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Kurt-Cobain-Jaguar-NOS-Electric-Guitar-3-Color-Sunburst/J05499000001000-00-500x500.jpg',
        price: 1200
      },
      {
        id: 2,
        name: 'Fender Stratocaster: Tom Morello Signature',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Tom-Morello-Soul-Power-Stratocaster-Electric-Guitar-Black/L72232000001000-00-500x500.jpg',
        price: 1200
      },
      {
        id: 3,
        name: 'Fender Stratocaster: Limited Edition: Sonic Blue',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Yngwie-Malmsteen-Signature-Series-Stratocaster-NOS-Maple-Fingerboard-Electric-Guitar-Sonic-Blue/L48913000002000-00-500x500.jpg',
        price: 1000
      },
      {
        id: 4,
        name: 'Fender Jag-Stang: Designed by: Kurt Cobain',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Kurt-Cobain-Jag-Stang-Rosewood-Fingerboard-Electric-Guitar-Sonic-Blue/L84251000002000-00-500x500.jpg',
        price: 1200
      },
      {
        id: 5,
        name: 'Fender: Telecaster: Joe Strummer Signature',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Limited-Edition-Joe-Strummer-Esquire-Relic-Rosewood-Fingerboard-Electric-Guitar-Olympic-White/L85182000001000-00-500x500.jpg',
        price: 15000
      },
      {
        id: 6,
        name: 'Fender: Joe Strummer Signature Camp-Fire Acoustic',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Joe-Strummer-Campfire-Acoustic-Electric-Guitar-Matte-Black/L75969000001000-00-500x500.jpg',
        price: 599
      },
      {
        id: 7,
        name: 'Ernie Ball Music Man: St. Vincent Signature',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/St.-Vincent-HH-Rosewood-Fingerboard-Electric-Guitar-Blue-Dawn/L21272000001000-00-500x500.jpg',
        price: 2799
      },
      {
        id: 8,
        name: 'Gibson Custom 1957 Les Paul Custom',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Murphy-Lab-1957-Les-Paul-Custom-Reissue-2-Pickup-Ultra-Light-Aged-Electric-Gutiar-Ebony/L80295000001000-00-500x500.jpg',
        price: 8500
      },
      {
        id: 9,
        name: 'Gibson SG Standard',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/SG-Standard-Dark-Limited-Edition-Electric-Guitar-Cherry/L76594000001000-00-500x500.jpg',
        price: 1600
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
        name: 'Dunlop JH1D: jimi Hendrix Signature Wah',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/JH1D-Jimi-Hendrix-Signature-Wah-Pedal/151067000000000-00-500x500.jpg',
        price: 139
      },
      {
        id: 11,
        name: 'BOSS TU-3: Chromatic Tuner',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/712517000000000-01-500x500.jpg',
        price: 105
      },
      {
        id: 12,
        name: 'BOSS DD-8: Delay',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/DD-8-Digital-Delay-Effects-Pedal/L70091000000000-00-500x500.jpg',
        price: 169
      },
      {
        id: 13,
        name: 'Fulltone: OCD Overdrive',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0758/4003/products/fulltone_ocd_v2_pedal_1_2048x2048.jpg?v=1568138822',
        price: 160
      },
      {
        id: 14,
        name: 'BOSS: DS-2: Turbo Distortion',
        imageUrl: 'https://www.proaudiostar.com/pub/media/catalog/product/cache/fb4090e927ad603e2ac2ea122a8aba57/6/8/68cea334c87878a986e74500d3bb88ede17a9958_ds2.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'BOSS: RC-3: Loop Station',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0300/4173/products/618BOSSRC3_1_480x288.jpg?v=1571708445',
        price: 160
      },
      {
        id: 16,
        name: 'Death By Audio: Interstellar Overdriver',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0788/1755/products/a71d36b5-dd1a-40d1-a49f-519d23a8301e.jpg?v=1625698542',
        price: 190
      },
      {
        id: 17,
        name: 'BOSS: RV-6: Reverb',
        imageUrl: 'https://images.reverb.com/image/upload/s--9o7IEkqv--/t_card-square/v1440811834/rzrizxr5fcxrysfwutsp.jpg',
        price: 160
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
        name: 'Martin Extendable Strap',
        imageUrl: 'https://static.keymusic.com/products/243039/340/martin-extendable-slim-style-leather-guitar-strap-black.jpg',
        price: 45
      },
      {
        id: 19,
        name: 'Fender Pick Assortment',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/351-Premium-Celluloid-Guitar-Picks-12-Pack-Green-Moto-Medium/110556000003118-00-500x500.jpg',
        price: 15
      },
      {
        id: 20,
        name: 'Guitar Strings: DAddario 10-46',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/EXL110-Nickel-Light-Electric-Guitar-Strings-3-Pack/H71088000000000-00-500x500.jpg',
        price: 10
      },
      {
        id: 21,
        name: 'Dunlop Guitar Cleaning kit',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Formula-65-Guitar-Tech-Kit/425278000000000-00-500x500.jpg',
        price: 15
      },
      {
        id: 22,
        name: 'Audio Cable 1/4"',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Advantage-Instrument-Cable-Angled-Straight-5-ft.-Black/J39079000004001-00-500x500.jpg',
        price: 15
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
        name: 'Fender: Player Precision Bass',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Player-Precision-Bass-Maple-Fingerboard-Limited-Edition-Ocean-Turquoise/L57533000001000-00-500x500.jpg',
        price: 824
      },
      {
        id: 24,
        name: 'Fender: Geddy Lee Signature Bass',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Geddy-Lee-Signature-Jazz-Bass-3-Color-Sunburst/H89886000002000-00-500x500.jpg',
        price: 1200
      },
      {
        id: 25,
        name: 'Fender: 60th Anniversary Pau Ferro Bass',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/60th-Anniversary-Road-Worn-60s-Jazz-Bass-Pau-Ferro-Fingerboard-Olympic-White/L72266000003000-00-500x500.jpg',
        price: 1300
      },
      {
        id: 26,
        name: 'Hofner: Ignition Bass',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/L81864000001000-04-500x500.jpg',
        price: 399
      },
      {
        id: 27,
        name: 'Rickenbacker 4003 Bass Mapleglo',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/4003-Bass-Mapleglo/513600000204000-00-500x500.jpg',
        price: 800
      },
      {
        id: 28,
        name: 'Gretsch G2220 Bass',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/G2220-Electromatic-Junior-Jet-Bass-II-Short-Scale-Bass-Black/L13409000004000-00-500x500.jpg',
        price: 300
      },
      {
        id: 29,
        name: 'Epiphone Jack Casady Bass',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Jack-Casady-Bass-Sparkling-Burgundy/518245000001000-00-500x500.jpg',
        price: 800
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
        name: 'Fender: Mustang Micro Headphone Amp',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Mustang-Micro-Guitar-Headphone-Amp-Black/L81703000001000-00-500x500.jpg',
        price: 120
      },
      {
        id: 31,
        name: 'Fender: Tone Mster Twin Reverb',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Tone-Master-Twin-Reverb-200W-2x12-Guitar-Combo-Amp-Black/L63371000001000-00-500x500.jpg',
        price: 1000
      },
      {
        id: 32,
        name: 'Marshall DSL100HR 100W Tube Guitar Amp Head',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/DSL100HR-100W-Tube-Guitar-Amp-Head/K64627000000000-00-500x500.jpg',
        price: 1000
      },
      {
        id: 33,
        name: 'Marshall DSL40CR 40W 1X12 Tube Guitar Combo Amp ',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/DSL40CR-40W-1x12-Tube-Guitar-Combo-Amp/K64638000000000-00-500x500.jpg',
        price: 850
      },
      {
        id: 34,
        name: 'Fender: Rumble 500 2X10 500W Bass Combo Amp',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/Rumble-500-2x10-500W-Bass-Combo-Amp/J06160000000000-00-500x500.jpg',
        price: 650
      },
      {
        id: 35,
        name: 'Fender 1957 Custom Twin 40W 2X12 Tube Guitar Amp',
        imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/57-Custom-Twin-40W-2x12-Tube-Guitar-Amp-Lacquered-Tweed/J41134000001000-00-500x500.jpg',
        price: 3300
      }
    ]
  }
};

export default SHOP_DATA;