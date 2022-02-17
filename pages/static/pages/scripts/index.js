document.getElementById("send-btn").onclick = function send_message() {
    if (document.getElementById("message").value !== '') {
        const date_now = new Date();
        const message_orange = document.createElement("div");
        const message_content = document.createElement("div");
        const time = document.createElement("div");
        const element = document.getElementById("messages_page");
        message_orange.className = "message-orange";
        message_content.className = "message-content";
        time.className = "message-time-right";
        const text = document.getElementById("message").value;
        const node = document.createTextNode(text);
        let hour = date_now.getHours();
        if (date_now.getHours() === 0) {
            hour = "00";
        }
        const date = document.createTextNode(hour + ":" + date_now.getMinutes());
        message_content.appendChild(node);
        time.appendChild(date);
        message_orange.appendChild(message_content);
        message_orange.appendChild(time);
        element.appendChild(message_orange);
        document.getElementById("message").value = '';
    }
}

function changer(x) {
    document.getElementById("section").style.visibility = "visible";
    document.getElementById("header-contact").innerHTML = x;
    document.getElementById("messages_page").innerHTML = null;
}