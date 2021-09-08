import React , { useState} from 'react';
import './App.css';

export default function Groceries() {
    const [list, setList] = useState([]);
    const [inputData, setInputData] = useState('');

    const handleAddItem = () => {
        const newList = [...list, {title: inputData}]
        setList(newList);
        setInputData('');
        console.log(list)
    }
    
    const handleRemoveItem= (index) => {
        const newList = [];
        for (let i = 0; i < list.length; i++) {
            newList.push(list[i]);
        }

    }
    setList(newList);
}

    return (
        <div className="App">
            <h1>Grocery list</h1>
            <div className='input'>
            <input type='text' value={inputData} onChange={(event) => setInputData(event.target.value)}/>
            <input type='button' value="ADD" onClick={() => handleAddItem()}/>
            </div>
        </div>
        <div className='list'></div>
        {list.map((item, index) => {
            return (
                <div>
                <p key={index} onClick={() => handleRemoveItem()}>{item.title}</p>
                </div>
        }

        }

     
        
    );
}