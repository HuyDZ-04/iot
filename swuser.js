const nut = document.getElementById('mode');
const style = document.getElementById('change');
nut.addEventListener('change', function() {
    if (this.checked) {
        style.href = 'user_light.css';
    } 
    else {
        style.href = 'user_dark.css';
    }
});