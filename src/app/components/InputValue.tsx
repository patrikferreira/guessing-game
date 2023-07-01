import style from "../page.module.css"

type Props = {
    outsideValue: number | string;
    sendInputValue: (inputValue: string | number) => void;
}

export default function InputValue({outsideValue, sendInputValue}: Props) {

  return <>
    <input className={style.inputNumber} value={outsideValue} type="number" onChange={(e) => {
        sendInputValue(e.target.value);
    }} />
  </>
}
