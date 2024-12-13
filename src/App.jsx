import {useDispatch, useSelector} from "react-redux";

function App() {
    const count = useSelector(state => state.count.count)
    const dispatch = useDispatch()
  return (
    <>
      <h1>Counter App</h1>
        <h4>{count}</h4>
        <div className="card">
            <button onClick={() => dispatch({type: "INCREMENT"})} className="button">
                Increment
            </button>

            <button onClick={() => dispatch({type: "RESET"})} className="button">Reset</button>

            <button onClick={() => dispatch({type: "DECREMENT"})} className="button">
                Decrement
            </button>
        </div>
    </>
  )
}

export default App
