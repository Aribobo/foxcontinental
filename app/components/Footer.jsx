"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const {t} = useTranslation();
  return (
    <>
      {" "}
      <div
        className="bg-[#1f425d] shadow-xl
        shadow-gray-400 rounded-xl"
      >
        <div
          id="footer"
          className=" w-full grid grid-cols md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 
          justify-center items-center p-20  "
        >
          <div className="p-2 text-white">
            <ul>
              <Link href="/#home">
                <p className=" flex  font-bold text-3xl pb-6 justify-center items-center text-white">
                  Ofo<span className="text-[#fd7062]">et</span>
                </p>
              </Link>
              <div className="flex gap-6 pb-5 justify-center items-center">
                <a href="https://www.facebook.com/profile.php?id=100063884890800">
                  <FaFacebook className=" flex text-3xl cursor-pointer hover:text-[#4ab9cf]" />
                </a>
                <a href="mailto:ofoetnigltd@gmail.com">
                  <AiOutlineMail className=" flex text-3xl cursor-pointer hover:text-[#fd7062] " />
                </a>
                <a href=" https://wa.me/+2348032807393">
                  <FaWhatsapp className=" flex text-3xl cursor-pointer hover:text-green-700" />
                </a>
                <a href="tel:+2348032807393">
                  <FiPhoneCall className=" flex text-3xl cursor-pointer hover:text-[#fd7062]" />
                </a>
              </div>
            </ul>
          </div>
          <div
            id="footer"
            className="p-2 flex justify-center items-center text-white"
          >
            <ul>
              <p className=" flex text-start font-bold text-2xl pb-2 text-[#fd7062] ">
                {t('service')}
              </p>
              <li className="  text-start  text-xl  font-semibold py-2 flex ">
                +2348032807393
              </li>
              <li className=" text-start  text-xl  font-semibold py-2 flex ">
                Onuiyi Junction,Nsukka
              </li>
              <li className="flex text-start  items-center  text-xl  font-semibold py-2 ">
                ofoetnigltd@gmail.com
              </li>
            </ul>
          </div>
          <div
            id="footer"
            className="p-2 flex justify-center items-center text-white"
          >
            <ul>
              <p className=" flex text-start font-bold text-2xl pb-2 text-[#fd7062] ">
              {t('company')}
              </p>
              <li className="  text-start  text-xl  font-semibold py-2 flex ">
                +2348032807393
              </li>
              <li className=" text-start  text-xl  font-semibold py-2 flex ">
                Onuiyi Junction,Nsukka
              </li>
              <li className="flex text-start  items-center  text-xl  font-semibold py-2 ">
                ofoetnigltd@gmail.com
              </li>
            </ul>
          </div>

          <div
            id="footer"
            className="p-2 flex justify-center items-center text-white sm:mt-4 md:mt-4"
          >
            <ul>
              <p className=" flex text-start font-bold text-2xl pb-2 text-[#fd7062] ">
              {t('contact')}
              </p>
              <li className="  text-start  text-xl  font-semibold py-2 flex ">
                +2348032807393
              </li>
              <li className=" text-start  text-xl  font-semibold py-2 flex ">
                Onuiyi Junction,Nsukka
              </li>
              <li className="flex text-start  items-center  text-xl  font-semibold py-2 ">
                ofoetnigltd@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center text-white p-5 bg-[#1f425d]">
          <h5 className="  font-semibold">
            © 2023 Ofo<span className="text-[#fd7062]">et</span> || All rights
            reserved
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;