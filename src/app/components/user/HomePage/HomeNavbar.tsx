import choufer from 'src/assets/choufer.jpg';
import {Menu} from '@mui/icons-material'

const HomeNavbar = () => {
    return (
        <nav className='bg-black py-4'>
            <div className='container max-auto px-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='flex items-center mx-5'>
                            <img src={choufer} alt="Logo"/>
                        </div>
                        <div>
                            <ul className='flex items-center'>
                                <li className='mr-6'>
                                    <a href="#" className='text-white hover:text-blue-200'>
                                        iCar s1
                                    </a>
                                </li>
                                <li className='mr-6'>
                                    <a href="#" className='text-white hover:text-blue-200'>
                                        iCar electric
                                    </a>
                                </li>
                                <li className='mr-6'>
                                    <a href="#" className='text-white hover:text-blue-200'>
                                        iCar futureFactory
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div>
                        <button className='bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-3'>
                            Book an iCar
                        </button>

                        <button className='bg-white text-black hover:bg-gray-300 text-sm font-semibold px-4 py-3 ml-5'>
                            Free S1 Test Ride
                        </button>

                        <Menu></Menu>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HomeNavbar