
document.querySelector("#ch3form").addEventListener('submit', function() {
    var standing = null
    var grad_date = null


    var grad_date = document.querySelector('input[name="gradDate"]:checked')
    var standing = document.querySelector('input[name="standing"]:checked')


    console.log("Good job clicking the button")
    console.log("Grad date is", grad_date)
    console.log("Standing is", standing)

    if (grad_date == null || standing == null){
        alert("You must select a choice from each set of radio buttons")
        return false
    }
   
}
);