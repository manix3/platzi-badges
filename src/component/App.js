import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './HomePage';
import NotFound from './NotFound';
import Layout from './Layout';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';

function App(){
    return(
        <BrowserRouter>
          <Layout>
            <Switch>
            <Route exact path="/badges" component={Badges}/>
            <Route exact path="/badgesnew" component={BadgeNew} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound}/>
            </Switch>
          </Layout>
        </BrowserRouter>
    )
}
export default App;