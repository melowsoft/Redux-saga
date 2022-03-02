import {Provider} from 'react-redux';
import { createStore } from '../state'
import RepositoriesList from './repositoriesList';

const App = () => {
  return <Provider store={createStore()}>
    <div>
      <h1>Search For a Package</h1>
      <RepositoriesList />
    </div>
  </Provider>;
  
}

export default App;
