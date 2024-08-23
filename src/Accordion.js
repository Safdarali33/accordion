import react from "react";
import "./Accordion.css"
import { useState } from "react";

export default function Accordion({ dataArray }) {

    const [accArray, setAccArray] = useState(dataArray)
 
    function toggleAcc(id) {
        console.log("hello")
        setAccArray((prev) => 
            prev.map((i) => i.id !== id ? {...i, open : false} : {...i, open : !i.open})
        )
    }

    const AccEl = accArray.map(person =>
        <div className="acc-el">
            <div onClick={() => toggleAcc(person.id)} className="acc-title">{person.title}</div>
            {
                person.open && 
                <div className="acc-description">{person.description}</div>
            }
        </div>
    )

    return (
        <div className="acc-container">
            {AccEl}
        </div>

    )
}

// export default Accordion;