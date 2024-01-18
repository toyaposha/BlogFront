import { Footer, Header, Post, Profile, Sidebar } from "./components";
import { Routes, Route, Link } from "react-router-dom";
import './index.scss';
import { AddPost, Home, Login, Register, SinglePost } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfileQuery } from "./services/authApi";
import { useEffect } from "react";
import { getProfile } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();

	const storedAuthData = localStorage.getItem('token');
	const userId = localStorage.getItem('current_user_id');
	const profile = useGetProfileQuery(userId);
	const { data } = profile;
	useEffect(() => {
		if (storedAuthData) {
			dispatch(getProfile({ isLoggedIn: true, data}))
		}
	}, [data, profile]);

	console.log(data)

  return (
    <div>

   <Header/>
   
    <div className="routes">
    <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/profile/:id' element={<Profile/>}/>
                <Route path='/posts/:id' element={<SinglePost/>}/>
                <Route path='/post' element={<Post/>}/>
                <Route path='/posts/:id/edit' element={<AddPost/>}/>
                <Route path='/add-post' element={<AddPost/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>


     </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
