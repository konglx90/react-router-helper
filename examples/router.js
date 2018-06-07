import routerMiddlewareHandler, { history } from '../src/index';
// import routerMiddlewareHandler, { history } from 'react-router-helper';

// A easy jump
// export function goDetail(id) {
//     history.push(`/detail/${id}`);
// }

// enhance

const isLogin = () => true;
const loginRequired = (to, next = () => null) => {
    if (!isLogin()) {
        console.log('login');
        next();
    } else {
        goLogin();
        console.log('no login');
        next(false);
    }
}

// const createLoginPath = () => `/login`;
export const goLogin = routerMiddlewareHandler(() => '/login');

const createDetailPath = id => `/detail/${id}`;
export const goDetail = routerMiddlewareHandler(createDetailPath, {
  before: loginRequired,
})
