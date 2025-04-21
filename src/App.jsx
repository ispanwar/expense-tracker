import "./App.css";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [msg, setMsg] = useState("");
  const [amount, setAmount] = useState("");

  const add = () => {
    if (!msg || !amount) {
      window.alert("Please fill all the fields");
      return;
    }
    const newExpense = {
      id: expenses.length + 1,
      title: msg,
      amount: parseFloat(amount),
    };
    setExpenses([...expenses, newExpense]);
    setMsg("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col items-center justify-center bg-black">
          <div className="flex flex-col items-center justify-center bg-blue-500/10 p-8 border-gray-300 rounded-lg shadow-lg text-center w-96 shadow-blue-500/50">
            <h2 className="font-bold text-4xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Expense Tracker
            </h2>

            {/* Input fields */}
            <input
              type="text"
              placeholder="Enter expense details"
              className="border-white/10 border-2 rounded-md p-3 mb-4 text-gray-300 text-center w-full bg-transparent focus:outline-none hover:border-blue-500 transition duration-300 ease-in-out"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter amount"
              className="border-white/10 border-2 rounded-md p-3 mb-4 text-gray-300 text-center w-full bg-transparent focus:outline-none hover:border-blue-500 transition duration-300 ease-in-out"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            {/* Add button */}
            <button
              className="rounded-md p-3 bg-blue-500 text-white w-full hover:bg-blue-600 transition duration-300 ease-in-out"
              onClick={add}
            >
              Add Expense
            </button>

            {/* Expense list */}
            <div className="flex flex-col items-center justify-center p-6 border-gray-300 rounded-lg shadow-lg text-center mt-6 text-white w-full">
              <ul className="expense-list w-full">
                {expenses.map((expense) => (
                  <li
                    key={expense.id}
                    className="flex justify-between items-center bg-blue-500/10 p-4 rounded-md mb-2 hover:bg-blue-500/20 transition duration-300 ease-in-out"
                  >
                    <span className="text-left">{expense.title}</span>
                    <span className="text-right">
                      &#8377;{expense.amount.toFixed(2)}
                    </span>
                    <button
                      className="bg-red-500 ml-4 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                      onClick={() => deleteExpense(expense.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-4 bg-black text-gray-400 text-sm mt-auto">
          <p>
            &#169;{new Date().getFullYear()} Made by{" "}
            <span className="text-blue-400">Ishatva Singh Panwar</span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
