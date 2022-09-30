function fill(TODO) {
    var mainDiv = document.getElementById("ft_list");
    var ndiv = document.createElement('div');
    mainDiv.prepend(ndiv);
    ndiv.innerText = TODO;
    ndiv.style.display = "flex";
    ndiv.style.height = "100px";
    ndiv.style.width = "100%";
    ndiv.style.backgroundColor = "grey";
    ndiv.style.borderRadius = "15px";
    ndiv.style.boxShadow = "5px 5px 5px silver";
    ndiv.style.justifyContent = "center";
    ndiv.style.alignItems = "center";
    ndiv.style.margin = "12px";
    ndiv.style.fontSize = "42px"
    ndiv.onclick = function () {
        if (confirm("Have you achieved this? Are you sure you can remove it from the list?")) {
            this.remove();
            save();
        }
    };
}

function make() {
    var TODO = [];
    TODO = prompt("What do you need to do?");
    while (TODO === "")
        TODO = prompt("Give yourself something TODO");
    fill(TODO);
    save();
}

function save() {
    var mainDiv = document.getElementById("ft_list");
    const savey = [];
    for (const element of mainDiv.children) {
        savey.push(element.textContent);
    }
    localStorage.setItem("hel", JSON.stringify(savey));
}

window.onload = () => {
    const savey = JSON.parse(localStorage.getItem("hel")) || [];
    for (let i = savey.length - 1; i >= 0; i--) {
        fill(savey[i])
    }
}
