import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  
  async function getExpenses() {
    const response = await fetch("https://expenses-backend-mu.vercel.app/expenses", { headers: {
      "Content-Type": "application/json",
      Username: "Steven.Hanson" 
    }});
    const data = await response.json();

    setData(data);
  }

  useEffect(() => {
    getExpenses();
  }, []);

  function formatDate(date) {
    const currentDate = new Date(date);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[currentDate.getMonth()];
    const day = currentDate.getDate();
    return `${month} ${day}`;
  }

  function formatCurrency(amount) {
    let amountToString = amount.toString().replace("..", ".");

    let [pounds, pence] = amountToString.split(".");

    pence = pence ? pence.padEnd(2, "0") : "00";

    return `£${pounds}.${pence}`;
  }

  return (
    <div id="template-text">
      <h1>Expenses</h1>
      <div id="divider"></div>
      <table className="table">
        <tr>
          <th>Date</th>
          <th>Merchant</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {data && data.map((item) => (
          <tr key={item.id}>
            <td>{formatDate(item.date)}</td>
            <td>{item.merchant}</td>
            <td>{formatCurrency(item.amount)}</td>
            <td>{item.category}</td>
            <td>{item.description}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;