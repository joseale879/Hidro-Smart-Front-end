import { View, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text.js';
import { ThemedView } from './themed-view.js';

import { Spacing } from '../../shared/theme/index.js';

export function HintRow({ title = 'Try editing', hint = 'app/index.jsx' }) {
  return (
    <View style={styles.stepRow}>
      <ThemedText type="small">{title}</ThemedText>
      <ThemedView type="backgroundSelected" style={styles.codeSnippet}>
        <ThemedText themeColor="textSecondary">{hint}</ThemedText>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeSnippet: {
    borderRadius: Spacing.two,
    paddingVertical: Spacing.half,
    paddingHorizontal: Spacing.two,
  },
});
