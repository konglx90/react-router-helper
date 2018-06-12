import routerMiddlewareHandler, { history } from '../src/index';
// import routerMiddlewareHandler, { history } from 'react-router-helper';
const isLogin = () => true;

// A easy jump
// export function goDetail(id) {
//     history.push(`/detail/${id}`);
// }

// export const goLogin = routerMiddlewareHandler(() => '/login');
// const loginRequired = (to, next = () => null) => {
//     if (!isLogin()) {
//         console.log('login');
//         next();
//     } else {
//         goLogin();
//         console.log('no login');
//         next(false);
//     }
// }

const loginRequired = (to, next = () => null) => {
    if (isLogin()) {
        next();
    } else {
        next('/login');
    }
}

const withSearch = (to, next = () => null) => {
    const search = window.location.search;
    const newTo = `${to}${search}`;

    next(true, newTo);
}

const createDetailPath = id => `/detail/${id}`;
export const goDetail = routerMiddlewareHandler(createDetailPath, {
  before: [withSearch, loginRequired],
})
