import React,{useState, useEffect} from "react";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-black-500 mb-2">The Coldest Sunset</div>
        <ul>
          <li className="text-black-700 text-base">
            <strong>Views:</strong>3333
          </li>
          <li className="text-black-700 text-base">
            <strong>Downloads:</strong>33
          </li>
          <li className="text-black-700 text-base">
            <strong>Likes:</strong>3
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2">#tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2">#tag2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2">#tag3</span>
      </div>
    </div>
  );
}

export default App;
