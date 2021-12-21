const INITIAL_STATE = {
  sections: [
    {
      title: 'guitars',
      imageUrl: 'https://m.media-amazon.com/images/I/91Tp2XM8quL._AC_SL1500_.jpg',
      id: 1,
      linkUrl: 'shop/guitars'
    },
    {
      title: 'pedals',
      imageUrl: 'https://blog.truefire.com/wp-content/uploads/2015/10/guitar-effects-pedals-1024x629.jpg',
      id: 2,
      linkUrl: 'shop/pedals'
    },
    {
      title: 'accessories',
      imageUrl: 'https://img.kytary.com/eshop_ie/velky_v2/na/637393441813330000/1929a8ee/64793993/perris-leathers-electric-guitar-accessories-pack.jpg',
      id: 3,
      linkUrl: 'shop/accessories'
    },
    {
      title: 'bass',
      imageUrl: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0Mjg5NzA5Nzg5MzU3OTQ4/fender-precision-bass-vs-jazz-bass-review.webp',
      size: 'large',
      id: 4,
      linkUrl: 'shop/bass'
    },
    {
      title: 'amps',
      imageUrl: 'https://m.media-amazon.com/images/I/61e7Nj6YR1L._AC_SL1200_.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/amps'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;