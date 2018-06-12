## react-router-helper

### 提供中心化路由跳转函数

[Thanks to brickspert](https://github.com/brickspert/blog/issues/3)

```js
// index.js
// Use history wrap by react-router-helper in you app
import { Router, Link, Route } from 'react-router-dom';
import { history } from 'react-router-helper';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      ...
    </Router>
  </Provider>,
  document.getElementById('root'),
);
```

```js
// routes.js
// Use history wrap by react-router-helper
import { history } from 'react-router-helper';

export function goDetail(id) {
    history.push(`/detail/${id}`);
}
```

```js
// Use goDetail anywhere
import React, { Component } from 'react';
import { goDetail } from './routes';

export class Foo extends Component {
    render() {
        return (
            <div>
                <h1 onClick={() => goDetail(90)}>react router helper demo</h1>
            </div>
        )
    }
}
```

### 引入简单中间件机制增强跳转的功能

例: 登录验证

```js
import routerMiddlewareHandler from 'react-router-helper';

// enhance
const isLogin = () => true;
const goLogin = routerMiddlewareHandler(() => '/login');
const loginRequired = (to, next = () => null) => {
    if (isLogin()) {
        next();
    } else {
        goLogin();
        next(false);
    }
}

// use loginRequired
const createDetailPath = id => `/detail/${id}`;
export const goDetail = routerMiddlewareHandler(createDetailPath, {
  before: loginRequired,
});

// so you can use goDetail anywhere with login check

```

你还可以简化写法

```js
const loginRequired = (to, next = () => null) => {
    if (isLogin()) {
        next();
    } else {
        next('/login');
    }
}
```

```js
/**
 * 其实不是必要的, 可以用以下方式替代
 * <Route
 *  exact
 *  path={`${url}/input/:rentUnitId`}
 *  render={props => (
 *      isHasCookie('sid') ? (
 *          // berfore
 *          <CommentInput {...props} apartmentId={apartmentId} />
 *          // after
 *      ) : (
 *          <Redirect to={`${urlPrefix}/login`} />
 *      )
 *  )}
 * />
 */
```

例: 默认带着 search

```js
const withSearch = (to, next = () => null) => {
    const search = window.location.search;
    const newTo = `${to}${search}`;
    next(newTo);
}
```

### Example

`npm run example`

### Build

`npm run build`