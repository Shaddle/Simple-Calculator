import React, { useRef, useState } from 'react';

enum Operators {
    sum, sub, multiply, divide
  }

export const useCalculator = () => {
  
    const [number, setNumber] = useState('0');
  const [lastNumber, setLastNumber] = useState('0');
  const operation = useRef<Operators>();


  const clean = () => {
    setNumber('0')
    setLastNumber('0')
  }

  const setPressNumber = ( textNumber: string ) => {
    if(number.includes('.') && textNumber === '.') return;

    if(number.startsWith('0') || number.startsWith('-0')) {
      if( textNumber === '.') {
        setNumber( number + textNumber )

      } else if ( textNumber === '0' && number.includes('.')) {
        setNumber( number + textNumber )

      } else if ( textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber)

      } else if ( textNumber === '0' && !number.includes('.') ) {
        setNumber(number)
      } else {
        setNumber( number + textNumber )
      }
    } else {
      setNumber( number + textNumber )
    }

  }

  const del = () => {
    let negative = ''
    let tempNumb = number
    if ( number.includes('-') ) {
      negative = '-'
      tempNumb = number.substring(1)
    }

    if ( tempNumb.length > 1 ) {
      setNumber( negative + tempNumb.slice(0,-1))
    } else {
      setNumber('0')
    }
  }

  const positiveNegative = () => {
    if( number.includes('-')) {
      setNumber( number.replace('-', ''))
    } else {
      setNumber( '-' + number )
    }
  }

  const changeNumberForLast = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setNumber('0')
  }

  const divBtn = () => {
    changeNumberForLast()
    operation.current = Operators.divide
  }
  const multBtn = () => {
    changeNumberForLast()
    operation.current = Operators.multiply
  }
  const subBtn = () => {
    changeNumberForLast()
    operation.current = Operators.sub
  }
  const sumBtn = () => {
    changeNumberForLast()
    operation.current = Operators.sum
  }

  const calculate = () => {

    const number1 = Number( number );
    const number2 = Number( lastNumber );
    
    if (number1 === 0 && number2 === 0) return;

    switch (operation.current) {
      case Operators.sum:
        setNumber(`${(number1+number2)}`);
        break;

      case Operators.sub:
        setNumber(`${(number2-number1)}`);
        break;

      case Operators.multiply:
        setNumber(`${(number1*number2)}`);
        break;
        
      case Operators.divide:
        setNumber(`${(number2/number1)}`);
        break;
        
      default:
        break;
    }
    setLastNumber('0')
  }

    return {
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
    }
};
