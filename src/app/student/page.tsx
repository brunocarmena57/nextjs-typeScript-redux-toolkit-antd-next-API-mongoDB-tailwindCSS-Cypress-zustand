/* eslint-disable react/no-unescaped-entities */
"use client"
import Student from '@/components/Student/Student'
import { useRouter } from 'next/navigation'
import { FaArrowLeftLong } from "react-icons/fa6";
import React from 'react'

const Page = () => {
    const { push } = useRouter()
    return (
        <div className='flex flex-col gap-3'>
            <span className='font-medium text-[14px] mb-[1rem] lg:hidden flex items-center gap-2 cursor-pointer' onClick={() => push('/teacher')}><FaArrowLeftLong />Ir para a página do Estudante</span>
            <h1 className='font-bold text-[22px]'>Página do Estudante</h1>
            <Student />
        </div>
    )
}

export default Page