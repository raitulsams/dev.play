import { useState } from "react"

export default function Counter() {
    // const stating = useState(0)
    // console.log(stating)
    const [count, setCount] = useState(0)
    console.log(count)
    console.log(setCount)
    function handleAdd(event) {
        const newCount = count + 1
        setCount(newCount)
        // console.log(event.target)

    }
    function handleReduce(event) {
        // console.log(event.target)
        const newCount = count - 1
        setCount(newCount)
    }
    return (
        <>
            <h2>Count: {count}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleReduce}>Reduce</button>
            </div>

        </>
    )
}