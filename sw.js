const nut = document.getElementById('mode');
const style = document.getElementById('change');
nut.addEventListener('change', function() {
    if (this.checked) {
        style.href = 'styleb3l2_light.css';
    } 
    else {
        style.href = 'styleb3l2_dark.css';
    }
});