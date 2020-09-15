var socket = io.connect('http://172.20.82.44:6677', {'forceNew': true});

socket.on('messages', function(data) {
    console.log(data);
    render(data);
});

function render(data) {
    var html = data.map(function(message, index) {
        return (`
            <div class="message">
                <strong>${message.nickname}</strong>
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');

    document.getElementById('messages').innerHTML = html;
}