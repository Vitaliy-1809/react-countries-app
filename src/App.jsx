import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Details from './pages/Details'
import Homepage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {
  const [countries, setCountries] = useState([])

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path='/'>
            <Homepage
              countries={countries}
              setCountries={setCountries}
            />
          </Route>
          <Route path='/country/:name' component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  )
}

export default App