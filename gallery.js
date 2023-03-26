let slide_index = 0;
let interval = window.setInterval(auto_scroll, 4000);

function user_button(n, id) {
    add_index(n, id);
    window.clearInterval(interval);
}

function auto_scroll() {
    add_index(1, "gallery")
}

function add_index(n, id) {
    let container = document.getElementById(id);
    let count = container.childElementCount;

    slide_index = (count + slide_index + n) % count

    update_slide(container);
}

function update_slide(container) {
    container.style.setProperty("margin-left", String(-100 * slide_index) + "%");
}