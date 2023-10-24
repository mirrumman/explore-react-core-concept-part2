import './App.css'
import Friends from './Friends';
import Users from './Users';
import Counter from './counter';
import Team from './team';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  return (
    <>
      <h2>React Core Concept2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
