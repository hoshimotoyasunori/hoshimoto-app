import { useState } from "react"

const About = () => {
    const [count,setCount] = useState(0);
    return (
        
        <>
            <h1>About Page</h1>
            <div>
                <p>{count}</p>
                <div>
                    <button onClick={() => setCount(count +1)}>
                    Count+
                    </button>
                </div>
            </div>

        </>

    )
}

export default About


