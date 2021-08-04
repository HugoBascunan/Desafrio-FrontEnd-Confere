import {BrowserRouter,Switch, Route} from 'react-router-dom';
import PageCart from './Pages/PageCart'
import PageStore from './Pages/PageStore'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PageStore}/>
        <Route path="/Carrinho" exact component={PageCart}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
