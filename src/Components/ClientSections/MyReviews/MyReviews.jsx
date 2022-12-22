import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import AllComments from '../../Homes/AllComments/AllComments';
import LoadingPage from '../../LoadingPage/LoadingPage';

const MyReviews = () => {

    const { user, loading } = useContext(AuthContext);
    const [allComments, setAllcomments] = useState([]);
    const [stateChange, setStateChange] = useState(true);
    // console.log(allComments);




    // read / show comment -----------
    useEffect(() => {
        fetch(`https://sofi-visa-hub-server-sofiuzzamansofi.vercel.app/commentsbyuser/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAllcomments(data.data);
            })
            .catch(error => console.log(error))
    }, [stateChange]);



    if (!allComments) {
        return <LoadingPage />
    };





    return (
        <div>
            <p className='text-4xl text-center py-4'>You Have total :{allComments?.length ? allComments?.length : 0} Reviews.</p>
            {
                allComments?.map(comment => <AllComments key={comment._id} comment={comment} setStateChange={setStateChange} stateChange={stateChange} >

                    {/* <>
                        <button onClick={handlecommentchange} type="button" className="px-4 py-2 border rounded-md dark:border-gray-100 hover:bg-cyan-500"> Edit Review</button>
                        <button onClick={handlecommentDelete} type="button" className="px-4 py-2 border rounded-md dark:border-gray-100 hover:bg-rose-500">Delet Review</button>
                    </> */}
                </AllComments>)
            }

        </div>
    );
};

export default MyReviews;