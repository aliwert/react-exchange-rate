import "../css/currency.css";
import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";


const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("");

  let token = "fca_live_nQ99EXo1NDktsStZAeHMgjuk6vzYLq1ZkCclK7MN";
  let baseUrl = "https://api.freecurrencyapi.com/v1/latest";

  const exchange = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}?apikey=${token}&base_currency=${fromCurrency}`
      );
      const result = (response.data.data[toCurrency] * amount).toFixed(2);
      setResult(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="currency-div">
      <div style={{ marginBottom: "30px", fontFamily: "cursive" }}>
        <h2 style={{ textAlign: "center", backgroundColor: "black", color: "white" }}>Exchange Rate Application</h2>
      </div>
      <div style={{ marginTop: "30px" }}>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
          name=""
          id=""
        >
          <option value="">USD</option>
          <option value="">EUR</option>
          <option value="">TL</option>
        </select>
        <FaArrowAltCircleRight
          style={{
            fontSize: "30px",
            color: "red",
            marginRight: "10px",
            marginTop: "10px",
            width: "40px",
          }}
        />
        <select
          className="to-currency-option"
          onChange={(e) => setToCurrency(e.target.value)}
          name=""
          id=""
        >
          <option value="">TL</option>
          <option value="">USD</option>
          <option value="">EUR</option>
        </select>
        <input value={result} type="number" className="result" />
      </div>
      <div>
        <button onClick={exchange} className="exchange-button">
          Convert
        </button>
      </div>
    </div>
  );
};

export default Currency;
