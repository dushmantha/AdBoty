import React, {useEffect, useState, useContext} from 'react';
import {
  BannerAd,
  RewardedAd,
  BannerAdSize,
  TestIds,
  AdEventType,
  AdsConsentStatus,
} from 'react-native-google-mobile-ads';
import {Platform, TouchableOpacity} from 'react-native';
import { Box} from '../theme/Theme';
import {AdConsentContext, AdEnabledContext} from './';

import { useInterstitialAd } from 'react-native-google-mobile-ads';

const adBannerUnitId = __DEV__
  ? TestIds.BANNER
  : Platform.OS === 'android'
  ? 'ca-app-pub-7757836269117697/1169954122'
  : 'ca-app-pub-7757836269117697/3517464603';

const adRewardedUnitId = __DEV__
  ? TestIds.REWARDED
  : Platform.OS === 'android'
  ? 'ca-app-pub-7757836269117697/1169954122'
  : 'ca-app-pub-7757836269117697/3517464603';

const Banner = (size:  BannerAdSize) => {

  const enabled = useContext(AdEnabledContext);
  console.log('When an ad has finished loading', adRewardedUnitId);
  return (
    <Box>
      {enabled && (
        <BannerAd
          unitId={adBannerUnitId}
          size={size}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          onAdLoaded={() => {
            console.log('When an ad has finished loading');
            /**
             * When an ad has finished loading..
             */
          }}
          onAdFailedToLoad={(err) => {
            console.log(
              'When an ad has failed to load. Callback contains an Error',
              err,
            );
            /**
             * The ad is now visible to the user.
             */
          }}
          onAdOpened={() => {}}
          onAdClosed={() => {}}
        />
      )}
    </Box>
  );
};

const Rewarded = () => {
  const [loaded, setLoaded] = useState(false);
  const rewarded = RewardedAd.createForAdRequest(adRewardedUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });

  useEffect(() => {
    const unsubscribe = rewarded.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        rewarded.show();
      }}
    />
  );
};



export {Banner, Rewarded};