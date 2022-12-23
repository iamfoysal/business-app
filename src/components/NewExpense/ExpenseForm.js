import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enterdTitle: "",
  //   enterdAmount: "",
  //   enterdDate: "",
  // });

  const titleChangehandler = (event) => {
    setEnterdTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdTitle: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enterdTitle: event.target.value };
    // });
  };

  const amountChangehandler = (event) => {
    setEnterdAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdAmount: event.target.value,
    // });
  };

  const dateChangehandler = (event) => {
    setEnterdDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enterdTitle}
            onChange={titleChangehandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={enterdAmount}
            min='0.01'
            step='0.01'
            onChange={amountChangehandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={enterdDate}
            min='2000-01-01'
            max='2025-12-31'
            onChange={dateChangehandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
