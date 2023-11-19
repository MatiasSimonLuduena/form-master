/* eslint-disable no-unused-vars */
import "./styles.css"
import { data } from "./data"

import SvgErr from "./SvgErr"

import { useState } from "react"

const App = () => {
    const [inputs, setInputs] = useState({
        firstName: "", lastName: "", email: "", password: ""
    });

    const [errors, setErrors] = useState({
        firstName: false, lastName: false, email: false, password: false
    });

    function submit() {
        const newErrors = {};

        Object.entries(inputs).forEach(([key, value]) => {
            newErrors[key] = !value.trim(); 
        });

        setErrors(newErrors);
    }

  return (
    <div className="app">
        <div className="app_div1">
            <h1>Learn to codes by watching others</h1>
            <p>
                See how experienced developers solve problems in real-time. Watching scipted tutorials is great, bur understanding how developers think is invaluable.
            </p>
        </div>
        <div className="app_div2">
            <button>Try it free 7 days <span>then 20/mo. thereafter</span></button>
            <div className="card">
                {data.map((item, index) => (
                    <div className="content_inputs" key={index}>
                        <input
                            type={item.type ? item.type : "text"}
                            placeholder={item.placeholder}
                            className={errors[item.state] ? "inputErr" : "input"}
                            value={inputs[item.state]}
                            onChange={e => setInputs({...inputs, [item.state]: e.target.value})}
                        />
                        {errors[item.state] && <SvgErr/>}
                        {errors[item.state] && <span>First Name cannot be empty</span>}
                    </div>
                ))}
                <button onClick={submit}>Calm your free trial</button>
                <p>
                    By clicking the button, you are agreeing to our <span>Terms and Services</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default App