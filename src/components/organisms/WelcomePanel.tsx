import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { BrandMark } from '../atoms/BrandMark';
import { IntroCopy } from '../molecules/IntroCopy';

type WelcomePanelProps = {
  brand: string;
  accent: string;
  title: string;
  description: string;
  artwork: ReactNode;
  accentColor?: string;
};

export function WelcomePanel({
  brand,
  accent,
  title,
  description,
  artwork,
  accentColor = '#694BFF',
}: WelcomePanelProps) {
  return (
    <View style={styles.container}>
      <BrandMark
        name={brand}
        accent={accent}
        accentColor={accentColor}
      />

      <View style={styles.artwork}>
        {artwork}
      </View>

      <IntroCopy
        title={title}
        description={description}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 26,
  },
  artwork: {
    width: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});