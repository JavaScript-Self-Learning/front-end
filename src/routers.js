import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, IndexRoute} from 'react-router';
import { App , Login, Content, Regist} from './App';

// browserHistory
export default (
    	<Route path="/" component={App}>
            <IndexRoute path="/" component={Login} />
		    <Route path="/content" component={Content} />
		    <Route path="/regist" component={Regist} />
		</Route>
  );