var canvas = document.getElementById('canvas');


if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(10, 10, 50, 50);
  canvas.click = handleMouseClick;
  var handleMouseClick = function(event) {
    console.log('was clicked', event)
  }
} else {
  var placeHolder = '<div>Please update your browser</div>';
  canvas.appendChild(placeHolder);
}