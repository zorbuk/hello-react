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

class Contador extends React.Component {
    constructor(props){
        super(props)
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.resetear = this.resetear.bind(this)

        this.state = {
            count: 0
        }
    }
    incrementar(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            }
        })
    }
    decrementar(){
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            }
        })
    }
    resetear(){
        this.setState((prevState)=>{
            return {
                count: 0
            }
        })
    }
    render(){
        return (
            <p>
                <button onClick={this.incrementar}>+1</button>
                <button onClick={this.decrementar}>-1</button>
                <button onClick={this.resetear}>reset</button>
                <p>Tiempo: {this.state.count}</p>
            </p>
        )
    }
}

class CounterApp extends React.Component {
    render(){
        return (
            <div>
            <h1>Contador</h1>
            <Contador />
            </div>
        )
    }
}

ReactDOM.render(<CounterApp />, document.querySelector('#appRoot'))