"use client";

import { useState } from "react";
import SearchBar from "./searchbar";
import { Toaster } from "@/components/ui/toaster";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Base64Img } from "@/components/images/image";

export default function Live() {
  const [dataValues, setDataValues] = useState<
    { content: number[]; url: string; status: number }[]
  >([]);

  return (
    <>
      <SearchBar setDataValues={setDataValues} />
      {dataValues.length ? (
        <div className="py-4 h-full">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {dataValues?.map((item) => (
                <Base64Img
                  ss={item.content}
                  url={item.url}
                  key={item.url + item.content.length}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      ) : (
        <div className="py-4 flex items-center place-content-center flex-1">
          <h1 className="text-xl font-semibold">
            Set a website to view all of the pages here.
          </h1>
        </div>
      )}
      <Toaster />
    </>
  );
}
