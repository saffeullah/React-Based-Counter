import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    
    const [isCounter, setIsCounter ] = React.useState(0)
    
    function counterPlus() {
         let counter= isCounter+1;
        setIsCounter(counter)         
    }
      function counterMinus() {
          let counter= isCounter-1;
        setIsCounter(counter)
     
     
    }
    
    return (
        <div className="counter">
            <button onClick={counterMinus} className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{isCounter}</h1>
            </div>
            <button onClick={counterPlus} className="counter--plus">+</button>
        </div>
    )
}
