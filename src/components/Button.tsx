import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';

interface Props {
    text: string;
    color?: '#2D2D2D' | '#9B9B9B' | '#FF9427';
    long?: boolean;
    action: (textNumber: string | any) => void;
}

export const Button = ({ action, color='#2D2D2D', long, text }: Props) => {
  return (
    <TouchableOpacity
        onPress={() => action(text)}
    >
        <View style={{
            ...styles.button,
            backgroundColor: color,
            width: (long?180:80)
            }}  >
            <Text style={{ 
                ...styles.textButton,
                color: (color === '#9B9B9B'? 'black': 'white')
                }} >{text}</Text>
        </View>
    </TouchableOpacity>
  );
};

