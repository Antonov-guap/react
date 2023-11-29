import React, {useState} from 'react';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    const handleNumClick = (event) => {
        const num = event.target.value;
        if (!operator) {
            setNum1(num1 + num);
        } else {
            setNum2(num2 + num);
        }
    };

    const handleOperatorClick = (event) => {
        const op = event.target.value;
        if (num1 && !operator) {
            setOperator(op);
        }
    };

    const handleCalculate = () => {
        let res = '';
        const n1 = parseInt(num1);
        const n2 = parseInt(num2);
        switch (operator) {
            case '+':
                res = n1 + n2;
                break;
            case '-':
                res = n1 - n2;
                break;
            case '*':
                res = n1 * n2;
                break;
            case '/':
                res = n1 / n2;
                break;
            default:
                res = '';
        }
        setResult(res);
    };

    const handleClear = () => {
        setNum1('');
        setNum2('');
        setOperator('');
        setResult('');
    };

    return (
        <div className="container">
            <h1 className="mt-5">Calculator</h1>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={num1 + ' ' + operator + ' ' + num2}
                    readOnly
                />
            </div>


            <div className="btn-group-vertical">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-secondary" value="1" onClick={handleNumClick}>
                            1
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-secondary" value="2" onClick={handleNumClick}>
                            2
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-secondary" value="3" onClick={handleNumClick}>
                            3
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-secondary" value="4" onClick={handleNumClick}>
                            4
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-secondary" value="5" onClick={handleNumClick}>
                            5
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-secondary" value="6" onClick={handleNumClick}>
                            6
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-secondary" value="7" onClick={handleNumClick}>
                            7
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-secondary" value="8" onClick={handleNumClick}>
                            8
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-secondary" value="9" onClick={handleNumClick}>
                            9
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-secondary" value="C" onClick={handleClear}>
                            C
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-secondary" value="0" onClick={handleNumClick}>
                            0
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-secondary" value="=" onClick={handleCalculate}>
                            =
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-secondary" value="+" onClick={handleOperatorClick}>
                            +
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-secondary" value="-" onClick={handleOperatorClick}>
                            -
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-secondary" value="*" onClick={handleOperatorClick}>
                            *
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-secondary" value="/" onClick={handleOperatorClick}>
                        /
                    </button>
                </div>
            </div>
        </div>

            <div className="form-group mt-3">
                <input
                    type="text"
                    className="form-control"
                    value={result}
                    readOnly
                />
            </div>
        </div>
    );
}

export default Calculator;
