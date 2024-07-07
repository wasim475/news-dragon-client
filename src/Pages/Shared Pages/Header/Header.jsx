
import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <img src={logo}/>
            <p>Journalism Without Fear or Favour</p>
            <p className='text-lg'>{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;