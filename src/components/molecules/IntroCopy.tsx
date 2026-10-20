import { StyleSheet, Text, View } from 'react-native';

type IntroCopyProps = {
  title: string;
  description: string;
};

export function IntroCopy({
  title,
  description,
}: IntroCopyProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    lineHeight: 42,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 22,
  },
});