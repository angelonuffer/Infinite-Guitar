function putBG() {
    context.fillStyle = "#000000"
    context.fillRect(0, 0, 800, 600)
}

function putImage(src, x, y) {
    var image = new Image()
    image.src = src
    image.onload = function() {
        context.drawImage(image, x, y)
    }
    return image
}

function putKey(color, key_code, x) {
    var image = putImage("images/" + color + "-key-non-pressed.png", x, 500)
    $(document).keydown(function(event) {
        if (event.which == key_code) {
            image.src = "images/" + color + "-key-pressed.png"
        }
    })
    $(document).keyup(function(event) {
        if (event.which == key_code) {
            image.src = "images/" + color + "-key-non-pressed.png"
        }
    })
}

$(document).ready(function() {
    var canvas = document.getElementById("infinite_guitar")
    context = canvas.getContext("2d")

    putBG()

    putKey("green", 65, 170)
    putKey("pink", 71, 570)
})
