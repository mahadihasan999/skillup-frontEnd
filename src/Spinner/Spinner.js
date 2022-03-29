import React from 'react';
import '../Spinner/Spinner.css'
const Spinner = () => {
    return (
        <div>
            <div class="flex items-center justify-center mt-20 ">
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    );
};

export default Spinner;