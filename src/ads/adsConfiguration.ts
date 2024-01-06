import {useEffect, useState} from 'react';
import mobileAds, {
  MaxAdContentRating,
  AdapterStatus
} from 'react-native-google-mobile-ads';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';


const useAdConfig = () => {
  const [adConfig, setAdConfig] = useState(false);
  useEffect(() => {
    const getStatus = async () => {
      try {
      await mobileAds()
        .setRequestConfiguration({
          // Update all future requests suitable for parental guidance
          maxAdContentRating: MaxAdContentRating.PG,
      
          // Indicates that you want your content treated as child-directed for purposes of COPPA.
          tagForChildDirectedTreatment: true,
      
          // Indicates that you want the ad request to be handled in a
          // manner suitable for users under the age of consent.
          tagForUnderAgeOfConsent: true,
      
          // An array of test device IDs to allow.
          testDeviceIdentifiers: ['EMULATOR'],
        })
        setAdConfig(true)
        
      } catch (err) {
        console.error(err);
      }
    };
    try {
    getStatus();
     
    } catch (error) {
      console.error(error);
    }
  }, [adConfig]);
  return adConfig;
};

const useAdInitialize = () => {
    const [adInitialize, setAdInitialize] = useState(false);
  useEffect(() => {
    const getStatus = async () => {
      try {
        const result = await check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
        if (result === RESULTS.DENIED) {
          // The permission has not been requested, so request it.
          await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
        }
        
         await mobileAds().initialize();
         setAdInitialize(true)
      } catch (err) {
        console.error(err);
      }
    };
    try {
    getStatus();
     
    } catch (error) {
      console.error(error);
    }
  }, [adInitialize]);
  return adInitialize;
}

export {useAdConfig, useAdInitialize};
