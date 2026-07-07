loadData();

calculateBalances();

updateUI();

const type = document.getElementById("type");
const payment = document.getElementById("payment");
const category = document.getElementById("category");

function updatePaymentOptions() {

    payment.innerHTML = "";

    if (type.value === "Income" || type.value === "Expense") {

        payment.innerHTML = `
            <option value="Axis">Axis Bank</option>
            <option value="Cash">Cash Wallet</option>
        `;

        category.disabled = false;

    }

    else {

        payment.innerHTML = `
            <option value="AxisToCash">Axis ➜ Cash</option>
            <option value="CashToAxis">Cash ➜ Axis</option>
        `;

        category.value = "Others";

        category.disabled = true;

    }

}

type.addEventListener("change", updatePaymentOptions);

updatePaymentOptions();

document.getElementById("saveBtn").addEventListener("click", () => {

    const transactionType = type.value;

    const paymentMethod = payment.value;

    const transactionCategory =
        transactionType === "Transfer"
        ? "Transfer"
        : category.value;

    const amount =
        Number(document.getElementById("amount").value);

    const note =
        document.getElementById("note").value.trim();

    if (amount <= 0 || isNaN(amount)) {

        alert("Please enter a valid amount.");

        return;

    }

    addTransaction(
        transactionType,
        paymentMethod,
        amount,
        transactionCategory,
        note
    );

    updateUI();

    document.getElementById("amount").value = "";
    document.getElementById("note").value = "";

});
