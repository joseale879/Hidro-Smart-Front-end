import { View } from 'react-native';

import { useTheme } from '../hooks/index.js';

export function ThemedView({ style, lightColor, darkColor, type, ...otherProps }) {
  const theme = useTheme();

  return <View style={[{ backgroundColor: theme[type ?? 'background'] }, style]} {...otherProps} />;
}
