import { lazy } from 'react'
import { injectAsyncReducer, injectAsyncSaga } from '../../store'

const key = 'HackerNews'

export default {
	key,
	path: '/hacker-news',
	component: lazy(async () => {
		const module = await import('./store')
		injectAsyncReducer(key, module.reducer)
		injectAsyncSaga(key, module.saga)
		return import('./components/HackerNews')
	}),
}
