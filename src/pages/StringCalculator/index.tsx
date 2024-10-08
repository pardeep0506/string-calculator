import React, { useState } from 'react';
import './style.css';
import {add} from "../../utlis/add";


const StringCalculator: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<number | string | null>(null);

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
        } catch (error) {
            setResult(error instanceof Error ? error.message : "An error occurred");
        }
    };

    return (
        <div className="calculator-container">
            <h1>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers"
            />
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && (
                <p className={typeof result === "number" ? "result" : "error"}>
                    Result: {result}
                </p>
            )}
        </div>
    );
};

export default StringCalculator;
