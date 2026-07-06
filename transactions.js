function addTransaction(type, payment, amount, category, note = "") {

    amount = Number(amount);

    const transaction = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        type,
        payment,
        amount,
        category,
        note
    };

    if (type === "Income") {

        if (payment === "Axis") {
            appData.balances.axis += amount;
        }

        if (payment === "Cash") {
            appData.balances.cash += amount;
        }

    }

    else if (type === "Expense") {

        if (payment === "Axis") {
            appData.balances.axis -= amount;
        }

        if (payment === "Cash") {
            appData.balances.cash -= amount;
        }

    }

    else if (type === "Transfer") {

        if (payment === "AxisToCash") {

            appData.balances.axis -= amount;
            appData.balances.cash += amount;

        }

        else if (payment === "CashToAxis") {

            appData.balances.cash -= amount;
            appData.balances.axis += amount;

        }

    }

    appData.transactions.unshift(transaction);

    saveData();
}
