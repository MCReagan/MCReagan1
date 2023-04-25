$('a').click(function(){
    if (this.text == 'Home') {
        window.location.href = 'index.html';
    } else if (this.text == 'About') {
        window.location.href = 'about.html';
    } else if (this.text == 'Portfolio') {
        window.location.href = 'portfolio.html';
    }
})

window.onload = function() {
    setTimeout(function() {
        document.getElementById('body').style.display = "";},200);
    }
