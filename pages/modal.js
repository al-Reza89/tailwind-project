import React, { useState } from "react";
import ModalC from "../components/modalComponents/ModalC";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="p-10 text-center">
        <h1 className="text-3xl mb-5 ">
          Create Custom Modal With tailwind css
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        >
          Text Modal
        </button>
        <button
          onClick={() => setShowModal2(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        >
          Video Modal
        </button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
          From Modal
        </button>
      </div>
      <ModalC isVisible={showModal} onClose={onClose}>
        <h1>Title</h1>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quisquam
          corporis omnis inventore assumenda placeat, sint asperiores, qui
          recusandae distinctio illum sunt laborum amet molestiae voluptatum
          laudantium porro dolores ad.
        </span>
      </ModalC>

      <ModalC isVisible={showModal2} onClose={() => setShowModal2(false)}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/pwPObxq0q4g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ModalC>
    </>
  );
};

export default Modal;
