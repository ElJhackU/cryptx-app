import { StyleSheet, Text } from 'react-native';

type BrandMarkProps = {
  name: string;
  accent: string;
  accentColor?: string;
};

export function BrandMark({
  name,
  accent,
  accentColor = '#694BFF',
}: BrandMarkProps) {
  return (
    <Text style={styles.brand}>
      {name}
      <Text style={{ color: accentColor }}>{accent}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  brand: {
    color: '#FFFFFF',
    fontSize: 60,
    fontWeight: '800',
    letterSpacing: -2,
  },
});