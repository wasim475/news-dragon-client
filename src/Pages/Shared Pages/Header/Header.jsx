
import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='w-1/2 mx-auto text-center'>
            <img src={logo}/>
            <p className='mt-2 mb-2'>Journalism Without Fear or Favour</p>
            <p className='text-lg'>{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;