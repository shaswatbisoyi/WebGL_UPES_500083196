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

    var vertices = [];

    var max = 1, min = -1;
    for (var i=0, t=16; i<t; i++) {
        vertices.push(Math.random() * (max - min) + min)
    }

    var vertex_buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertCode =
      'attribute vec2 coordinates;' +

      'void main(void) {' +
      ' gl_Position = vec4(coordinates, 0.0, 1.0);' +
      '}';

      var vertShader = gl.createShader(gl.VERTEX_SHADER);

      gl.shaderSource(vertShader, vertCode);

      gl.compileShader(vertShader);

      if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
        var error = gl.getShaderInfoLog(vertShader);
        console.error('Failed to compile vertex shader: ' + error);
    }

    var fragCode =
            'precision mediump float;' +
            'uniform vec3 myColor;' +
            'void main(void) {' +
               ' gl_FragColor = vec4(myColor, 1.0);' +
            '}';

    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(fragShader, fragCode);

    gl.compileShader(fragShader);

    if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
        var error = gl.getShaderInfoLog(fragShader);
        console.error('Failed to compile fragment shader: ' + error);
    }

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertShader);
    gl.attachShader(shaderProgram, fragShader);

    gl.linkProgram(shaderProgram);

    gl.useProgram(shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    var myColorLocation = gl.getUniformLocation(shaderProgram, 'myColor');

    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);

    var color = [];

    for (var i=0, t=3; i<t; i++) {
        color.push(Math.random())
    }

    gl.uniform3fv(myColorLocation, color);

    gl.enableVertexAttribArray(coord);

    gl.clearColor(1, 1, 1, 1);

    gl.enable(gl.DEPTH_TEST);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.viewport(0, 0, canvas.width, canvas.height);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, vertices.length/2);
}
