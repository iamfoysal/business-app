import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
    // const [enterdTitle, setEnterdTitle] = useState('');
    // const [enterdAmount, setEnterdAmount] = useState('');
    // const [enterdDate, setEnterdDate] = useState('');

    const [userInput, setUserInput] = useState({
        enterdTitle: '',
        enterdAmount: '',
        enterdDate: '',
    });


    const titleChangehandler = (event) =>{
        // setEnterdTitle.log(event.target.value)
        setUserInput({
            ...userInput,
            enterdTitle: event.target.value
        });
    }

    const amountChangehandler = (event) =>{
        // setEnterdAmount.log(event.target.value)
        setUserInput({
            ...userInput,
            enterdAmount: event.target.value
        });

    }

    const dateChangehandler = (event) =>{
        // setEnterdDate.log(event.target.value)
        setUserInput({
            ...userInput,
            enterdDate: event.target.value
        });
    }

  return(
    <form>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={titleChangehandler} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' onChange={amountChangehandler} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2000-01-01' max='2025-12-31' onChange={dateChangehandler} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
  );
};

export default ExpenseForm;
