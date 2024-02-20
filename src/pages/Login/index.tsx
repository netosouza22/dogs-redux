import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchToken } from "../../store/reducers/login/loginSlice";

export default function Login() {
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(username, password)

    dispatch(fetchToken({username, password}))


  }

  return <div>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={username} onChange={({target}) => setEmail(target.value)} />
      <input type="password" value={password} onChange={({target}) => setPassword(target.value)} />
      <button>Submit</button>
    </form>
  </div>
}