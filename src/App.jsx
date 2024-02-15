import { useState } from 'react'
import './App.css'
import { TextField, Label, Input, Text, ToggleButton } from 'react-aria-components';



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <TextField type="password" className="flex flex-col w-1/6">
        <Label>Password</Label>
        <Input />
        <Text slot="description">Password must be at least 8 characters.</Text>
      </TextField>

      <div>
      <ToggleButton>Pin</ToggleButton>
      </div>
    </>
  
  )
}

export default App
