import React from 'react';
import './header.scss';
import { Link, useNavigate, useHistory} from 'react-router-dom';
import DrawIcon from '@mui/icons-material/Draw';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from '../../redux/slices/authSlice'




const Header = () => {  
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authSlice.isLoggedIn);

  const onClickLogout = async () => {
    try {
      if (window.confirm('Are you sure you want to log out')) {
        dispatch(logout());
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('current_user_id');
      }
    } catch (err) {
      console.error('Error logging out', err)
    }
  }

  console.log(isAuth)

  return (
    
    <div className='header'>
        <div className='container'>
            <div className='header-wrapper wrapper'>
              <div className='header-logo'>
                 <Link to='/'> BLOG<DrawIcon className='icon'/></Link>

              </div>
              <div className='header-btns'>
                {
                    isAuth ? (
                       <>
                        <Link to='/add-post' className='btn btn-outlined btn--stripe' >Create Post</Link>
                        <button className='btn btn-error btn--stripe' onClick={onClickLogout} >Log out</button>
                        
                       </>
                    ):(
                    
                       <>
                        <Link to='/login' className='btn btn-outlined btn--stripe' >Log in</Link>
                        <Link to='/register' className='btn btn-solid btn--stripe' > Create account</Link>
                       </>
                    )
                }
               
              </div>
            </div>

        </div>

    </div>
  )
}


export default Header