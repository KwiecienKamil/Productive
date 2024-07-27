import Image from "next/image";
import React, { useRef, useState } from "react";
import defaultUserPicture from "../assets/defaultUserPicture.png";

const ProfileComponent = () => {
  const [profileImage, setProfileImage] = useState("");
  const pictureRef = React.useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    pictureRef.current?.click();
  };
  const handleChangeImage = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setProfileImage(event.target.files[0]);
  };
  return (
    <div className="w-full shadow-sm p-4 pt-10">
      <div className="card w-[28rem] shadow-sm p-4 bg-white">
        <div className="p-8 flex justify-between">
          <div className="text-[14px] max-w-[200px]" onClick={handleImageClick}>
            {profileImage ? (
              <Image
                src={URL.createObjectURL(profileImage)}
                alt="User picture"
                width={100}
                height={100}
                className="rounded-full"
              />
            ) : (
              <Image
                src={defaultUserPicture}
                alt="User picture"
                width={100}
                height={100}
              />
            )}
            <input
              type="file"
              ref={pictureRef}
              className="mt-4 hidden"
              onChange={handleChangeImage}
            />
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
