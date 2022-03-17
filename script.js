var cube = document.getElementById('cube')

window.onmousemove = function(e) {
    var degX = ((e.clientX/window.innerWidth)*360)-180;
    var degY = ((e.clientY/window.innerHeight)*360)-180;
    cube.style.transform = 'rotateX('+degY+'deg) rotateY('+degX+'deg)'
}