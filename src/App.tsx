import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/router'

function App() {
// const count = useSelector((state: RootState) => state.counter.value)
// const dispatch = useDispatch()

  return (
    // <>
    //   <h1>Hello Redux</h1>

    //   <div>Total: <h2>{count}</h2></div>
    //   <div>
    //     {/* passa por dentro a action function ativada increment() */}
    //     <button onClick={() => dispatch(increment())}>incrementar</button>
    //     <button onClick={() => dispatch(decrement())}>decrementar</button>
    //   </div>
    // </>
    <RouterProvider router={router} />
  )
}

export default App
