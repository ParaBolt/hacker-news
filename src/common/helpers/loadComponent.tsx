import { lazy } from 'react'
import { injectAsyncReducer, injectAsyncSaga } from '../../store'

export default function loadComponent(module: any) {
	return lazy(async () => {
		const reducer = await import(module.filePaths.reducer)
		injectAsyncReducer(module.key, reducer)
		const saga = await import(module.filePaths.saga)
		injectAsyncSaga(module.key, saga)
		return import(module.filePaths.component)
	})
}