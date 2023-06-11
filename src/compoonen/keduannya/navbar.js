import gambar from './toko-kantin.png'
import './navbar.css'

const navbar = () => {
    return ( 
       <div className="navbar">
                <img src={gambar} alt=''/>
                <button>Bergabung Sekarang</button>
       </div>
     );
}
 


export default navbar;