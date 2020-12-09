// -- CON COMPONENTS
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Persona = function (_React$Component) {
    _inherits(Persona, _React$Component);

    function Persona(props) {
        _classCallCheck(this, Persona);

        var _this = _possibleConstructorReturn(this, (Persona.__proto__ || Object.getPrototypeOf(Persona)).call(this, props));

        _this.state = {
            nombre: props.nombre,
            edad: props.edad,
            ciudad: props.ciudad,
            defaultEdad: props.edad
        };

        console.log("Persona.");
        return _this;
    }

    _createClass(Persona, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ defaultEdad: this.state.edad });
        }
    }, {
        key: 'sumar',
        value: function sumar(event) {
            this.setState({ edad: this.state.edad + 1 });
        }
    }, {
        key: 'restar',
        value: function restar(event) {
            this.setState({ edad: this.state.edad - 1 });
        }
    }, {
        key: 'reset',
        value: function reset(event) {
            this.setState({ edad: this.state.defaultEdad });
        }
    }, {
        key: 'getNombre',
        value: function getNombre() {
            return this.state.nombre ? this.state.nombre : 'Anónimo';
        }
    }, {
        key: 'getEdad',
        value: function getEdad() {
            return this.state.edad >= 18 ? this.state.edad : 'Eso es carcel, nonono';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Nombre: ',
                    this.getNombre()
                ),
                React.createElement(
                    'p',
                    null,
                    'Edad: ',
                    this.getEdad()
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(
                        'button',
                        { value: this.state.edad, name: 'edad', onClick: function onClick() {
                                return _this2.sumar();
                            } },
                        '+1'
                    ),
                    React.createElement(
                        'button',
                        { value: this.state.edad, name: 'edad', onClick: function onClick() {
                                return _this2.restar();
                            } },
                        '-1'
                    ),
                    React.createElement(
                        'button',
                        { value: this.state.defaultEdad, name: 'edad', onClick: function onClick() {
                                return _this2.reset();
                            } },
                        'reset'
                    )
                )
            );
        }
    }]);

    return Persona;
}(React.Component);

ReactDOM.render(React.createElement(Persona, { nombre: 'manolito', edad: 33, ciudad: 'reus' }), document.getElementById('appRoot'));
// -- SIN COMPONENTS
/*const personas = [
    { nombre: 'Paquita', edad: 12, ciudad: 'Vilaseca' },
    { nombre: 'Paco', edad: 36, ciudad: 'Reus' }
]

const sumar = (e) => {
    personas[0].edad++;
    
    render()

    console.log(personas[0].edad)
}

const restar = (e) => {
    personas[0].edad--;

    render()

    console.log(personas[0].edad)
}

const reset = (e) => {
    personas[0].edad = 29;

    render()

    console.log(personas[0].edad)
}

const writeLocation = (ciudad) => {
    if(ciudad){
        return <p>Ciudad: {ciudad}</p>
    }
}

const appRoot = document.querySelector('#appRoot')

const render = () =>{
    const template = (
        <div>
        <p id="nombre">Nombre: { personas[0].nombre ? personas[0].nombre: 'Anónimo' }</p>
        <p id="edad">Edad: { personas[0].edad >= 18 ? personas[0].edad: 'Eso es carcel, nonono' }</p>
        {writeLocation(personas[0].ciudad)}
        <p><button onClick={sumar}>+1</button><button onClick={restar}>-1</button><button onClick={reset}>reset</button></p>
    </div>
    )

    ReactDOM.render(template, appRoot)
}

render()*/
