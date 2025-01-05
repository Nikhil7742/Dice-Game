import { useState } from "react";
import style from "./moduleCss/numberSection.module.css"
export default function NumberBox({number,setNumber,score,error}) {
    const btnArr = [1,2,3,4,5,6];

    function userNumber(value){
        setNumber(value);
    }
    return (
        <div className={style.scoreBox}>
            <div className={style.score}>
                <h1>{score}</h1>
                <p>Total Score</p>
            </div>


            <div className={style.btnBox}>
                <p className={style.error}>
                    {error}
                </p>
                <div>
                {
                    btnArr.map(
                        (value,i) => {
                           return (
                            <button key={i} className={`${style.btn} ${value === number ? style.boxColor : ""}` } onClick={() => userNumber(value)}>{value}
                            </button>
                           )
                        }
                    )
                }
                </div>
                
                <p>
                    Select Number
                </p>
                

            </div>
        </div>
    );
}
