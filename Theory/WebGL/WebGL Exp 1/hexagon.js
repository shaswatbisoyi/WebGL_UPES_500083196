
var gl;
var points;

function init(){
  canvas = document.getElementById("mycanvas");
  gl = canvas.getContext("experimental-webgl");

  var a = 0.5;
  var b = 0.75;
  var vertices = new Float32Array([
    -1,0,0 , -a,b,0,
    -a,b,0 , a,b,0,
    a,b,0, 1,0,0,
    1,0,0 , a,-b,0,
    a,-b,0 , -a,-b,0,

  ]);



  var vertex_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0, 0.5, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  var vertCode =
    'attribute vec3 coordinates;' +
    'void main(void) {' +
       ' gl_Position = vec4(coordinates, 1.0);' +
    '}';

  var vertShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertShader, vertCode);
  gl.compileShader(vertShader);

  var fragCode =
      'void main(void) {' +
         'gl_FragColor = vec4(1.0, 1.0, 1.0, 1);' +
      '}';

  var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragShader, fragCode);
  gl.compileShader(fragShader);
  var program = gl.createProgram();

  gl.attachShader(program, vertShader);

  gl.attachShader(program, fragShader);

  gl.linkProgram(program);

  gl.useProgram(program);

  if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS))
  console.log(gl.getShaderInfoLog(vertShader));

  if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS))
  console.log(gl.getShaderInfoLog(fragShader));

  if (!gl.getProgramParameter(program, gl.LINK_STATUS))
  console.log(gl.getProgramInfoLog(program));

  gl.useProgram(program);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  var coord = gl.getAttribLocation(program, "coordinates");
  gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(coord);

  gl.clearColor(0.0, 0.5, 0.5, 0.9);
  gl.enable(gl.DEPTH_TEST);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  const [minSize, maxSize] = gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE);
  gl.drawArrays(gl.TRIANGLE_FAN, 0,10);

}
