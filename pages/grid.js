import React from "react";

const grid = () => {
  return (
    <div className="grid place-items-center min-h-screen ">
      <div className="grid gap-4 p-4 max-w-5xl xms:grid-cols-2 ">
        <h1 className="text-4xl font-extrabold xms:col-span-2 xms:w-1/2 ">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias
          error illum id, dolore consequatur voluptatibus nisi autem fuga vel
          iure aperiam consectetur laudantium maxime.{" "}
        </p>
        <div className="h-16 bg-blue-500 xms:h-auto xms:aspect-square "></div>
        <div className="h-16 bg-blue-500 xms:h-auto xms:aspect-square "></div>
        <div className="h-16 bg-blue-500 xms:h-auto xms:aspect-square "></div>
        <div className="h-16 bg-blue-500 xms:h-auto xms:aspect-square "></div>
        <div className="h-16 bg-blue-500 xms:h-auto xms:aspect-square "></div>
        <div className="h-16 bg-blue-500 xms:h-auto xms:aspect-square "></div>
        <div className="h-16 bg-blue-500 xms:h-auto xms:aspect-square "></div>
        <div className="h-16 bg-blue-500 xms:h-auto xms:aspect-square "></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          suscipit libero laudantium officiis itaque! Ipsa consequatur at
          nostrum amet minima .
        </p>
      </div>
    </div>
  );
};

export default grid;