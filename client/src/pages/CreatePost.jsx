import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// The react-router-dom library provides a way to handle routing and navigation in a React application. 
// The useNavigate hook is one of the utilities provided by this library that allows you to 
// programmatically navigate to different pages in your application.

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const handleSubmit = () =>{


}

const handleChange = (e) =>{


}

const handleSurpriseMe = () =>{


}

const CreatePost = () => {
  // this is used to navigate back to the home page after the image generation
  const navigate = useNavigate();
  const [form, setform] = useState(
    {
      name : '',
      prompt: '',
      photo: '',
    }
  );

  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Create innovative and visually breathtaking images generated through AI and share them with the community.</p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., Akshat Garg"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="Prompt"
            placeholder="A tree with a face made of rubber ducks..."
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe 
            handleSurpriseMe = {handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 
          text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ?(
              <img
                src = {form.photo}
                alt = {form.prompt}
                className = "w-full h-full object-contain"
              />
              
            ) : ( 
              <img
              src = {preview}
              alt = "preview"
              className="w-9/12 h-9/12 object-contain opacity-40"
              />
              )
            }

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
            
          </div>
        </div>
      </form>
    </section>
  )
}

export default CreatePost