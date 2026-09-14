import { TbCurrencyTaka } from 'react-icons/tb';
import logo from '../assets/logo.png'



const Nav = ({coin}: {coin: number}) => {
    
    

    return (
        <nav className='bg-[#F8F8F8] sticky top-0 '>
            <div className='flex justify-between w-full max-w-7xl mx-auto'>
                <img src={logo} alt="" />

                <ul className='flex gap-4 items-center'>
                    <li><a className='link link-hover' href="#home">Home</a></li>
                    <li><a className='link link-hover' href="">Fixture</a></li>
                    <li><a className='link link-hover' href="">Teams</a></li>
                    <li><a className='link link-hover' href="">Schedules</a></li>
                </ul>

                <h2 className='flex items-center font-bold text-[25px]'><TbCurrencyTaka />{coin}</h2>
            </div>
        </nav>
    );
};

export default Nav;