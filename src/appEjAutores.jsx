'use strict';
let books =[
    {
        _id: 'ahfksjhfkajsdha',
        title: 'El principito',
        author: 'Antoine de Saint-Exupéry'
    },
    {
        _id: 'sdgsdg25ersfw',
        title: 'El Quijote',
        author: 'Miguel de Cervantes Saavedra'
    },
    {
        _id: '21sfasdfsdg3f',
        title: 'Platero y yo',
        author: 'Juan Ramón Jiménez'
    }
]
class Books extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            library: props.library,
            mensaje: undefined
        };

        console.log(`Books: ${JSON.stringify(props)}`)
    }
    getLibros(){
        return this.state.library.map((book, index) => {
            return <li><b>{book.title}</b> de <i>{book.author}</i> <button onClick={() => {this.eliminarLibro(book.title)}}>[Eliminar]</button></li>
        })
    }
    // ---------- NO, SOLO ES UNA PRUEBA, NO SE USARIA ESTO NUNCA XD
    getRandomId(){
        let generatedId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15), generatedIsAvailable = true;

        this.state.library.find((book)=> {
            if(book._id === this.state.library){
                generatedIsAvailable = false;
            }
        })

        if(!generatedIsAvailable)
            return this.getRandomId()

        return generatedId;
    }
    /*getAutores(){
        return this.state.library.map((book, index) => {
            return <li>{book.author}</li>
        })
    }*/
    existe(titulo){
        return books.find(book => book.title.toLowerCase() === titulo.toLowerCase())
    }
    eliminarLibro(titulo){
        console.log(titulo)
        
        //Filtrar books, devolver el array sin el libro.
        let _books = books.filter((book)=> book.title != titulo)

        // Actualizar array de books
        books = _books

        // Actualizar state de library y enviar el mensaje de libro eliminado.
        this.setState({library: _books, mensaje: `Eliminado el libro ${titulo}`})
    }
    addLibro(){
        // -- Query Selectors
        let tituloLibro = document.querySelector('input[name="nuevolibro"]')
        let autorLibro = document.querySelector('input[name="autorlibro"]')

        // -- Comprobar si titulo y autor no estan vacios
        if(!tituloLibro.value || !autorLibro.value){
            this.setState({mensaje: 'Titulo o Autor no pueden estar vacios.'})
            return;
        }

        // -- Comprobar si ya existe el libro introducido
        if(this.existe(tituloLibro.value)){
            this.setState({mensaje: `El libro '${tituloLibro.value}' ya existe!`})
            return;
        }

        // -- Push de un Libro Nuevo
        books.unshift({_id: this.getRandomId(), title: tituloLibro.value, author: autorLibro.value});

        // -- Component library update
        this.setState({library: books, mensaje: `Se ha agregado el libro <b>${tituloLibro.value}</b>`});

        // -- Reset campos de texto
        tituloLibro.value = ''; autorLibro.value = '';

        // -- Debug, display en consola con los nuevos valores de library
        console.log(`Books: ${JSON.stringify(this.state.library)}`)
    }
    getBooksLength(){
        return (this.state.library.length)<=0?`No hay libros disponibles.`:`Hay ${this.state.library.length} libros.`;
    }
    removeAll(){
        books = [];
        this.setState({library: books});
    }
    recomendarLibro(){
        let i = Math.floor(Math.random() * books.length);
        this.setState({mensaje: `La recomendación es '${books[i].title}' de '${books[i].author}'`})
    }
    getMensaje(){
        return <p>{(this.state.mensaje!=undefined)?`${this.state.mensaje}`:``}</p>
    }
    render(){
        return(
            <div class="book">
            <h1>Consejero literario</h1>
            <h2>Recomendaciones personalizadas al detalle</h2>
            <p>{ this.getBooksLength() }</p>
            <p><button onClick={()=>this.recomendarLibro()}>Recomendar libro</button></p>
            <ol>{ this.getLibros() }</ol>
            { this.state.mensaje && <p>{this.state.mensaje}</p> }
            <p><button onClick={()=>this.removeAll()}>EXTERMINAR Libros</button></p>
            <label for="nuevolibro">Titulo:</label>
            <input name="nuevolibro" type="text"/>
            <label for="autorlibro">Autor:</label>
            <input name="autorlibro" type="text"/>
            <button onClick={()=>this.addLibro()}>Nuevo Libro</button>
            </div>
        );
    }
}

ReactDOM.render(<Books library={books}/>, document.getElementById('appRoot'));