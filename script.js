
function searchRooms() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const rooms = document.querySelectorAll('.room-card');

    rooms.forEach(room => {
        const text = room.innerText.toLowerCase();
        if (text.includes(input)) {
            room.style.display = 'block';
        } else {
            room.style.display = 'none';
        }
    });
}
        function goToDetail(url) {
            window.location.href = url;
        }
  