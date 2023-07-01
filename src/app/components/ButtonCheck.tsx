import style from "../page.module.css"

type Props = {
    description: string;
    getButtonFunction: (functionValue: any) => void;
}

export default function ButtonCheck({description, getButtonFunction}: Props) {
    return <>
        <button className={style.btnCheck} onClick={getButtonFunction}>{description}</button>
    </>
}