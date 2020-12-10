'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Description from '/modules/descriptionModule.js';
/*class Description extends React.Component {
    render(){
        return <p>{this.props.texto}</p>
    }
}
class Header extends React.Component {
    constructor(props){
        super(props)
        this.props = {
            titulo: props.titulo
        }
    }
    render(){
        return <h1>{this.props.titulo}</h1>
    }
}

class Boton extends React.Component {
    render(){
        return <button onClick={this.props.accion}>{this.props.nombre}</button>
    }
}

class Books extends React.Component {
    render(){
        return <p>Aquí van los libros</p>
    }
}

class AddBook extends React.Component {
    render(){
        return <p>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" />
            <label htmlFor="autor">Autor</label>
            <input type="text" name="autor" />
            <button onClick={()=>DoSomething()}>Agregar Libro</button>
        </p>
    }
}

class ConsejeroApp extends React.Component {
    render(){
        return (
            <div>
            <Header titulo="Consejero literario digital" />
            <Description texto ="Te asesoro sobre entidades alfanuméricas" />
            <Boton nombre="Choose Book" /><Boton nombre="Delete Books" />
            <Books />
            <AddBook />
            </div>
        )
    }
}

ReactDOM.render(<ConsejeroApp />, document.querySelector('#appRoot'))*/

var Contador = function (_React$Component) {
    _inherits(Contador, _React$Component);

    function Contador(props) {
        _classCallCheck(this, Contador);

        var _this = _possibleConstructorReturn(this, (Contador.__proto__ || Object.getPrototypeOf(Contador)).call(this, props));

        _this.incrementar = _this.incrementar.bind(_this);
        _this.decrementar = _this.decrementar.bind(_this);
        _this.resetear = _this.resetear.bind(_this);

        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Contador, [{
        key: 'incrementar',
        value: function incrementar() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'decrementar',
        value: function decrementar() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'resetear',
        value: function resetear() {
            this.setState(function (prevState) {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                React.createElement(
                    'button',
                    { onClick: this.incrementar },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.decrementar },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.resetear },
                    'reset'
                ),
                React.createElement(
                    'p',
                    null,
                    'Tiempo: ',
                    this.state.count
                )
            );
        }
    }]);

    return Contador;
}(React.Component);

var CounterApp = function (_React$Component2) {
    _inherits(CounterApp, _React$Component2);

    function CounterApp() {
        _classCallCheck(this, CounterApp);

        return _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).apply(this, arguments));
    }

    _createClass(CounterApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Contador'
                ),
                React.createElement(Contador, null)
            );
        }
    }]);

    return CounterApp;
}(React.Component);

ReactDOM.render(React.createElement(CounterApp, null), document.querySelector('#appRoot'));
