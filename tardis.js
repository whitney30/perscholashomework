import React,{Component} from 'react'
import './tardis1.css';

class App extends Component {
    constructor()
    {
        super();
        this.state={
            data:"Time and relative dimension in space"
        }
    }
    this.setState({data:this.state.data})l
    render()
    {
        return(
            <div newclassName="App>"
            <h3>(this.state.data</h3>
                <button onClick={()=>this.click()} >click</button>
            </div>
        )
    }
}
ChangeIt = (text) => {
    if (this.Static.tardis.caps) {
        this.setState({
            tardis: {
                name: text.to lowerCase(),
                caps: false
            }
        })
    } else {
        this.setState({
            tardis: {
                name: text.toUpperCase(),
                caps: true
            }
        })
    }
  }

  export default App;

        
    
