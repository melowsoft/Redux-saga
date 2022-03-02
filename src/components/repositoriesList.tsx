import { useEffect, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector' 
import {useActions} from '../hooks/useAction'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../state/reducers/userReducer'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repositories)
  const user = useSelector<any>((state) => state.user.user)
  console.log(user, 'from user guy')
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getUser())
  }, [])
  useEffect(() => { 
    dispatch(getUser())
  }, [])

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  searchRepositories(term);
}

  return <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e => setTerm(e.target.value)}/>
      <button>Search</button>
    </form>
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading && data.map((name) => (
      <div key={name}>{name}</div>
    ))}
  </div>
}

export default RepositoriesList;