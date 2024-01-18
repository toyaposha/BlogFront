import React from 'react';
import {Skeleton} from '@mui/material';
import {Stack} from '@mui/material';

const PostSceleton = () => {
  return (
    <div className='skeleton'>
        <Stack spacing={1}>
        <Skeleton animation='wave' variant='rounded' width='100%' height={300} />
             <div className='skeleton-info'>
                 <div className='skeleton-user'>
                    <Skeleton variant='circular' width={40} height={40} style={{marginRight: 10}}/>
                    <div>
                        <Skeleton variant='text' width={60} height={20} />
                        <Skeleton variant='text' width={100} height={15} />
                    </div>
                 </div>
                 <div className='skeleton-bottom'>
                    <Skeleton variant='text' width='80%' height={20}/>
                    <div className='tags'>
                 <Skeleton variant='text' width={40} height={20}/>
                 <Skeleton variant='text' width={40} height={20}/>
                 <Skeleton variant='text' width={40} height={20}/>
                 </div>
                 </div>
                
             </div>
            
        </Stack>
       
        </div>
  )
}

export default PostSceleton