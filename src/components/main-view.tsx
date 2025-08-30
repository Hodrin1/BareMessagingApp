import { PropsWithChildren, useEffect } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme';
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';
import {
  useSharedValue,
  useDerivedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export const MainView = ({ children }: PropsWithChildren) => {
  const { colors } = useTheme();
  const { width, height } = useWindowDimensions();

  const topColor = useSharedValue(colors.gradientStart);
  const bottomColor = useSharedValue(colors.gradientStart);

  const animatedColors = useDerivedValue(() => {
    return [topColor.value, bottomColor.value];
  });

  useEffect(() => {
    topColor.value = withTiming(colors.gradientTop, {
      duration: 1000,
      easing: Easing.inOut(Easing.quad),
    });

    bottomColor.value = withTiming(colors.gradientBottom, {
      duration: 1000,
      easing: Easing.inOut(Easing.quad),
    });
  });

  return (
    <>
      <Canvas style={styles.container}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={animatedColors}
          />
        </Rect>
      </Canvas>

      <SafeAreaView style={styles.inner}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
