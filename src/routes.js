import React from 'react';
import AddCategory from './components/Admin/Category/AddCategory.js';
import CategoryList from './components/Admin/Category/CategoryList.js';
import AddPosts from './components/Admin/Post/AddPosts.js';
import PostList from './components/Admin/Post/PostList.js';
import PostDetail from './components/Admin/Post/PostDetail.js';
import PostCategory from './components/Client/PostCategory.js';
import Comments from './components/Admin/Post/Comments.js';
import Home from './components/Client/Home.js';
import NotFound from './components/NotFound.js';
import Login from './components/Login/Login.js';


const routes = [
	{
		path : '/categorylist',
		exact : true,
		main : ()=> <CategoryList />
	},
	{
		path : '/postcategory/:id',
		exact : true,
		main : ({match})=> <PostCategory match={match}/>
	},
	
	{
		path : '/comment',
		exact : true,
		main : ({match})=> <Comments match={match}/>
	},
	{
		path : '/category/add',
		exact : true,
		main : ({history})=> <AddCategory history={history} />
	},
	{
		path : '/category/:id/edit',
		exact : true,
		main : ({match, history})=> <AddCategory match={match} history={history}/>
	},
	{
		path : '/postlist',
		exact : true,
		main : ()=> <PostList />
	},
	{
		path : '/post/add',
		exact : true,
		main : ({history})=> <AddPosts history={history} />
	},
	{
		path : '/post/:id/edit',
		exact : true,
		main : ({match, history})=> <AddPosts match={match} history={history}/>
	},
	{
		path : '/post/:id/postdetail',
		main : ({match})=> <PostDetail  match ={match}/>
	},	
	{
		path : '/login',
		exact : true,
		main : ()=> <Login />
	},	
	{
		path : '/',
		exact : true,
		main : ()=> <Home />
	},
	{
		path : '',
		main : ()=> <NotFound />
	},
];
export default routes;