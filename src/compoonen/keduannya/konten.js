import './navbar.css'
import gambar1 from './Gambar1.png'
import gambar2 from './Gambar3.png'


const Konten = () => {
    return ( 
       <div className="konten">
              
                <div className='kantin-online'>
                <img src={gambar1} alt=''/>
                <div className='text-kantin'>
                <h1>Sistem Kantin Online </h1>
                <p>Sistem kantin online mengintegrasikan system payment digitail L-pay yang memungkinkan siswa untuk melakukan pembayaran di kantin secara elektronik melalui L-pay. </p>
                <p>Siswa hanya perlu memilih produk dan selanjutnya siswa melakukan scan QR code untuk pembayaran melalui L-pay maupun dengan kartu emoney.</p>
               </div>
               </div>

               <div className='toko-online'>
               <div className='text-toko'>
                <h1>Sistem Toko Online</h1>
                <p>Sistem ini dirancang untuk mendukung bisnis proses toko secara online. Sistem toko online ini adalah majemuk yang merupakan gabungan konsep elementer lain. Sistem ini menarik karena memungkinkan pengembangan ke fitur-fitur lain yang mulai muncul di toko-toko modern seperti yang sudah banyak digunakan saat ini.</p>
               </div>
               <img src={gambar2} alt=''/>
               </div>
       </div>
     );
}
 


export default Konten;