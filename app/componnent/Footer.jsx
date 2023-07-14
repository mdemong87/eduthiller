import Link from "next/link";
import { AiFillFacebook, AiFillPhone, AiFillYoutube, AiTwotoneMail } from "react-icons/ai";
import { BiLogoTelegram, BiSolidLocationPlus } from "react-icons/bi";
import { RiTrademarkFill, RiWhatsappFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import Container from "./Container";

export default function Footer() {
  return (
    <div className='bg-gray-700'>
      <Container>
        <div className="text-gray-100 pt-8 engFont">
          <div className="text-center md:flex md:items-start md:justify-between gap-5 sm:text-left">
            <div className="w-full">
              <h2 className="text-xl text-gray-300 capitalize text-left">Important Link</h2>
              <div className="text-gray-400 footerLinkGroup">
                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  home
                </Link>
                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  home
                </Link>

                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  home
                </Link>

                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  home
                </Link>

                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  home
                </Link>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-xl text-gray-300 capitalize text-left">Important Link</h2>
              <div className="text-gray-400 footerLinkGroup">
                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  about us
                </Link>
                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  contact us
                </Link>

                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  Courses
                </Link>

                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  Notices
                </Link>

                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  Books
                </Link>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-xl text-gray-300 capitalize text-left">tarms & policy</h2>
              <div className="text-gray-400 footerLinkGroup">
                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  Privacy & Policy
                </Link>
                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  Terms & Conditions
                </Link>

                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <TiTick className="cc text-lg" />
                  Refund Policy
                </Link>

              </div>
            </div>
            <div className="w-full">
              <h2 className="text-xl text-gray-300 capitalize text-left">Contact info</h2>
              <div className="text-gray-400 footerLinkGroup">
                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <AiFillPhone className="cc text-xl" />
                  01994-900800
                </Link>
                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <AiTwotoneMail className="cc text-xl" />
                  hfzmamun123@gmail.com
                </Link>

                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <RiTrademarkFill className="cc text-xl" />
                  22261389419002505
                </Link>

                <Link className="flex items-center gap-2 capitalize footerItemLinkHover" href={"/"}>
                  <BiSolidLocationPlus className="cc text-2xl" />
                  ইসলামাবাদ (মডেল টাউন) ০২, কেরানীগঞ্জ - ১৩১০, কেরানীগঞ্জ মডেল, ঢাকা
                </Link>
                <div className=" mt-5 flex items-center justify-center gap-4 md:gap-0 md:justify-between pt-2 md:w-3/4 md:mt-0">
                  <Link href={"/"}>
                    <AiFillFacebook className="w-9 h-9 text-gray-700 cbg rounded-full p-2" />
                  </Link>

                  <Link href={"/"}>
                    <RiWhatsappFill className="w-9 h-9 text-gray-700 cbg rounded-full p-2" />
                  </Link>

                  <Link href={"/"}>
                    <AiFillYoutube className="w-9 h-9 text-gray-700 cbg rounded-full p-2" />
                  </Link>

                  <Link href={"/"}>
                    <BiLogoTelegram className="w-9 h-9 text-gray-700 cbg rounded-full p-2" />
                  </Link>

                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="border-t-2 w-3/4 m-auto text-center border-gray-500 font-semibold text-gray-400 pt-4">
              &copy; eduthriller.com 2023 ||All rights reserved || Developed by
              <Link href={"/"} className="cc"> Md Emon Hossen</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
