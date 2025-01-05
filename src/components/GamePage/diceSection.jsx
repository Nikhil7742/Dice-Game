
import { useState } from "react";
import style from "./moduleCss/diceSection.module.css";

export default function DiceBox({ randomNumber, numberPut, setScore }) {
    const [show, setShow] = useState(false)


    return (
        <>
            <div className={style.diceBox}>
                <div className={style.img} onClick={numberPut}>
                    <img src={`/images/dice_${randomNumber}.png`} 
                    alt={`Dice showing ${randomNumber}`} />
                </div>
                <p>Click on Dice to roll</p>
                <button className={style.btn}
                    onClick={() => {
                        setScore(0)
                    }}
                >Reset</button>
                <button className={style.btn}
                    onClick={() => setShow((prev) => !prev)}
                >{show ? "Hide" : "Show"} Rules</button>
            </div>

            {
                show && (
                    <div className={style.showRule}>
                        <h2>
                            How to play dice game
                        </h2>
                        <ul>
                            <li>1. Select any number</li>
                            <li>2. after click on  dice  if selected number is equal to dice number you will get same point as dice</li>
                            <li>3.if you get wrong guess then  2 point will be dedcuted</li>
                        </ul>
                    </div>
                )
            }
        </>
    );
}
