/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import {ThemeProvider} from './src/theme/Theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Landing from './src/screens/Landing';
import {ChatGptProvider} from 'react-native-chatgpt';
import { AdConsentContext, AdEnabledContext } from './src/ads';
import { useAdConfig, useAdInitialize } from './src/ads';

const App = ()=> {
   let adconfig = useAdConfig();
   let init = useAdInitialize()

  // const adsEnabled = remoteConfig().getValue('ads_enabled').asBoolean();
  const adsEnabled = true;

  return (
    <ThemeProvider>
      <SafeAreaProvider>
      <AdEnabledContext.Provider value={adsEnabled}>
      <AdConsentContext.Provider value={adconfig && init}>
        <ChatGptProvider>
          <Landing />
        </ChatGptProvider>
        </AdConsentContext.Provider>
        </AdEnabledContext.Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
