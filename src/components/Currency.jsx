import "../css/currency.css";
import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Currency = () => {
  const  [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState("")
  const [toCurrency, setToCurrency] = useState("")
  const [result, setResult] = useState(0)

  return (
    <div className="currency-div">
      <div style={{ marginBottom: "30px", fontFamily: "cursive" }}>
        <h2>Exchange Rate Application</h2>
      </div>
      <div style={{ marginTop: "30px" }}>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className="amount" />
        <select className="from-currency-option" name="" id="">
          <option value="">USD</option>
          <option value="">EUR</option>
          <option value="">TL</option>
        </select>
        <FaArrowAltCircleRight
          style={{
            fontSize: "20px",
            color: "red",
            marginRight: "10px",
            marginTop: "5px",
          }}
        />
        <select className="to-currency-option" name="" id="">
          <option value="">TL</option>
          <option value="">USD</option>
          <option value="">EUR</option>
        </select>
        <input type="number" className="result" />
      </div>
      <div>
        <button className="exchange-button">Convert</button>
      </div>
    </div>
  );
};

export default Currency;
