import React from "react";

function Header({turn, error, win}) {
    if (error){
        return <h1 className="">Невірний хід</h1>
    } else if (win && win !== 'draw'){
        return <h1 className="">Перемога {turn}</h1>
    } else if (win === 'draw'){
        return <h1 className="">Нічия</h1>
    } else {
        return <h1 className="">Хід гравця {turn}</h1>
    }
}

export default Header;