interface AppConfig {
  name: string
  icon: string
  deepLink: {
    ios: string
    android: string
  }
  storeUrl: {
    ios: string
    android: string
  }
}

const APP_CONFIG: AppConfig = {
  name: 'Instagram',
  icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png',
  deepLink: {
    ios: 'instagram://',
    android: 'intent://www.instagram.com/#Intent;package=com.instagram.android;scheme=https;end',
  },
  storeUrl: {
    ios: 'https://apps.apple.com/app/instagram/id389801252',
    android: 'https://play.google.com/store/apps/details?id=com.instagram.android',
  },
}

export default APP_CONFIG
