


document.querySelector("#sameAddress").addEventListener("click", function () {
    bill = document.querySelector("#bill")
    home = document.querySelector("#home")
    if (this.checked) {
        home.value = bill.value;
        home.disabled = true;

    }
    else {
        home.value = "";
        home.disabled = false;
    }
});
