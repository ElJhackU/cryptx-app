import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type WelcomeLayoutProps = {
  children: ReactNode;
  action: ReactNode;
};

export function WelcomeLayout({
  children,
  action,
}: WelcomeLayoutProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        {children}

        <View style={styles.action}>
          {action}
        </View>
      </ScrollView>
    </SafeAreaView>
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
    paddingTop: 24,
    paddingBottom: 24,
  },
  action: {
    marginTop: 'auto',
    paddingTop: 36,
  },
});