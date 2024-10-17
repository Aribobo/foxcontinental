"use client"
import react from "react"
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Track = () => {
    const [trackId, setTrackId] = useState("");
    const {t} = useTranslation();
    return(
        <div className="ml-10 lg:ml-20 justify-center  ">
        <div className="flex gap-4 mt-12 ">
    
        <input
        value={trackId}
        onChange={(e) => setTrackId(e.target.value)}
        type="text"
        id="Track"
        className="mt-1 block w-60 lg:w-45 px-3 py-2 pb-2  ml-12 border border-[#1f425d] rounded-md shadow-sm focus:outline-none focus:ring-[#4ab9cf] focus:border-[#4ab9cf] sm:text-sm"
        placeholder="l82434895kh"
      />
          <Link href={`/Order/${trackId}`}>
            {" "}
            <button className="px-4  py-2 mt-1 bg-[#4ab9cf] text-xl text-white hover:bg-[#1f425d] ">
            {t('order')}
            </button>
          </Link>
       
        </div>
      </div>
    );
};
export default Track;