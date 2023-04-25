var canvas = document.getElementById('my_Canvas');
var gl = canvas.getContext('experimental-webgl');

var vertices = [    0.0, 0.5, 0.0,      // Top vertex
  -0.43, 0.25, 0.0,   // Top-left vertex
  -0.43, -0.25, 0.0,  // Bottom-left vertex
  0.0, -0.5, 0.0,     // Bottom vertex
  0.43, -0.25, 0.0,   // Bottom-right vertex
  0.43, 0.25, 0.0     // Top-right vertex
];

var indices = [    0, 1, 5,  // Top triangle
  1, 2, 5,  // Left triangle
  2, 3, 4,  // Bottom-left triangle
  4, 5, 2,  // Bottom-right triangle
  0, 5, 4   // Right triangle
];


var vertex_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

var index_buffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

var vertCode = `
attribute vec3 coordinates;
uniform mat4 rotationMatrix;
void main(void) {
    gl_Position = rotationMatrix * vec4(coordinates, 1.0);
}`;

var vertShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertShader, vertCode);
gl.compileShader(vertShader);

var fragCode = `
void main(void) {
    gl_FragColor = vec4(0.3, 0.2, 0.2, 0.2);
}`;

var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragShader, fragCode);
gl.compileShader(fragShader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertShader);
gl.attachShader(shaderProgram, fragShader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
var coord = gl.getAttribLocation(shaderProgram, "coordinates");
gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(coord);

gl.clearColor(1, 0.6, 0.1, 1);
gl.enable(gl.DEPTH_TEST);

function getRotationMatrix(angle) {
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    return [
        c, -s, 0, 0,
        s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
}

var time = 0;
function drawScene() {
    time += 0.06;

    gl.clear(gl.COLOR_BUFFER_BIT);

    var rotationMatrix = getRotationMatrix(time);
    var uRotationMatrix = gl.getUniformLocation(shaderProgram, 'rotationMatrix');
    gl.uniformMatrix4fv(uRotationMatrix, false, new Float32Array(rotationMatrix));

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

    requestAnimationFrame(drawScene);
}

drawScene();
