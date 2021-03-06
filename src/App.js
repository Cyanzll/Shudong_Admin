import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Loading } from './style';
import { Spin } from 'antd';

/* 懒加载 */
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const Admin = lazy(() => import('./pages/admin'));
const Forget = lazy(() => import('./pages/forget'));
const Reset = lazy(() => import('./pages/reset'));


/* 路由鉴权 */
// wrapper with render Props ( HOC? )
function AuthRoute({children, ...rest}) {
  const isLogin = localStorage.getItem('Token') > Date.now() ? true : false;
  return (
    <Route 
      {...rest}
      render={({location}) => isLogin ? children : <Redirect to={{pathname: "/login", state: {from: location}}}/>}
    />
  )
}

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading> <Spin size="large" /> </Loading>}>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/forget" component={Forget}/>
          <Route path="/reset" component={Reset}/>
          <AuthRoute path="/">
            <Admin />
          </AuthRoute>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
