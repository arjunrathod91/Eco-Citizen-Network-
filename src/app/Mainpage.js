import React from "react";

function mainpage() {
  return (
    <div className="">
      <div className="container h-[80vh] w-[100vw] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex-1 flex flex-col justify-center items-start gap-[35px]">
          <strong className="text-4xl">
            Mobilizing Communities, Championing Sustainability: Act Locally,
            Impact Globally
          </strong>
          <p >We are encouraging youth to fight against Climate Change. Connect with us on our social media handles</p>
          <button class="border-black border-2 text-black rounded-3xl py-2 px-8 focus:outline-none hover:bg-[#6CE262] ">
            Explore Challenges
          </button>
        </div>
        <div className="flex-1 flex justify-end items-end">
          <img src={"./Img/imgtheme.png"} alt="" className="h-[1500x] w-[1500px]" />
        </div>
      </div>
    </div>
  );
}

export default mainpage;
