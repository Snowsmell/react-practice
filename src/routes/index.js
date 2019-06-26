import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllComponents from '../views'


import routeConfig from './config'

export default class CRoute extends React.Component {
  render() {
    let arr = Array.prototype.concat.apply([], routeConfig.menus.map(item => item.children))
    return (
      <Switch>
        {
          arr.map(r => {
            const route = r => {
              const Component = AllComponents[r.component]                
              return (
                <Route 
                  exact
                  key={r.index}                    
                  path={r.index}
                  component={Component}
                ></Route>
              )
            }
            return route(r)
          })
        }
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    )
  }
}
