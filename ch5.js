let thumbnails = document.querySelectorAll(".thumbnail")

for (let index = 0; index < thumbnails.length; index++) {
    console.log("Adding image listneer index")
    console.log(thumbnails[index])
    thumbnails[index].setAttribute("tabindex", "0")
    thumbnails[index].addEventListener('mouseover', function() {
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')"
        console.log(this.src)
        document.querySelector("#display").innerHTML = this.alt
    })
    thumbnails[index].addEventListener('focus', function() {
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')"
        console.log(this.src)
        document.querySelector("#display").innerHTML = this.alt
    })
    thumbnails[index].addEventListener('mouseout', function() {
            document.querySelector("#display").style.backgroundImage = ""
            document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text."
    })
    thumbnails[index].addEventListener('blur', function() {
        document.querySelector("#display").style.backgroundImage = ""
        document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text."
    })
}