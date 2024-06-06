"use client"

import { Spin } from 'antd'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


export default function Home() {
  const path = usePathname()
  const { push } = useRouter()

  useEffect(() => {
    if (path === '/') {
      push('/teacher')
    }



  }, [path, push])
  return (
    <div className='flex justify-center items-center mt-[4rem]'>
      <Spin />
    </div>
  )
}
