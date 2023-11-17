import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value)
    };

    const totalExpenses = expenses?.reduce((total, item) => (total = total + item.cost), 0);

    if (newBudget < totalExpenses) {
        setNewBudget(totalExpenses);
        alert("You cannot reduce the budget value lower than the spending");
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;