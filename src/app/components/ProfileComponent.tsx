import Image from "next/image";
import React, { useState, useEffect } from "react";
import defaultUserPicture from "../assets/defaultUserPicture.png";

const ProfileComponent = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const pictureRef = React.useRef<HTMLInputElement>(null);

  const currentTasks = localStorage.getItem("tasks");
  const currentTasksvalue = currentTasks ? JSON.parse(currentTasks) : [];

  useEffect(() => {
    const savedProfileImage = localStorage.getItem("profileImage");
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
  }, []);

  // Function to convert a file to a base64 string
  const convertToBase64 = (file: File) => {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageClick = () => {
    pictureRef.current?.click();
  };

  const handleChangeImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const base64Image = (await convertToBase64(file)) as string;
      setProfileImage(base64Image);

      localStorage.setItem("profileImage", base64Image);
    }
  };

  return (
    <div className="w-full shadow-sm p-4 pt-10">
      <div className="card w-[28rem] shadow-sm p-4 bg-sec text-white">
        <div className="p-8 flex gap-8">
          <div className="text-[20px] max-w-[200px]" onClick={handleImageClick}>
            {profileImage ? (
              <Image
                src={profileImage}
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
