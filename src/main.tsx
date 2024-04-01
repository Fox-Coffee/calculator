import React from 'react'
import ReactDOM from 'react-dom/client'
import Keyboard from './components/Keyboard';
import './App.scss';

function App(){
    return <div className='AppContainer'>
        <div className='App'>
          <Keyboard />
        </div>
        </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
