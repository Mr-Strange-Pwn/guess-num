import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import './number.css'

const Guess=()=>{
     const [num , setNum] = useState('')
     const [guess, setGuess] = useState('')
     const [msg , setMsg] = useState("")
     const [chance , setChance] = useState(3)
     const [display , setDisplay] = useState(true)
     const [btn , setBtn ] = useState("Re-Start")



    useEffect(()=>{
        let ntg = Math.random()*10+1
        setNum(parseInt(ntg))
    },[])


    const reStart =()=>{
        window.location.reload()
    }


    const check=()=>{
        if (chance === 1){ 
            if (num == guess){
                setMsg("you win 😀 ")
                setBtn("Play-Again")
                setDisplay(false)
               }
            else{
                setMsg("you loos 😜 ")
                setBtn("Try-Again")
                setDisplay(false)  
                }
            }
        else{ 
            if(guess < num){
                setMsg(" you guess smaller number")
            }
            else if(guess > num){
                setMsg(" you guess larger number")
            }
            else{ 
            setMsg("you win 😀 ")
            setBtn("Play-Again")
            setDisplay(false)
            }
        }
        setChance(chance - 1)
    }


    console.log(num)
    return(
    <div className="main">
        <Row className="setbutton">  
             <Col>
        <button className="btn btn-info" onClick={reStart}>{btn}</button><hr/>
            </Col>
            </Row>
        <Row className="game">
    <Col>
    <p>you have <span style={{color:"red"}}> {chance} </span>chance left</p>
    {display ?<div> 
        <div>
    <h3 style={{color:"green"}}>you'r guess is {guess}</h3>
        </div>
        <div>
        <button value="1" className="btn btn-secondary m-1" onClick={(e)=>setGuess(e.target.value)} >1</button>
        <button value="2" className="btn btn-secondary m-1" onClick={(e)=>setGuess(e.target.value)} >2</button>
        <button value="3" className="btn btn-secondary m-1" onClick={(e)=>setGuess(e.target.value)} >3</button>
        <button value="4" className="btn btn-secondary m-1" onClick={(e)=>setGuess(e.target.value)} >4</button>
        <button value="5" className="btn btn-secondary m-1" onClick={(e)=>setGuess(e.target.value)} >5</button>
        </div>
        <div>
        <button value="6" className="btn btn-secondary m-1" onClick={(e)=>setGuess(e.target.value)} >6</button>
        <button value="7" className="btn btn-secondary m-1" onClick={(e)=>setGuess(e.target.value)} >7</button>
        <button value="8" className="btn btn-secondary m-1" onClick={(e)=>setGuess(e.target.value)} >8</button>
        <button value="9" className="btn btn-secondary m-1" onClick={(e)=>setGuess(e.target.value)} >9</button>
        <button value="10" className="btn btn-secondary m-1" onClick={(e)=>setGuess(e.target.value)} >10</button>
        </div>
        <div>
       <button onClick={check} className="btn btn-success m-1">check my guess</button>
        </div>
        </div> : null}
    <h3><span style={{color:"red"}}>hint !! </span>{msg}</h3></Col>
        </Row><hr/>

        <Row className="info">
            <Col>            
            <h1> Info </h1>
            <p>🔴 you have only 3 chances to guess the number</p>
            <p>🔴 number is in between 1 to 10 </p>
            <p>🔴 first select num then check it </p>
            <p>🔴 you can cheet with dev tool 😉</p>
            </Col>

        </Row>
    </div>

    )
}
 
export default Guess;