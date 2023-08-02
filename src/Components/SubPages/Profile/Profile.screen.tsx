import React from "react";

type FillProps = {
  open: boolean;
};

function Profile(props: FillProps) {
  const windowSidebar: any = window.innerWidth;
  console.log(windowSidebar);
  return (
    <div
      className={`${
        windowSidebar > 450 ? (props.open ? "ml-64 " : "ml-20") : "ml-0"
      } `}
    >
      <div className=" flex gap-4 bg-gray-200">
        <div
          className={`${
            props.open ? "lg:w-[65%]" : " lg:w-[69%]"
          } p-4 h-screen md:w-[100%] sm:w-[100%] xs:w-[100%] `}
        >
          <div className="text-2xl">Profile</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
