document.querySelector("#subscribe").addEventListener('click', function() {
    console.log(this.checked)

    if (this.checked) {
        document.querySelector("emailDiv").computedStyleMap.display = "block"
    }
    else {
        document.querySelector("emailDiv").computedStyleMap.display = "none"
    }

}
);

document.querySelector("#sameAddress").addEventListener("click", function () {
    console.log("hi")
});