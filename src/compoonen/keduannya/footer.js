import './navbar.css'
import gambar2 from './icons8-instagram-48.png'
import gambar3 from './icons8-whatsapp-48.png'
import gambar4 from './icons8-youtube-48.png'
const Footer = () => {
    return ( 
       <div className="footer">
        <div className='text-footer'>
                <h1>Kantor Utama</h1>
                <p>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263
Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p>
<p>Nomer Telfon (Kantor Utama) : (022) 7351 6650</p>
<p>Email: pt.lskk@gmail.com</p>
       </div>
   
<div className='icon-footer'>
<h1>Sosial Media</h1>
<img src={gambar2} alt=''/>
<img src={gambar3} alt=''/>
<img src={gambar4} alt=''/>
</div>
       </div>
     );
}
 


export default Footer;