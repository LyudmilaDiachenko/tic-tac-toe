import React from "react";

function Header({turn, error, win}) {
    if (error){
        return <h1 className="">Невірний хід</h1>
    } else if (win){
        return <h1 className="">Перемога {turn}</h1>
    } else {
        return <h1 className="">Хід гравця {turn}</h1>
    }
}

export default Header;