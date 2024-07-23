import Image from "next/image";
import React from "react";
import defaultUserPicture from "../assets/defaultUserPicture.png";

const ProfileComponent = () => {
  return (
    <div className="w-full shadow-sm p-4 pt-10">
      <div className="card w-[28rem] shadow-sm p-4 bg-white">
        <div className="p-8 flex gap-8">
          <div className="">
            <Image src={defaultUserPicture} alt="User picture" width={100} />
            <button className="mt-4">Change picture</button>
          </div>
          <p>
            Hi, <span className="font-bold">Kamil👋</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
