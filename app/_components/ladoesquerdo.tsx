import Image from 'next/image'
import React from 'react'

function LadoEsquerdo() {
  return (
    <div className='w-1/2'>
        
    <Image
      src="/hero.svg"
     width={300}
     height={300}
      alt="Picture of the author"
    />

    </div>
  )
}

export default LadoEsquerdo
