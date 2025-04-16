import React from 'react'
import Logo from '@/components/Logo'

const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
      <div className='border-b'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto py-2'>
          <Logo/>
        </nav>
      </div>
      {children}
    </div>
  )
}

export default layout
