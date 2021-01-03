import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { reducer as formReducer } from 'redux-form'
import { all } from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = { form: formReducer }
const injectedReducers = new Map()
const injectedSagas = new Map()

function* rootSaga() {
	yield all([])
}

const store = createStore(
	createReducer('root', rootReducer),
	composeWithDevTools(applyMiddleware(sagaMiddleware))
)

injectAsyncSaga('root', rootSaga)

function createReducer(key: string, reducer: any) {
	injectedReducers.set(key, reducer)
	return combineReducers(Object.fromEntries(injectedReducers))
}

function injectAsyncReducer(key: string, reducer: any) {
	store.replaceReducer(createReducer(key, reducer))
}

function injectAsyncSaga(key: string, saga: any) {
	if (!injectedSagas.has(key)) injectedSagas.set(key, saga)
	sagaMiddleware.run(saga)
}

export default store
export { injectAsyncReducer, injectAsyncSaga }