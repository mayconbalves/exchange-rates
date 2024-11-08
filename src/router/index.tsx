import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import HomePage from '~/pages/Home'
import routes from './routes'

const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <HashRouter>
        <Switch>
          <Route exact path={routes.homepage} component={HomePage} />

          <Route exact path="*">
            <Redirect to={routes.homepage} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default Router
