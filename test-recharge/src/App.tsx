import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LejaRechargeClient } from 'leja-recharge-node-sdk'

function App() {
  const [count, setCount] = useState(0)

  const client = new LejaRechargeClient({
    clientId: 'LEJA17D7',
    apiKey: 'leja_test_bf6379ce72222f7ec371a0d7abcae3a516bafd4ee4aa09e81caeed92a85e9c56_1741161481_07c1f0d584902d33ae6887002a81fbd6bcf832343f43225c43b4d7d8bfd45b43'
  });

  console.log('client', client);
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
