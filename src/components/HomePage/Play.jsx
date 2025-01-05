import React from 'react';
import style from "./Play.module.css"

export default function Play({toogle}){
    return (
        <div className="container">
            <div className={style.Parent}>
                <div className={style.img}>
                    <img src="/images/dices.png" alt=""/>
                </div>
                <div className={style.Title}>
                    <h1>DICE GAME</h1>
                    <button onClick={toogle}>Play Now</button>
                </div>
            </div>
        </div>
    )
}