import React from 'react'
import './App.scss';
import Articles from './components/MainPage/Articles';
import Navigation from './components/Nav/Navigation'
import Login from './components/Login/Login'
import RecentArticle from './components/Article/RecentArticle';
import { Routes, Route } from "react-router-dom";
import MyArticles from './components/MyArticles/MyArticles';
import NewArticle from './components/NewArticle/NewArticle'

export default function App() {
	return (
		<>
			<Navigation />

			<div className="container">
				<Routes>
					<Route index element={<Articles />} />
					<Route path="/login" element={<Login />} />
					<Route path="/article" element={<RecentArticle />} />

					<Route path="/my-articles" element={<MyArticles />} />
					<Route path="/create-new-article" element={<NewArticle />} />
				</Routes>
			</div>

		</>
	)
}