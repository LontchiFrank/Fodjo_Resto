import React, { useState } from "react";
import { BsPen, BsTrash } from "react-icons/bs";
import meat from "../../assets/a.jpg";
import ModalDelete from "../Modal/ModalDelete.component";
import ModalEdit from "../Modal/ModalEdit.component";
import styles from "./FoodCardDash.module.css";

interface FoodProps {
  img?: JSX.Element;
  item: any;

  title?: string;
  icon?: any;
  icon2?: any;
  open?: any;
}

// max-w-sm sm:w-full xs:w-full  rounded-xl overflow-hidden hover:translate-y-2 transition duration-300
function FoodCardDash({ img, title, open, item, icon, icon2 }: FoodProps) {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleShowModal = () => {
    setShow(true);
  };

  const handleShowOffModal = (num: boolean) => {
    setShow(num);
  };

  const handleShowDeleteModal = () => {
    setShowDelete(true);
    console.log("hello");
  };
  const handleShowOffDeleteModal = (num: boolean) => {
    setShowDelete(num);
    console.log("Modal off");
  };

  console.log(item);
  return (
    <div className="flex justify-center items-center">
      <ModalEdit
        show={show}
        item={item}
        handleShowOffModal={handleShowOffModal}
      />
      <ModalDelete
        show={showDelete}
        item={item}
        handleShowOffDeleteModal={handleShowOffDeleteModal}
      />
      <div
        className={`${
          open ? "max-w-xs" : "max-w-[21rem]"
        } relative mb-8 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md`}
      >
        <a
          className="relative mx-3 mt-3 flex h-48 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="w-full h-48"
            src={item.image}
            alt="Sunset in the mountains"
          />
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <div
              className={`${styles.fontSec} flex justify-between font-bold text-xl mb-2 text-orange-400`}
            >
              {item.name}
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                <span className="bg-orange-200 p-1 text-center rounded-md">
                  {" "}
                  {item.category}
                </span>
              </p>
            </div>
            <p className="text-gray-700 text-base">{item.desc}</p>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-2xl font-bold text-slate-900">
                {item.price}XAF
              </span>
              <span className="text-sm text-slate-900 line-through">
                2000frs
              </span>
            </p>
            <div className="flex items-center gap-2">
              <div
                className="rounded-full bg-blue-100 p-2 cursor-pointer hover:bg-blue-200"
                onClick={handleShowModal}
              >
                <BsPen style={{ fontSize: "22px" }} className="text-blue-700" />
              </div>
              <div
                className="rounded-full bg-red-100 p-2 cursor-pointer hover:bg-red-200"
                onClick={handleShowDeleteModal}
              >
                <BsTrash
                  style={{ fontSize: "22px" }}
                  className="text-red-700 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCardDash;
