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
        };

        console.log(`Books: ${JSON.stringify(props)}`)
    }
    getLibros(){
        return this.state.library.map((book, index) => {
            return <li><b>{book.title}</b> de <i>{book.author}</i></li>
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
    addLibro(){
        // -- Query Selectors
        let tituloLibro = document.querySelector('input[name="nuevolibro"]')
        let autorLibro = document.querySelector('input[name="autorlibro"]')

        // -- Push de un Libro Nuevo
        books.push({_id: this.getRandomId(), title: tituloLibro.value, author: autorLibro.value});

        // -- Component library update
        this.setState({library: books});

        // -- Reset campos de texto
        tituloLibro.value = ''; autorLibro.value = '';

        // -- Debug, display en consola con los nuevos valores de library
        console.log(`Books: ${JSON.stringify(this.state.library)}`)
    }
    getBooksLength(){
        return books.length;
    }
    render(){
        return(
            <div class="book">
            <h1>Consejero literario</h1>
            <h2>Recomendaciones personalizadas al detalle</h2>
            <p>Libros totales: { this.getBooksLength() }</p>
            <ol>{ this.getLibros() }</ol>
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