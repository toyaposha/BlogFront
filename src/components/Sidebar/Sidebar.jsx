import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  noAvatar from '../../img/noAvatar.jpg'
import './sidebar.scss';
import TagIcon from '@mui/icons-material/Tag';
import { useGetTagsQuery } from '../../services/tagsApi';
import { useGetPostsQuery } from '../../services/postApi';
import { useLocation } from 'react-router-dom';

const Sidebar = ({tags, posts}) => {
  // const [tags, setTags] = useState();

  // const tagsQuery = useGetTagsQuery();

  // const { posts } = useParams();

  // const tagsList =tagsQuery.data;
  // const tagsIsFetching=tagsQuery.tagsIsFetching

//   useEffect(()=>{
//     if(tagsList){
//      setTags(tagsList)
//     }
//  },[tagsList, tagsIsFetching])


// console.log(selectedTag)
 const uniqeTags = Array.from(new Set(tags))
 //new set убирает повторяющиеся

 
  return (
    <div className='sidebar'>
      <div className='tags-block side-block'>
        <div className='tags-block-title'>Tags</div>
          <ul>
           {
            uniqeTags?.map(tag=> <li>
              <div>  
                <TagIcon/> <Link to={`/posts/${tag}`}>{tag}</Link>
             </div>
              </li>
              
            )
           }
           
          </ul>
      </div>
      <div className='comments-block side-block'>
        <div className='comments-block-title'> Comments</div>
        <ul>
          <li>
            <div className='comments-block-item'>
              <img src={noAvatar}/>
              <div className='comments-block-item-info'>
                     <div className='comments-block-item-name'> Petya Li </div>   
                     <div className='comments-block-item-txt'> hi how are you , great!</div>

              </div>
          
            </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar