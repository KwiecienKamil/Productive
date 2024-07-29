import Image from "next/image";
import React, { useRef, useState } from "react";
import defaultUserPicture from "../assets/defaultUserPicture.png";

const ProfileComponent = () => {
  const [profileImage, setProfileImage] = useState("");
  const pictureRef = React.useRef<HTMLInputElement>(null);

  const currentTasks = localStorage.getItem("tasks");
  const currentTasksvalue = JSON.parse(currentTasks!);

  const handleImageClick = () => {
    pictureRef.current?.click();
  };
  const handleChangeImage = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setProfileImage(event.target.files[0]);
  };
  return (
    <div className="w-full shadow-sm p-4 pt-10">
      <div className="card w-[28rem] shadow-sm p-4 bg-sec text-white">
        <div className="p-8 flex gap-8">
          <div className="text-[20px] max-w-[200px]" onClick={handleImageClick}>
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
                width={80}
                height={80}
              />
            )}
            <input
              type="file"
              ref={pictureRef}
              className="mt-4 hidden"
              onChange={handleChangeImage}
            />
          </div>
          <div className="mt-2">
            <p>
              Hi, <span className="font-bold">Kamil👋</span>
            </p>
            <div className="flex items-center gap-4 mt-2">
              <p>Daily Tasks</p>
              <button className="px-2 py-1 bg-pri text-sec rounded-lg">
                {currentTasksvalue.length}
              </button>
            </div>
            <p>Keep going!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
