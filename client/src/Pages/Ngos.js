import React from 'react'
import Layout from '../Layouts/Layouts';
import DonationCategoryCard from '../Components/DonationCategoryCard';
import { Link ,useNavigate} from 'react-router-dom'

function Ngos() {
    const navigate = useNavigate();

    const handleCreateCampign =()=>{
        navigate('/createCampign')
    }
  return (
    <Layout>
        <div className='flex flex-col md:flex-row gap-10 justify-center mt-20 '>
            <button onClick={handleCreateCampign} className='w-full md:w-fit p-10 bg-white rounded-xl shadow-2xl hover:bg-orange-500 hover:text-white'>Create Campign</button>
            <button className='w-full md:w-fit  p-10 bg-white rounded-xl shadow-2xl hover:bg-orange-500 hover:text-white'>Book donations</button>
            <button className='w-full md:w-fit p-10 bg-white rounded-xl shadow-2xl hover:bg-orange-500 hover:text-white'>Hire Volunteers</button>
            <button className='w-full md:w-fit p-10 bg-white rounded-xl shadow-2xl hover:bg-orange-500 hover:text-white'>Upload Memories</button>

        </div>
        <div>
            <h3 className='text-3xl text-center mt-20'>Donations details</h3>



            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-20">
    <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
               
            </tr>
        </tbody>
    </table>
</div>

        </div>
    </Layout>
  )
}

export default Ngos