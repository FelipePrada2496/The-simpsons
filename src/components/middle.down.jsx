import '../styles/middle.down.css'
import relax from '../assets/images/relax.png'
import fun from '../assets/images/have-fun.jpg'
import smile from '../assets/images/Smile.jpg'
import take from '../assets/images/take-it-easy.jpg'


const MiddleDown = ( ) => {
        return(
            <section>
                <h2 className='text-title'>And remember</h2>
                <div>
                    <img src={relax} alt="Relax" className='imagen-size'/>
                    <img src={fun} alt="fun" className='imagen-size'/>
                    <img src={smile} alt="Smile" className='imagen-size'/>
                    <img src={take} alt="take" className='imagen-size'/>
                </div>
            </section>

        )

}


export default MiddleDown;