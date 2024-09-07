

import React, { useState } from 'react';
// import img3 from './image/img3.png';


const Demo = () => {
  // Predefined images
  const initialImages = [
      'https://ruparel.in/images/blog-banner.png', // Predefined Image 1
    'https://ruparel.in/images/blog-banner.png',  // Predefined Image 2
    'https://ruparel.in/images/blog-banner.png',  // Predefined Image 3
  ];

 
  const [images, setImages] = useState(initialImages);


  const handleImageUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        uploadedImages.push(e.target.result); 
       
        if (uploadedImages.length === files.length) {
          setImages([...images, ...uploadedImages]);
        }
      };

      reader.readAsDataURL(file); 
    }
  };



  return (
    <div className="flex justify-center p-5 bg-gray-800 rounded-lg shadow-md  bottom_demo">
      
      <div className="flex flex-col w-full  rounded-lg p-4 relative">
        <div className="flex justify-between items-center mb-4">
         
          
          <button className='text-lg font-semibold gallery_btn text-white border-solid
      rounded '>Gallery</button>
          
         
          <input 
            type="file" 
            multiple 
            accept="image/*" 
            onChange={handleImageUpload}
            className="hidden" 
            id="file-upload"
          />
          <label 
            htmlFor="file-upload" 
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-5 rounded-full shadow-lg cursor-pointer add_img"
          >
            + Add Images
          </label>

          <button className="bg-gray-700  rounded-full shadow-lg left_arrow">
            &larr;
          </button>
          <button className="bg-gray-700  rounded-full shadow-lg right_arrow">
            &rarr;
          </button>
          

         
        </div>

      
        <div className="flex space-x-4 overflow-x-auto overflow-y-hidden max-h-64 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 img_gallery">
       

          {images.map((img, index) => (
            <div key={index} className="relative w-48 h-48 bg-gray-200 rounded-md">
              <img src={img} alt={`img-${index}`} className="rounded-md object-cover w-full h-full" />
            </div>
          ))}
        </div>

        
      </div>
      
    </div>
  );
};

export default Demo;
