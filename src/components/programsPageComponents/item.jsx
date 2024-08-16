import React from "react";

function Item() {
  return (
    <div className="flex flex-col p-2 border border-gray-200 m-2 rounded-md">
      <div className="flex items-end gap-3">
        <h2 className="text-lg font-semibold">Italy</h2>
        <h3 className="text-sm">Milano Collage</h3>
      </div>
      <hr className="w-full m-1" />
      <p className="indent-2 text-sm my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
        consequatur quia id a totam itaque dignissimos fugiat ab, asperiores
        modi rem praesentium illo aliquid placeat.
      </p>
      <button className="bg-[#E3582D] text-white p-2 font-semibold max-w-max self-center px-10 rounded-md">
        Apply
      </button>
    </div>
  );
}

export default Item;
