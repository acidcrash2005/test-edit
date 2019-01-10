//Core
import { applyMiddleware, compose } from 'redux';
import { createLogger } from  'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title: (action) => {
            return action.error ? 'firebrick' : 'deepskyblue';
        },
        prevState: () => 'dodgerblue',
        action:    () => 'greenyellow',
        nextState: () => 'olivedrab',
        error:     () => 'firebrick',
    },
});


const middleware = [  ];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = __DEV__
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

export { enhancedStore};

