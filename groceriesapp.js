import React , { usestate} from 'react';
import './App.css';

function App() {
    const [list, setlist] = useState([]);
    const [inputData, setInputData] = useState('');

    const handleAddItem = () => {
        const newList = [...list, {title: inputData}]
        setList(newList);
        setInputData('');
        console.log(list)
    }
    
    return (
        <div className="App">
            <div className='input'>
            <input type='text' value={inputData} onChange={(event) => setInputData(event.target.value)}/>
            <input type='button' value="ADD" onClick={() => handleAddItem()}/>
            </div>
        </div> className= 'list'>

     </div>
        </div>
    );
}