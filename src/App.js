import React, { lazy, Suspense, useContext } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';
import Context from './Context';

const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));
const Favs = lazy(() => import('./pages/Favs'));
const User = lazy(() => import('./pages/User'));
const NotRegisteredUser = lazy(() => import('./pages/NotRegisteredUser'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {
	const { isAuth } = useContext(Context);

	return (
		<Suspense fallback={<div />}>
			<GlobalStyles />
			<Router>
				<Logo />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pet/:categoryId' element={<Home />} />
					<Route path='/detail/:detailId' element={<Detail />} />
					<Route
						path='/login'
						element={
							isAuth ? <Navigate to='/' replace /> : <NotRegisteredUser />
						}
					/>
					<Route
						path='/favs'
						element={isAuth ? <Favs /> : <Navigate to='/login' replace />}
					/>
					<Route
						path='/user'
						element={isAuth ? <User /> : <Navigate to='/login' replace />}
					/>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<NavBar />
			</Router>
		</Suspense>
	);
};
