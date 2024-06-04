export const ROUTES = Object.freeze({
  MAIN: 'Main',
  OUR_COFFEE: 'OurCoffee',
  COFFEE: 'Coffee',
  GOODS: 'Goods',
  PRODUCT: 'Product',
  CONTACTS: 'Contacts',
  THANK_YOU: 'ThankYou'
})

export const LINKS = Object.freeze({
  header: {
    id: 0,
    link: ROUTES.MAIN,
  },

  footer: {
    id: 0,
    link: ROUTES.MAIN,
  },

  other: [
    {
      id: 1,
      text: 'Our coffee',
      link: ROUTES.OUR_COFFEE,
    },
    {
      id: 2,
      text: 'For your pleasure',
      link: ROUTES.GOODS,
    },
    {
      id: 3,
      text: 'Contact us',
      link: ROUTES.CONTACTS,
    },
  ],
})
