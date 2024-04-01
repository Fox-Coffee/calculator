import { useState } from "react"
import './Keyboard.scss'
import NumberBox from './NumberBox';
import { compile } from "sass";

function Button(props: any){
    return <input type="button" className={`Button${props.text == "0" ? " zero" : ""}${props.text == "C" ? " delete" : ""}`} onClick={() => props.change(props.text)} value={props.text}></input>
}

function Keyboard(){
    const [number, setNumber] = useState(0)
    const [previousNumber, setPreviousNumber] = useState<string | null>(null)

    function Change(num: string){
        if ("0123456789".includes(num)){
            setNumber(parseInt(number + num))
        } else if ("+-*/".includes(num) && previousNumber == null){
            setPreviousNumber(number.toString()+num)
            setNumber(0)
        } else if ("+-*/".includes(num) && previousNumber != null){
            setPreviousNumber(previousNumber + number.toString() + num)
            setNumber(0)
        } else if (num == "C"){
            setNumber(0)
            setPreviousNumber(null)
        } else if (num == "CE"){
            setNumber(0)
        } else if (num == "=" && previousNumber != null){
            setNumber(eval(previousNumber + number))
            setPreviousNumber(null)
        }


    }
        return <div className="Keyboard">
            <NumberBox num={number} prev={previousNumber}/>
            <Button text="C" change={Change}/>
            <Button text="CE" change={Change}/>
            <Button text="+" change={Change}/>
            
            <Button text="1" change={Change}/>
            <Button text="2" change={Change}/>
            <Button text="3" change={Change}/>
            <Button text="-" change={Change}/>

            <Button text="4" change={Change}/>
            <Button text="5" change={Change}/>
            <Button text="6" change={Change}/>
            <Button text="*" change={Change}/>

            <Button text="7" change={Change}/>
            <Button text="8" change={Change}/>
            <Button text="9" change={Change}/>
            <Button text="/" change={Change}/>

            <Button text="0" change={Change}/>
            <Button text="=" change={Change}/>
        </div>
}
export default Keyboard