
import { AiOutlineDelete } from 'react-icons/ai';

// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert';

import Heading from './Heading';
import { useHistory } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
const ManageProdcuts = () => {
    const [orders, setOrder] = useFetch()
    const history = useHistory()
    //handle delete 
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to Delete')
        if (proceed) {
            const url = `https://whispering-retreat-71950.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0)
                        swal("Deleted", "Delete Successfully!", "Deleted");
                    const remainingUsers = orders.filter(user => user._id !== id)
                    setOrder(remainingUsers)
                })
        }

    }
    const handleRoute = () => {
        history.push('/add/manage-product');

        swal("success", "User Approve", "success")
    }
    return (
        <div>

            {/* heading   */}
            <Heading text="Manage All Job News" />
            <h2 className="text-center">Total {orders.length} Job Number</h2>
            {/* All travel places  */}

            <div className="flex flex-col my-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden sm:rounded-lg shadow-md">
                            <table className="min-w-full">
                                <thead className="bg-primary poppins">
                                    <tr>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                                            Job Name
                                        </th>

                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                                            Job Location
                                        </th>

                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">Action</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(item => (
                                        <tr className="bg-white border-b poppins" key={item._id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {item.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {item.location}
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                                                {/* <Link to={`/dashboard/manage-prodcut/`}>
                                                    <FcApproval className="cursor-pointer text-2xl text-green-600" onClick={handleRoute} />
                                                </Link> */}
                                                <div className="flex items-center justify-center space-x-3">
                                                    <AiOutlineDelete className="cursor-pointer text-2xl text-red-600" onClick={() => handleDelete(item._id)} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManageProdcuts