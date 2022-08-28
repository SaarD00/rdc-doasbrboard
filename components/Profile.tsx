import { useSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  const { data: session } = useSession();
  return (
    // cONTAINR
    <div className="flex flex-col justify-center   p-1  scale-90  shadow-lg rounded-2xl ">
      <p className="text-3xl font-bold mb-5">User Profile</p>
      <div className="flex flex-col justify-center items-center">
        {/* Top */}
        <div>
          <img
            className="rounded-2xl"
            src="https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/dark/static/media/profilebg.f087528c.jpg"
          />
        </div>
        <div className="absolute mt-64 p-2   bg-gradient-to-tr from-red-500 to-cyan-200 rounded-full">
          <img
            className="rounded-full h-20 w-20 object-cover"
            src="https://scontent.cdninstagram.com/v/t1.15752-9/300417312_3197264107178178_4927050632140574989_n.jpg?stp=dst-jpg_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=5a057b&_nc_ohc=kTeXDCkVFYgAX90Pls6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVJYssrnODS254oKL9_MQpVjHUAjdRe3yzmVbRECiWJWlw&oe=6330FAD8"
          />
        </div>
        <div className="bg-gray-200 - justify-center w-full rounded-lg mt-10 p-5 items-center flex flex-col ">
          <p className="text-xl font-semibold ">{session?.user?.name}</p>
          <p className="text-gray-700">Software lead</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
