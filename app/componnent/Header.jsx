"use client"

import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useAllcontext } from '../context/allcontext';
import Container from "./Container";
import Marquee from './Marquee';

export default function Header() {

  const [isshow, setisshow] = useState(false);
  const { isloading, setisloading } = useAllcontext();




  return (
    <div className='w-screen bg-gray-700'>
      <Marquee />
      <Container>
        <div className='flex justify-between items-center py-3 text-gray-200 shadow-sm'>
          <div>gsdfg</div>
          <div className='flex items-center gap-3'>
            <div className='hidden lg:flex items-center gap-1 text-xl font-semibold'>
              <Link className='px-3 py-2 rounded-md HoverNavLink' href={'/'}>হোম</Link>
              <Link className='px-3 py-2 rounded-md HoverNavLink' href={'/'}>কোর্স </Link>
              <Link className='px-3 py-2 rounded-md HoverNavLink' href={'/'}>ফ্রি কোর্স</Link>
              <Link className='px-3 py-2 rounded-md HoverNavLink' href={'/'}>ফ্রি এক্সাম</Link>
              <Link className='px-3 py-2 rounded-md HoverNavLink' href={'/'}>বুক স্টোর</Link>
              <Link className='px-3 py-2 rounded-md HoverNavLink' href={'/'}>নোটিশ</Link>
            </div>
            <Link className='hidden sm:block px-3 py-2 rounded-md cbg text-xl text-white font-semibold' href={'/login'}>লগ ইন</Link>
            <FaBars onClick={() => { setisshow(true) }} className={`cursor-pointer lg:hidden text-3xl`} />
            <div className={`${!isshow ? "hidden" : "block lg:hidden"}`}>
              <div className='modileNav'>
                <div className='flex justify-between items-center px-4 pt-8'>
                  <div>gdfg</div>
                  <ImCross className=' w-9 p-2 h-9 cursor-pointer rounded-md text-xl cbg text-white' onClick={() => { setisshow(false) }} />
                </div>
                <div className='text-xl gap-4 font-semibold mobileNavGroup'>
                  <Link onClick={() => { setisshow(false) }} className='w-full px-4 py-2 hover:bg-gray-200' href={'/'}>হোম</Link>
                  <Link onClick={() => { setisshow(false) }} className='w-full px-4 py-2 hover:bg-gray-200' href={'/'}>কোর্স </Link>
                  <Link onClick={() => { setisshow(false) }} className='w-full px-4 py-2 hover:bg-gray-200' href={'/'}>ফ্রি কোর্স</Link>
                  <Link onClick={() => { setisshow(false) }} className='w-full px-4 py-2 hover:bg-gray-200' href={'/'}>ফ্রি এক্সাম</Link>
                  <Link onClick={() => { setisshow(false) }} className='w-full px-4 py-2 hover:bg-gray-200' href={'/'}>বুক স্টোর</Link>
                  <Link onClick={() => { setisshow(false) }} className='w-full px-4 py-2 hover:bg-gray-200' href={'/'}>নোটিশ</Link>
                  <Link onClick={() => { setisshow(false) }} className='w-full px-4 py-2 hover:bg-gray-200 sm:hidden' href={'/login'}>লগ ইন</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
