import { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';

import { ActionButton } from '../components/atoms/ActionButton';
import { WelcomePanel } from '../components/organisms/WelcomePanel';
import { WelcomeLayout } from '../components/templates/WelcomeLayout';

export function WelcomePage() {
  const [started, setStarted] = useState(false);

  return (
    <WelcomeLayout
      action={
        <>
          {started && (
            <Text
              accessibilityLiveRegion="polite"
              style={styles.message}
            >
              ¡Bienvenido a CryptX!
            </Text>
          )}

          <ActionButton
            label="Get Started"
            onPress={() => setStarted(true)}
            color="#694BFF"
          />
        </>
      }
    >
      <WelcomePanel
        brand="Crypt"
        accent="X"
        title={'Jump start your\ncrypto portfolio'}
        description={
          'Take your investment portfolio\nto next level'
        }
        artwork={
          <Image
            source={require('../../assets/crypto-art.png')}
            style={styles.image}
            resizeMode="contain"
            accessible={false}
          />
        }
      />
    </WelcomeLayout>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  message: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});