import coffeeBanner from '@/assets/img/coffee-bg.jpg';
import goodsBanner from '@/assets/img/goods-bg.jpg';
import contactsBanner from '@/assets/img/contacts-bg.jpg';

import coffeeAboutPhoto from '@/assets/img/coffee-girl.jpg';
import goodsAboutPhoto from '@/assets/img/coffee-goods.jpg';

export const bannersAssets = Object.freeze({
  coffee: coffeeBanner,
  goods: goodsBanner,
  contacts: contactsBanner,
});

export const aboutPhotosAssets = Object.freeze({
  coffee: {
    imgUrl: coffeeAboutPhoto,
    imgAlt: 'girl with cup of coffee'
  },
  goods: {
    imgUrl: goodsAboutPhoto,
    imgAlt: 'cup of coffee',
  }
})
