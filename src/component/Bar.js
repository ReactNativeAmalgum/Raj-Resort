
import "../css/bar.css"
import Zoom from 'react-reveal/Zoom';
import { imagePath } from "../images/imagePath";
const bar = imagePath.jpeg_optimizer_bar_img

function Bar() {
    return (
        <>
            <section className='bar-sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <Zoom>
                                <section>
                                    <div className='baar-img'>
                                        <img src={bar} />
                                    </div>
                                </section>
                            </Zoom>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='content-bar'>
                                <p className='paragraph-bar'>
                                    <h3>Welcome To Raj resort bar</h3>  Nestled in the serene landscapes of Palghar, the Resort in Palghar offers a vibrant bar where guests unwind amidst laughter and clinking glasses. Whether under the sun's warmth or beneath the stars, this sanctuary within the Resort in Palghar invites relaxation amidst nature's beauty.
                                    <p className='second-par'> Guests enjoy expertly crafted cocktails and live music, a perfect retreat after exploring Palghar's natural wonders.  </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bar
