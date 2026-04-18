import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoleDiscussionPage from './pages/RoleDiscussionPage';

function ScrollManager() {
	const {pathname, hash} = useLocation();

	useEffect(() => {
		if (hash) {
			const el = document.querySelector(hash);
			if (el) {
				el.scrollIntoView({behavior: 'smooth', block: 'start'});
				return;
			}
		}
		window.scrollTo({top: 0, left: 0});
	}, [pathname, hash]);

	return null;
}

function App() {
	return (
		<div className="min-h-screen bg-ink text-paper">
			<ScrollManager />
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/roles/:roleSlug" element={<RoleDiscussionPage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
