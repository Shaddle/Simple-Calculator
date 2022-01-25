import { View, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from '../theme/appTheme';
import { Button } from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    calculate,
    subBtn,
    sumBtn,
    divBtn,
    multBtn,
    positiveNegative,
    del,
    setPressNumber,
    clean,
    number,
    lastNumber
  } = useCalculator();

  return (
    <View style={styles.container} >
      {lastNumber !== '0'&&<Text style={styles.preRes} >{lastNumber}</Text>}
      <Text 
        style={styles.res}
        numberOfLines={1}
        adjustsFontSizeToFit 
      >{number}</Text>

      <View style={styles.row} >
        <Button text={number=== '0'&&lastNumber==='0'?'AC':'C'} color='#9B9B9B' action={clean} />
        <Button text='+/-' color='#9B9B9B' action={positiveNegative} />
        <Button text='DEL' color='#9B9B9B' action={del} />
        <Button text='/' color='#FF9427' action={divBtn} />
      </View>

      <View style={styles.row} >
        <Button text='7' action={setPressNumber} />
        <Button text='8' action={setPressNumber} />
        <Button text='9' action={setPressNumber} />
        <Button text='X' color='#FF9427' action={multBtn} />
      </View>

      <View style={styles.row} >
        <Button text='4' action={setPressNumber} />
        <Button text='5' action={setPressNumber} />
        <Button text='6' action={setPressNumber} />
        <Button text='-' color='#FF9427' action={subBtn} />
      </View>


      <View style={styles.row} >
        <Button text='1' action={setPressNumber} />
        <Button text='2' action={setPressNumber} />
        <Button text='3' action={setPressNumber} />
        <Button text='+' color='#FF9427' action={sumBtn} />
      </View>

      <View style={styles.row} >
        <Button text='0' action={setPressNumber} long  />
        <Button text='.'  action={setPressNumber} />
        <Button text='=' action={calculate} color='#FF9427' />
      </View>

    </View>
  );
}
