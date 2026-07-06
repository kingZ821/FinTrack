function saveData() {
    localStorage.setItem("fintrackData", JSON.stringify(appData));
}

function loadData() {
    const saved = localStorage.getItem("fintrackData");

    if (saved) {
        const parsed = JSON.parse(saved);

        appData.balances = parsed.balances || appData.balances;
        appData.transactions = parsed.transactions || appData.transactions;
        appData.categories = parsed.categories || appData.categories;
    }
}
