import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  FaPinterest,
  FaSearch,
  FaHome,
  FaBell,
  FaCommentDots,
  FaPlus,
} from "react-icons/fa";

const Feed = () => {

 const ACCESS_KEY = "xTtIDEFyiJB9rWOoo8N0C7V-Pd25ozvlCtWjPMZE3uE";

  const [search, setSearch] = useState("nature");

  const [images, setImages] = useState([]);

  const fetchImages = async (query) => {

    try {

      const res = await axios.get(

        "https://api.unsplash.com/search/photos",

        {
          params: {
            query: query,
            per_page: 30,
          },

          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        }
      );

      setImages(res.data.results);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchImages("nature");

  }, []);

  const handleSearch = (e) => {

    if (e.key === "Enter") {

      fetchImages(search);

    }

  };

  return (

    <div className="flex bg-white min-h-screen">

      {/* SIDEBAR */}

      <div className="w-[90px] fixed h-screen border-r bg-white flex flex-col items-center py-6 gap-8">

        <FaPinterest className="text-red-600 text-4xl cursor-pointer" />

        <FaHome className="text-2xl cursor-pointer" />

        <FaPlus className="text-2xl cursor-pointer" />

        <FaBell className="text-2xl cursor-pointer" />

        <FaCommentDots className="text-2xl cursor-pointer" />

      </div>

      {/* MAIN */}

      <div className="ml-[100px] w-full">

        {/* SEARCH */}

        <div className="sticky top-0 bg-white p-5 z-50">

          <div className="bg-gray-100 flex items-center px-5 py-4 rounded-full">

            <FaSearch className="text-gray-500 text-xl" />

            <input
              type="text"
              placeholder="Search Pinterest"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              className="bg-transparent outline-none ml-4 w-full text-lg"
            />

          </div>

        </div>

        {/* IMAGES */}

        <div className="columns-2 md:columns-3 lg:columns-5 gap-5 p-5 space-y-5">

          {images.map((img) => (

            <div
              key={img.id}
              className="break-inside-avoid relative group cursor-pointer"
            >

              <img
                src={img.urls.regular}
                alt=""
                className="rounded-3xl w-full"
              />

              {/* HOVER */}

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 rounded-3xl transition">

                <button className="absolute top-4 right-4 bg-red-600 text-white px-5 py-3 rounded-full font-bold">

                  Save

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default Feed;