import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import "../css/whatsapp.css"
function WhatsappIcon() {
  return (
    <>
     <div>
      <>
            <div className='CallBtn-con'>
                <div className='CallBtn'>
                    <a href="https://wa.me/91 9225102497?text=" target='blank'>
                    <FaWhatsapp />
                    </a>
                </div>
            </div>
        </>
    </div>

  </>
  )
}

export default WhatsappIcon
