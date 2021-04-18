var container = document.getElementById("slider")
var menu = document.getElementById("menu-flutuante")
var imagens = document.getElementsByClassName("image-section")

function mostrarMenu() {
    menu.style.display = "block"
}

function esconderMenu() {
    menu.style.display = "none"
}

function changeImage() {
    if (container.classList == "container") {
        container.classList.remove("container")
        container.classList.add("container1")
    }
    else if (container.classList == "container1") {
        container.classList.remove("container1")
        container.classList.add("container2")
    }
    else if (container.classList == "container2") {
        container.classList.remove("container2")
        container.classList.add("container3")
    }
    else if (container.classList == "container3") {
        container.classList.remove("container3")
        container.classList.add("container4")
    }
    else if (container.classList == "container4") {
        container.classList.remove("container4")
        container.classList.add("container5")
    }
    else if (container.classList == "container5") {
        container.classList.remove("container5")
        container.classList.add("container")
    }

}
setInterval(changeImage, 7000)