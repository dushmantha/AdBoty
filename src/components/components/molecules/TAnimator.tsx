import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Animated, StyleProp, ViewStyle } from 'react-native';

interface TAnimatorProps {
  content: string;
  duration: number;
  onFinish?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
}

const TAnimator: React.FC<TAnimatorProps> = (props) => {
  const animatedValues = useRef<Animated.Value[]>([]);
  const textArray = props.content.trim().split(' ');

  textArray.forEach((_, i) => {
    animatedValues.current[i] = new Animated.Value(0);
  });

  const animated = (toValue = 1) => {
    const animations = textArray.map((_, i) => {
      return Animated.timing(animatedValues.current[i], {
        toValue,
        duration: props.duration,
        useNativeDriver: true,
      });
    });

    Animated.stagger(props.duration / 5, animations).start(() => {
      if (props.onFinish) {
        props.onFinish();
      }
    });
  };

  useEffect(() => {
    animated();
  });

  return (
    <View style={[props.style, styles.textContainer]}>
      {textArray.map((word, index) => {
        return (
          <Animated.Text
            key={index}
            style={[
              props.textStyle,
              {
                opacity: animatedValues.current[index],
                transform: [
                  {
                    translateY: Animated.multiply(
                      animatedValues.current[index],
                      new Animated.Value(-5)
                    ),
                  },
                ],
              },
            ]}
          >
            {word}
            {`${index < textArray.length ? ' ' : ''}`}
          </Animated.Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    lineHeight:1
  },
});

export default TAnimator;
