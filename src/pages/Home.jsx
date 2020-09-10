import React, { useState } from "react";

import image from "../utils/imageBackground/lion.jpg";

export default function Home() {
  return (
    <div className="bg-black">
      <div className=" h-screen ">
        <div className="flex flex-row items-center justify-center">
          <img src={image} alt="Lion" className="w-1/2" />
          <div className="flex items-start justify-start">
            <div className="flex items flex-row ">
              <div className="flex flex-col items-start">    
                <div className='flex items-center w-full'>
                  <p className="text-white font-medium text-4xl "> <span className='border-solid border-danger-500 border-l-2'>Security Lock</span>  <i className="fas fa-lock text-white text-4xl mt-6 locked hover:text-danger-500" /> </p>
                </div>
                <div className='mt-4'>
                  <h2 className="text-white text-lg" >You live free and we care about your things<span className= "text-danger-500 text-3xl">Your Security</span></h2>
                </div>
                {/* <i className="fas fa-lock-open text-white cursor-pointer unlocked"/> */}
                <div className="flex flex-row items-center text-white mt-6">
                  <p className="text-lg cursor-pointer hover:text-danger-500">
                    About Us
                  </p>
                  <p className="ml-4 text-lg cursor-pointer hover:text-danger-500">
                    Products
                  </p>
                  <p className="ml-4 text-lg cursor-pointer hover:text-danger-500">
                    Team
                  </p>
                  <p className="ml-4 text-lg cursor-pointer hover:text-danger-500">
                    Lorem
                  </p>
                </div>
                <div className="flex items-center flex-row mt-4">
                  <div className=''>
                    <i className="text-white text-xl fab fa-linkedin cursor-pointer hover:text-danger-700"/>
                  </div>
                  <div className='ml-4'>
                    <i className="text-white text-xl fab fa-instagram cursor-pointer  hover:text-danger-700"/>
                  </div>
                  <div className='ml-4'>
                    <i class="fab fa-facebook text-white text-xl cursor-pointer hover:text-danger-700"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="border-t border-solid border-gray-100">
          <div className=" text-white mt-12 container">
            <div className="flex flex-col items-center">
              <p className="mb-6 border-solid border-b cursor-pointer text-3xl border-gray-600 hover:border-danger-600 hover:text-danger-600">
                About Us
              </p>
              <span className="w-1/2 text-justify">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham. Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914
                translation by H. Rackham.
              </span>
            </div>
          </div>
          <div className="mt-16 border-solid border-t border-gray-300 ">
            <div className='flex flex-col items-center container'>
              <div>
                <h3 className="mt-16 mb-12 text-white border-b text-3xl border-gray-300 border-solid hover:border-danger-600 hover:text-danger-600">Products</h3>
              </div>
              <div>
                <div className="text-white container">
                  <div className="flex justify-center">
                    <div className="grid gap-10 grid-cols-3 grid-row-2 ">
                      <div className="bg-gray-900 rounded-md flex flex-col items-center p-8">
                        <h3>Teste</h3>
                        <p>outro teste</p>
                      </div>
                      <div className="bg-gray-900 rounded-md flex flex-col items-center p-8">
                        <h3>Teste</h3>
                        <p>outro teste</p>
                      </div>
                      <div className="bg-gray-900 rounded-md flex flex-col items-center p-8">
                        <h3>Teste</h3>
                        <p>outro teste</p>
                      </div>
                      <div className="bg-gray-900 rounded-md flex flex-col items-center p-8">
                        <h3>Teste</h3>
                        <p>outro teste</p>
                      </div>
                      <div className="bg-gray-900 rounded-md flex flex-col items-center p-8">
                        <h3>Teste</h3>
                        <p>outro teste</p>
                      </div>
                      <div className="bg-gray-900 rounded-md flex flex-col items-center p-8">
                        <h3>Teste</h3>
                        <p>outro teste</p>
                      </div>
                      <div className="bg-gray-900 rounded-md flex flex-col items-center p-8">
                        <h3>Teste</h3>
                        <p>outro teste</p>
                      </div>
                      <div className="bg-gray-900 rounded-md flex flex-col items-center p-8">
                        <h3>Teste</h3>
                        <p>outro teste</p>
                      </div>
                      <div className="bg-gray-900 rounded-md flex flex-col items-center p-8">
                        <h3>Teste</h3>
                        <p>outro teste</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
