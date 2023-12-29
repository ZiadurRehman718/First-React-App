import { useState } from "react";


function App (){
    const [sum, setNum] = useState(0);
    function addNum() {
        setNum(sum + 1);
    }

    function subtractNum() {
        if (sum === 0) {
            console.log('Cannot go below 0');
            alert('Cannot go below 0');
            return
        }
        setNum(sum - 1);
    }
    return (
        <>
            <h1>Counter-App</h1>
            <h3>{sum}</h3>
            <button onClick={addNum}>+</button>
            <button onClick={subtractNum}>-</button>
            <button onClick={() => setNum(0)}>Reset</button>
        </>
    )
}
export default App;