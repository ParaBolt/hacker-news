import { lazy } from 'react'

export default {
	key: 'LoginPage',
	path: '/login',
	component: lazy(() => import('./components/LoginPage')),
}
