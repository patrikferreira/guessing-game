"use client"

import styles from './page.module.css'
import { useEffect, useRef, useState } from 'react'
import InputValue from './components/InputValue';
import ButtonCheck from './components/ButtonCheck';

export default function Home() {
  const [number, setNumber] = useState<number | string>('');
  const [result, setResult] = useState<string>('');
  const [random, setRandom] = useState<number>(0);
  const [chances, setChances] = useState<number | string>(10);
  const [restart, setRestart] = useState<string>('');
  const [buttonDsc, setButtonDsc] = useState<string>('Check');

  const restartGame = () => {
    setNumber('');
    setResult('');
    setRandom(Math.floor(Math.random() * 10));
    setChances(10);
    setRestart('');
    setButtonDsc('Check');
  }

  function getInputValue(inputValue: typeof number) {
    setNumber(inputValue);
  }

  function sendButtonFunction() {
    if(buttonDsc === 'Check') {
      checkNumber();
    } else {
      restartGame();
    }
  }

  const checkNumber = () => {
    if(+number === random) {
      setResult('Congratulations!');
      setNumber('');
      setButtonDsc('Restart');
    } else if(+chances > 1) {
      if(+number > random) {
        setResult('Your number is high');
        setChances(+chances - 1);
        setNumber('')
      } else {
        setResult('Your number is low');
        setChances(+chances -1);
        setNumber('')
      }
    } else {
      setResult('Game Over!');
      setChances(+chances -1);
      setTimeout(restartGame, 5000);
      setRestart('Restarting...');
      setNumber('')
    }
  }

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 10));
  }, []);

  return (
    <main className={styles.mainDiv}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h4>Guess a number from 1 to 100</h4>
          <p className={styles.result}>{result}</p>
        </div>
        <div className={styles.inputDiv}>
          <InputValue outsideValue={number} sendInputValue={getInputValue} />
          <ButtonCheck description={buttonDsc} getButtonFunction={sendButtonFunction} />
        </div>
        <p>{`You have ${chances} chances`}</p>
      </div>
      <p className={styles.restartMsg}>{restart}</p>

      


    </main>
  )
}
