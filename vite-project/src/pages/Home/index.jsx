import react, { useState } from 'react'
import './styles.css'

import Card from '../../components/Card'

function Home() {

  const [studentName, setStudentName] = useState('')
  const [students, setStudent] = useState([])

  
  function handleAddStudent() {

    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'

      })
    }
    
    setStudent([newStudent])
  }
  

  return (
   <div className="container">
   <h1>Lista de presença</h1>
   <input 
   type="text" 
   placeholder="Digite o nome..."
   onChange={e => setStudentName(e.target.value)}
    />
   <button type="button" onClick={handleAddStudent} >
    Adicionar
    </button>

    { students.map(student => <Card name={student.name} time={student.time} />) }
   </div>
  )
}

export default Home
