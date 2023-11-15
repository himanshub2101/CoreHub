import React, { useEffect, useState } from 'react';
import { SignUpUser } from './src';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { styles } from './App';

export default function myApp() {
  const [showlogo, setShowLogo] = useState(true);

  useEffect(() => {
    const setTimeOut = setTimeout(() => {
      setShowLogo(false);
    }, 5000);
    return () => clearTimeout(setTimeOut);
  }, []);

  return (
    <View style={styles.container}>
      {showlogo && (
        <Animatable.Image
          animation="rotate"
          iterationCount="infinite"
          direction="normal"
          duration={2000}
          source={require('./assets/Coredao_logo.svg.png')}
          style={styles.logo} />
      )}
      {!showlogo && <SignUpUser />}
      {!showlogo && <loginUser />}
    </View>
  );
}
