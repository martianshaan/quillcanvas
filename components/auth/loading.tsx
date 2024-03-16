import React from 'react'
import Image from 'next/image'

const Loading = () => {
    return (
        <div className='h-full w-full flex flex-col
     justify-center items-center'>
            <Image
                src="/QuillLogo.svg"
                alt="logo"
                width={220}
                height={220}
                className='animate-pulse duration-700'
            />
        </div>
    )
}

export default Loading;