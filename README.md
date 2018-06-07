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

### 引入简单中间价机制增强跳转的功能
