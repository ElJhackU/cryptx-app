import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { WelcomePage } from './src/pages/WelcomePage';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <WelcomePage />
    </SafeAreaProvider>
  );
}