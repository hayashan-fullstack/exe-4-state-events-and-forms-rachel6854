import React, { useState } from 'react'
import { placeholder } from '@babel/types';

const App = () => {

  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',number:'0556766854' }
  ]) 
  const [ newName, setNewName ] = useState('enter a new person..')
  const [ newNumber, setNewNumber ] = useState()


  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject={name:newName ,number:newNumber}
    setPersons(persons.concat(personObject))
   
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const rows = () => persons.map( person =>
   <div style={{marginLeft:'45%'}}>
    <li style={{color:'white',fontSize:25,textAlign:'start'}}>{ person.name} : {person.number}</li>
    </div>
    
  )
  return (
    <div style={{textAlign: 'center',display: 'inline-block',width:'100%',background:'#454244',padding:200 }}>
    <br/>
      <h2 style={{color:'#D71462',fontSize:50}}>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div style={{color:'white',fontSize:25}}>
          name: <input value={newName} onChange={handlePersonChange} style={{color:'#D71462'}}/>
          <br/>
          <br/>
          phone number: <input value={newNumber} onChange={handleNumberChange} style={{color:'#D71462'}}/>
          <br/>
        </div>
        <div>
        <br/>
          <button type="submit" style={{color:'#D71462', background:'white',fontSize:18}}>add</button>
        </div>
      </form>
      <br/>
      <h2 style={{color:'#D71462',fontSize:50}}>Numbers</h2>
      <ul style={{color:'white',fontSize:20,textAlign:'center'}}>
        {rows()}
      </ul>
  
    </div>
  )
}

export default App