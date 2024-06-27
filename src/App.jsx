function App() {
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
      </table>
    </div>
  );
}

export default App;
