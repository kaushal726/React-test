import { useState } from "react";
function Common() {
    const [randomNumber, setRandomNumber] = useState();
    let randomNo;
    randomNo = Math.floor(Math.random() * 100000);
    randomNo.length <= 4 && (randomNo = Math.floor(Math.random() * 1000000));
    function updateOTP() {
        setRandomNumber(randomNo);
    }
    return (
        <div className='wrapper'>
            <h1>Lol</h1>
            
            <div className='container'>
                <div className='p-5'>
                    <h1 className='text-3xl text-center border-red'>OTP Generator</h1>
                </div>
                <div>
                    <button className='text-white p-5' onClick={updateOTP}>Generate OTP</button>
                    <h1 className="text-white">{randomNumber}</h1>
                </div>
            </div>
        </div>
    )
}
export default Common