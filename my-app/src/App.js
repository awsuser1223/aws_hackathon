
import './App.css';
import { MyForm } from './components'




function App() {
  return (
    <div className="app">
      <main>
    <MyForm
    onSubmit={fields => console.log(fields)}
  />
    </main>
    </div>
  );


}

export default App;
