"use client"
import CustomBtn from "@/components/CustomBtn";
import Image from "next/image";
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
          <p>
            We are encouraging youth to fight against Climate Change. Connect
            with us on our social media handles
          </p>
          <button className="border-black border-2 text-black rounded-3xl py-2 px-8 focus:outline-none hover:bg-[#6CE262] ">
            Explore Challenges
          </button>
        </div>
        <div className="flex-1 flex justify-end items-end">
          <img
            src={"/Img/imgtheme.png"}
            alt=""
            className="h-[500x] w-[500px]"
          />
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-white">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className="flex justify-center flex-wrap items-center -m-4 gap-10">
            <div className="xl:w-1/4 md:w-1/2 p-4 h-[500px] relative">
              <div className="bg-gray-100 p-6 rounded-lg h-[100%]">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/Img/clenupevnt.jpg"
                  alt="content"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Crowdfunding Platform
                </h2>
                <p className="leading-relaxed text-base">
                <li>Support local initiatives </li><li> Crowdfund projects and directly contribute to positive change.</li>
                </p>
              </div>
              <div className="absolute top-[85%] left-[60%]">
                <CustomBtn>Explore</CustomBtn>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 h-[500px] relative">
              <div className="bg-gray-100 p-6 rounded-lg h-[100%]">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/Img/solar.jpg"
                  alt="content"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Gamification and Motivation
                </h2>
                <p className="leading-relaxed text-base">
               <li> Earn rewards, climb leaderboards, and unlock badges </li><li> Make climate action fun and engaging</li>
                </p>
              </div>
              <div className="absolute top-[85%] left-[60%]">
                <CustomBtn>Explore</CustomBtn>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 h-[500px] relative">
              <div className="bg-gray-100 p-6 rounded-lg h-[100%]">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/Img/usersmil.jpg"
                  alt="content"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Empowerment and Community
                </h2>
                <p className="leading-relaxed text-base">
                <li>Find your climate tribe</li> <li> Connect with like-minded individuals and take action together in your community</li>
                </p>
              </div>
              <div className="absolute top-[85%] left-[60%]">
                <CustomBtn>Explore</CustomBtn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default mainpage;
