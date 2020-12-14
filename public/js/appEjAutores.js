'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var books = [{
    _id: 'ahfksjhfkajsdha',
    title: 'El principito',
    author: 'Antoine de Saint-Exupéry'
}, {
    _id: 'sdgsdg25ersfw',
    title: 'El Quijote',
    author: 'Miguel de Cervantes Saavedra'
}, {
    _id: '21sfasdfsdg3f',
    title: 'Platero y yo',
    author: 'Juan Ramón Jiménez'
}];

var Books = function (_React$Component) {
    _inherits(Books, _React$Component);

    function Books(props) {
        _classCallCheck(this, Books);

        var _this = _possibleConstructorReturn(this, (Books.__proto__ || Object.getPrototypeOf(Books)).call(this, props));

        _this.state = {
            library: props.library,
            mensaje: undefined
        };

        console.log('Books: ' + JSON.stringify(props));
        return _this;
    }

    _createClass(Books, [{
        key: 'getLibros',
        value: function getLibros() {
            return this.state.library.map(function (book, index) {
                return React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'b',
                        null,
                        book.title
                    ),
                    ' de ',
                    React.createElement(
                        'i',
                        null,
                        book.author
                    )
                );
            });
        }
        // ---------- NO, SOLO ES UNA PRUEBA, NO SE USARIA ESTO NUNCA XD

    }, {
        key: 'getRandomId',
        value: function getRandomId() {
            var _this2 = this;

            var generatedId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15),
                generatedIsAvailable = true;

            this.state.library.find(function (book) {
                if (book._id === _this2.state.library) {
                    generatedIsAvailable = false;
                }
            });

            if (!generatedIsAvailable) return this.getRandomId();

            return generatedId;
        }
        /*getAutores(){
            return this.state.library.map((book, index) => {
                return <li>{book.author}</li>
            })
        }*/

    }, {
        key: 'existe',
        value: function existe(titulo) {
            return books.find(function (book) {
                return book.title.toLowerCase() === titulo.toLowerCase();
            });
        }
    }, {
        key: 'addLibro',
        value: function addLibro() {
            // -- Query Selectors
            var tituloLibro = document.querySelector('input[name="nuevolibro"]');
            var autorLibro = document.querySelector('input[name="autorlibro"]');

            // -- Comprobar si titulo y autor no estan vacios
            if (!tituloLibro.value || !autorLibro.value) {
                this.setState({ mensaje: 'Titulo o Autor no pueden estar vacios.' });
                return;
            }

            // -- Comprobar si ya existe el libro introducido
            if (this.existe(tituloLibro.value)) {
                this.setState({ mensaje: 'El libro \'' + tituloLibro.value + '\' ya existe!' });
                return;
            }

            // -- Push de un Libro Nuevo
            books.unshift({ _id: this.getRandomId(), title: tituloLibro.value, author: autorLibro.value });

            // -- Component library update
            this.setState({ library: books, mensaje: 'Se ha agregado el libro <b>' + tituloLibro.value + '</b>' });

            // -- Reset campos de texto
            tituloLibro.value = '';autorLibro.value = '';

            // -- Debug, display en consola con los nuevos valores de library
            console.log('Books: ' + JSON.stringify(this.state.library));
        }
    }, {
        key: 'getBooksLength',
        value: function getBooksLength() {
            return this.state.library.length <= 0 ? 'No hay libros disponibles.' : 'Hay ' + this.state.library.length + ' libros.';
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            books = [];
            this.setState({ library: books });
        }
    }, {
        key: 'recomendarLibro',
        value: function recomendarLibro() {
            var i = Math.floor(Math.random() * books.length);
            this.setState({ mensaje: 'La recomendaci\xF3n es \'' + books[i].title + '\' de \'' + books[i].author + '\'' });
        }
    }, {
        key: 'getMensaje',
        value: function getMensaje() {
            return React.createElement(
                'p',
                null,
                this.state.mensaje != undefined ? '' + this.state.mensaje : ''
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                { 'class': 'book' },
                React.createElement(
                    'h1',
                    null,
                    'Consejero literario'
                ),
                React.createElement(
                    'h2',
                    null,
                    'Recomendaciones personalizadas al detalle'
                ),
                React.createElement(
                    'p',
                    null,
                    this.getBooksLength()
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this3.recomendarLibro();
                            } },
                        'Recomendar libro'
                    )
                ),
                React.createElement(
                    'ol',
                    null,
                    this.getLibros()
                ),
                this.state.mensaje && React.createElement(
                    'p',
                    null,
                    this.state.mensaje
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this3.removeAll();
                            } },
                        'EXTERMINAR Libros'
                    )
                ),
                React.createElement(
                    'label',
                    { 'for': 'nuevolibro' },
                    'Titulo:'
                ),
                React.createElement('input', { name: 'nuevolibro', type: 'text' }),
                React.createElement(
                    'label',
                    { 'for': 'autorlibro' },
                    'Autor:'
                ),
                React.createElement('input', { name: 'autorlibro', type: 'text' }),
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this3.addLibro();
                        } },
                    'Nuevo Libro'
                )
            );
        }
    }]);

    return Books;
}(React.Component);

ReactDOM.render(React.createElement(Books, { library: books }), document.getElementById('appRoot'));
