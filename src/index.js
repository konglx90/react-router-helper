import history from './history';

const defaultBeforeRouteMiddlewares = [];

const defaultAfterRouteMiddlewares = [];

export const routeChange = to => history.push(to);

const routerMiddlewareHandler = (createPath, enhance) => (...arg) => {
    if (!history.push) throw new Error('need react router history');
    const {
        before = [],
        after = [],
    } = enhance || {};
    const locationSearch = window.location.search;
    const url = `${createPath(...arg)}${locationSearch}`;
    const beforeTasks = Array.isArray(before)
        ? before
        : [before];
    const afterTasks = Array.isArray(after)
        ? after
        : [after];
    const tasks = [
        ...defaultBeforeRouteMiddlewares,
        ...beforeTasks,
        routeChange,
        ...afterTasks,
        ...defaultAfterRouteMiddlewares,
    ];
    let goOnFlag = true;
    const next = (goOn) => {
        // 如果传入字符串，直接跳转
        if (Object.prototype.toString.call(goOn) === '[object String]') {
            history.push(goOn);
            goOnFlag = false;
        } else {
            goOnFlag = goOn === false ? goOn : true;
        }
    };
    tasks.reduce((acc, cur) => {
        if (acc) {
            cur(url, next);
        }
        return goOnFlag;
    }, goOnFlag);
};

export { history };
export default routerMiddlewareHandler;
