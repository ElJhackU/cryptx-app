import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { WelcomePanel } from './src/components/organisms/WelcomePanel';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <StatusBar style="light" />

        <ScrollView contentContainerStyle={styles.content}>
          <WelcomePanel
            brand="Crypt"
            accent="X"
            title={'Jump start your\ncrypto portfolio'}
            description={'Take your investment portfolio\nto next level'}
            artwork={
              <Image
                source={require('./assets/crypto-art.png')}
                style={styles.image}
                resizeMode="contain"
                accessible={false}
              />
            }
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#080808',
  },
  content: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 410,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 32,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});