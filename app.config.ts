//@ts-nocheck
import { ExpoConfig, ConfigContext } from 'expo/config';

const text = {
  photosPermission: '이 앱을 사용하기 위해선 사진첩에 대한 권한이 필요합니다.',
};

const app = {
  name: 'Come On!',
  slug: 'come-on',
  version: '1.0.0',
  identifier: 'com.comeon.app',
  backgroundColor: '#FFFFFF',
  icon: './src/assets/images/icon.png',
  favicon: './src/assets/images/favicon.png',
  image: './src/assets/images/splash.png',
  foregroundImage: './src/assets/images/adaptive-icon.png',
  versionCode: 1,
};

const EAS = {
  dev: {
    owner: 'jeongbaebang_dev',
    projectId: 'f7044c0a-2efb-4e36-8189-d3f827a0e89e',
  },
  production: {
    owner: 'come-on-app',
    projectId: '390f7f40-6936-467d-901c-b3c6724e76f2',
  },
};

const { owner, projectId } = EAS[process.env.TYPE || 'dev'];

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  icon: app.icon,
  name: app.name,
  slug: app.slug,
  scheme: app.slug,
  version: app.version,
  orientation: 'portrait',
  userInterfaceStyle: 'light',
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  splash: {
    image: app.image,
    resizeMode: 'contain',
    backgroundColor: app.backgroundColor,
  },
  ios: {
    bundleIdentifier: app.identifier,
    buildNumber: app.version,
    supportsTablet: false,
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY_IOS,
    },
    googleServicesFile:
      process.env.GOOGLE_SERVICES_FILE_IOS || './GoogleService-Info.plist',
  },
  android: {
    package: app.identifier,
    versionCode: app.versionCode,
    adaptiveIcon: {
      foregroundImage: app.foregroundImage,
      backgroundColor: app.backgroundColor,
    },
    config: {
      googleMaps: { apiKey: process.env.GOOGLE_MAP_API_KEY_ANDROID },
    },
    googleServicesFile:
      process.env.GOOGLE_SERVICES_FILE_ANDROID || './google-services.json',
  },
  plugins: [
    '@react-native-firebase/app',
    '@react-native-firebase/perf',
    '@react-native-firebase/crashlytics',
    './react-native-maps-plugin',
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
        },
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission: text.photosPermission,
      },
    ],
    'expo-apple-authentication',
  ],
  updates: {
    url: `https://u.expo.dev/${projectId}`,
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  originalFullName: `@${owner}/${app.slug}`,
  owner,
  extra: {
    eas: {
      projectId,
    },
  },
});
