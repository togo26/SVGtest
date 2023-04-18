/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import SvgWithBased64 from './assets/svg_with_based_64.svg';
import SvgWithShadow from './assets/svg_with_shadow.svg';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SvgWithBased64 width={300} height={300} />
      <SvgWithShadow width={300} height={300} />
    </SafeAreaView>
  );
}

export default App;
