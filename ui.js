function deleteTransaction(id) {

    const confirmDelete = confirm(
        "Delete this transaction?"
    );

    if (!confirmDelete) return;

    appData.transactions =
        appData.transactions.filter(
            transaction => transaction.id !== id
        );

    calculateBalances();

    saveData();

    updateUI();

}

function updateUI() {

    calculateBalances();

    document.getElementById("axisBalance").innerText =
        "₹" + appData.balances.axis;

    document.getElementById("cashBalance").innerText =
        "₹" + appData.balances.cash;

    document.getElementById("totalBalance").innerText =
        "₹" + (
            appData.balances.axis +
            appData.balances.cash
        );

    const history =
        document.getElementById("history");

    history.innerHTML = "";

    if (appData.transactions.length === 0) {

        history.innerHTML =
            "<p>No Transactions</p>";

        return;

    }

    appData.transactions.forEach(transaction => {

        history.innerHTML += `

<div class="transaction">

<b>${transaction.category}</b>

<br>

${transaction.type}

•

${transaction.payment}

<br>

₹${transaction.amount}

<br>

${transaction.note
? `<em>📝 ${transaction.note}</em><br>`
: ""}

<small>${transaction.date}</small>

<br><br>

<button
onclick="deleteTransaction(${transaction.id})">

🗑 Delete

</button>

<hr>

</div>

`;

    });

}
