import React from 'react';
import { useHistory } from 'react-router-dom';
import Rating from 'react-rating';

//import font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faClock} />

const SpotItem = ({ image, mentor, duration, rating, name }) => {
    const history = useHistory()

    const handleRoute = () => {
        history.push(`/products/${name}`);
    }
    return (

        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">

            <img class="rounded-t-lg w-full h-48" src={image} alt="" />

            <div class="p-5">

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                <h5 class="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white"> {mentor}</h5>
                <div className="flex justify-between pb-3 t">
                    <p>{element} {duration}</p>
                    {
                        //use rating for dynamicaly
                        <Rating
                            readonly
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fa fa-star icon-color">
                        </Rating>
                    }
                </div>
                <p href="#" onClick={handleRoute} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-sec cursor-pointer focus:ring-4 focus:outline-none focus:bg-sec dark:news dark:hover:bg-sec dark:focus:news">
                    Read more
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </p>
            </div>
        </div>

    )
}

export default SpotItem
