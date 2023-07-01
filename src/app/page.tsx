"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<string>('');
  const [random, setRandom] = useState<number>(0);
  const [chances, setChances] = useState<number>(10);

  const restartGame = () => {
    setNumber(0);
    setResult('');
    setRandom(Math.floor(Math.random() * 100));
    setChances(10);
  }

  const checkNumber = () => {
    if(number === random) {
      setResult('Congratulations!');
    } else if(chances > 1) {
      if(number > random) {
        setResult('Your number is high');
        setChances(chances - 1);
      } else {
        setResult('Your number is low');
        setChances(chances -1);
      }
    } else {
      setResult('Game Over!');
      setChances(chances -1);
      setTimeout(restartGame, 5000)
    }
  }

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 100));
  }, []);

  return (
    <main className={styles.mainDiv}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h4>Guess a nimber from 1 to 100</h4>
          <p className={styles.result}>{result}</p>
        </div>
        <div className={styles.inputDiv}>
          <input className={styles.inputNumber} type="number" onChange={(e) => {
            setNumber(+e.target.value);
          }}/>
          <button className={styles.btnCheck} onClick={checkNumber}>Check</button>
        </div>
        <p>{`You have ${chances} chances`}</p>
      </div>
    </main>
  )
}
