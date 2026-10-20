import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ActionButton } from './src/components/atoms/ActionButton';

export default function App() {
  const [message, setMessage] = useState('Presiona un botón');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Prueba del botón reutilizable
        </Text>

        <ActionButton
          label="Get Started"
          onPress={() => setMessage('Presionaste Get Started')}
        />

        <ActionButton
          label="Guardar"
          color="#237FBC"
          onPress={() => setMessage('Presionaste Guardar')}
        />

        <ActionButton
          label="No disponible"
          disabled
          onPress={() => setMessage('Esto no debe ejecutarse')}
        />

        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    justifyContent: 'center',
    padding: 24,
  },
  content: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    gap: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  message: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});