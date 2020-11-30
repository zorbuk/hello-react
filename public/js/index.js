'use strict';

var personas = [{ nombre: 'Paquita', edad: 29, ciudad: 'Vilaseca' }, { nombre: 'Paco', edad: 36, ciudad: 'Reus' }];

var sumar = function sumar(e) {
    personas[0].edad++;

    render();

    console.log(personas[0].edad);
};

var restar = function restar(e) {
    personas[0].edad--;

    render();

    console.log(personas[0].edad);
};

var reset = function reset(e) {
    personas[0].edad = 29;

    render();

    console.log(personas[0].edad);
};

var appRoot = document.querySelector('#appRoot');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            { id: 'nombre' },
            personas[0].nombre
        ),
        React.createElement(
            'p',
            { id: 'edad' },
            personas[0].edad
        ),
        React.createElement(
            'p',
            { id: 'ciudad' },
            personas[0].ciudad
        ),
        React.createElement(
            'p',
            null,
            React.createElement(
                'button',
                { onClick: sumar },
                '+1'
            ),
            React.createElement(
                'button',
                { onClick: restar },
                '-1'
            ),
            React.createElement(
                'button',
                { onClick: reset },
                'reset'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
