import logo from './logo.svg';
import './App.css';
import ModelPopup from './components/model-box/ModelPopup';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false)
  const handleModelBox = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className="App">
      <button onClick={handleModelBox}> Button</button>
      <ModelPopup state={open} size="md" status="info"  close={handleClose} title="Model popup">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </ModelPopup>

    </div>
  );
}

export default App;
