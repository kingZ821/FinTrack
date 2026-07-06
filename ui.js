function updateUI() {

    document.getElementById("axisBalance").innerText =
        "₹" + appData.balances.axis;

    document.getElementById("cashBalance").innerText =
        "₹" + appData.balances.cash;

    document.getElementById("totalBalance").innerText =
        "₹" + (appData.balances.axis + appData.balances.cash);

    const history = document.getElementById("history");

    history.innerHTML = "";

    if (appData.transactions.length === 0) {

        history.innerHTML = "<p>No Transactions</p>";

        return;
    }

    appData.transactions.forEach(transaction => {

        history.innerHTML += `

        <div class="transaction">

            <strong>${transaction.category}</strong><br>

            ${transaction.type}

            •

            ${transaction.payment}

            <br>

            ₹${transaction.amount}

            <br>

            <small>${transaction.date}</small>

            <hr>

        </div>

        `;

    });

}
