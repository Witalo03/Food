import './navbar.css'
import logo from '../../../assets/logo.png'
import bag from '../../../assets/bag.png'

function Navbar() {
    return (
        <div className='navbar'>
            <img src={logo} className='logotipo' alt="Logotipo" />

            <div className='menu'>
                <a href="#">Historico </a>
                <button className='btn btn-red'>
                    <img className='icon' src={bag}/>
                    Sacola
                </button>
            </div>
        </div>
    )
}

export default Navbar