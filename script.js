loadData();

updateUI();

document
.getElementById("saveBtn")
.addEventListener("click", () => {

    const type =
        document.getElementById("type").value;

    const payment =
        document.getElementById("payment").value;

    const category =
        document.getElementById("category").value;

    const amount =
        document.getElementById("amount").value;

    const note =
        document.getElementById("note").value;

    if (amount === "") {

        alert("Enter Amount");

        return;

    }

    addTransaction(
        type,
        payment,
        amount,
        category,
        note
    );

    updateUI();

    document.getElementById("amount").value = "";

    document.getElementById("note").value = "";

});
