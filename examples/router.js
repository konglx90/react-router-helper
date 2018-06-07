import history from '../src/history';
import routerMiddlewareHandler from '../src/index';

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
        // goLogin();
        console.log('no login');
        next(false);
    }
}

const createDetailPath = id => `/detail/${id}`;
export const goDetail = routerMiddlewareHandler(createDetailPath, {
  before: loginRequired,
})
