import React from 'react'

const ImageCard = ({image}) => {
    const tags= image.tags.split(',');

  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-black-500 mb-2">
          TPhoto by{image.user}
        </div>
        <ul>
          <li className="text-black-700 text-base">
            <strong>Views:</strong>
            {image.views}
          </li>
          <li className="text-black-700 text-base">
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li className="text-black-700 text-base">
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
        
      </div>
    </div>
  );
}

export default ImageCard