function calculateBalances() {

    appData.balances.axis = 0;
    appData.balances.cash = 0;

    appData.transactions.forEach(transaction => {

        const amount = Number(transaction.amount);

        if (transaction.type === "Income") {

            if (transaction.payment === "Axis")
                appData.balances.axis += amount;

            if (transaction.payment === "Cash")
                appData.balances.cash += amount;

        }

        else if (transaction.type === "Expense") {

            if (transaction.payment === "Axis")
                appData.balances.axis -= amount;

            if (transaction.payment === "Cash")
                appData.balances.cash -= amount;

        }

        else if (transaction.type === "Transfer") {

            if (transaction.payment === "AxisToCash") {

                appData.balances.axis -= amount;
                appData.balances.cash += amount;

            }

            else if (transaction.payment === "CashToAxis") {

                appData.balances.cash -= amount;
                appData.balances.axis += amount;

            }

        }

    });

}

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

    appData.transactions.unshift(transaction);

    calculateBalances();

    saveData();

}
