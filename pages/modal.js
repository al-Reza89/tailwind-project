import React from "react";
import ModalC from "../components/modalComponents/ModalC";

const Modal = () => {
  return (
    <>
      <div className="p-10 text-center">
        <h1 className="text-3xl mb-5 ">
          Create Custom Modal With tailwind css
        </h1>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
          Text Modal
        </button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
          Video Modal
        </button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
          From Modal
        </button>
      </div>
      <ModalC />
    </>
  );
};

export default Modal;
