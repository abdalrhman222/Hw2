import react,{Component} from 'react'
import "./App.css"

class Num extends Component {
    constructor(){
        super()
        this.state = {
            Num : 0 
        };
        this.addOne = this.addOne.bind(this);
        this.minueOne = this.minueOne.bind(this);
        this.Clear = this.Clear.bind(this)
    }
    addOne(){
        this.setState (number => {
            return{
                Num : number.Num + 1
            }
        })
    }
    minueOne(){
        this.setState(number => {
            return{
                Num : number.Num -1
            }
        })
    }
    Clear(){
        this.setState(number => {
            return {
                Num : 0
            }
        })
    }
    render(){
        return(
            <div>
                <h1 id =  "header1">results : {this.state.Num}</h1>
                <button onClick = {this.addOne} className = 'Num'>+ </button>
                <br></br>
                <button onClick = {this.minueOne} className = 'Num'>-</button>
                <br></br>
                <button onClick = {this.Clear} className = 'Num'>0</button>

            </div>
        )
    }
    
}

export default Num ;