import React from 'react'
import CurrencyFormat from 'react-currency-format'
import '../assets/css/Subtotal.css'


function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 Item): <strong>0</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/> This Order Contains Gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed To CheckOut</button>
        </div>
    )
}


export default Subtotal;
