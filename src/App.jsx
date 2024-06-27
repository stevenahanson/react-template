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
            <td>{item.date}</td>
            <td>{item.merchant}</td>
            <td>{item.amount}</td>
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