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
    android: 'intent://www.instagram.com/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.instagram.android;end',
  },
  storeUrl: {
    ios: 'itms-apps://itunes.apple.com/app/instagram/id389801252',
    android: 'market://details?id=com.instagram.android',
  },
}

export default APP_CONFIG
