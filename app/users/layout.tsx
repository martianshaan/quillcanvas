import React from 'react'

interface LayoutProps{
    children:React.ReactNode;
}
const layout = ({
    children
}:LayoutProps) => {
  return (
    <div className='flex flex-col gap y-4'>
        <nav className='bg-red-400 text-xs p-1'>
            I am navbar
        </nav>
        {children}
    </div>
  )
}

export default layout