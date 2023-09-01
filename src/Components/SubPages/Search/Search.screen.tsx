import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPrivateFoodAsync } from "../../../features/foodSlice";
import FoodCardDash from "../../FoodCardDash/FoodCardDash.component";
import load from "../../../assets/not.png";

type FillProps = {
  open: boolean;
};

function Search(props: FillProps) {
  const windowSidebar: any = window.innerWidth;
  const [formData, setFormData] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.food?.data);
  const [filteredList, setFilteredList] = useState(data);
  const Category = ["Meal", "Grill", "Cream", "Fries", "Drinks"];

  useEffect(() => {
    dispatch(getPrivateFoodAsync());
  }, []);
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Access input value
    const query = event.target.value;
    //   // Include all elements which includes the search query
    var updatedList = [...data];
    const updatedLists = updatedList.filter((item: any) => {
      return (
        String(item.name).toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
      //   // Trigger render with updated values
    });
    setFilteredList(updatedLists);
    console.log(filteredList);
  };
  const handleSelectCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    //Accept Input value from select
    const query = event.target.value;
    //Include all elements which includes the select query
    var updatedList = [...data];
    const updatedLists = updatedList.filter((item: any) => {
      return item.category == query;
    });
    setFilteredList(updatedLists);
    console.log(filteredList);
  };

  const resetSelect = () => {
    setFilteredList(data);
    console.log(filteredList);
  };

  const handleSelectPriceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const query = event.target.value;
    var updatedList = [...data];
    const updatedLists = updatedList.filter((item: any) => {
      return item.price == query;
    });
    setFilteredList(updatedLists);
    console.log(filteredList);
  };

  return (
    <div
      className={`${
        windowSidebar > 450 ? (props.open ? "ml-64 " : "ml-20") : "ml-0"
      } `}
    >
      <div className=" flex gap-4 bg-gray-200">
        <div
          className={`${
            props.open ? "lg:w-[100%]" : " lg:w-[100%]"
          } p-4  md:w-[100%] sm:w-[100%] xs:w-[100%] `}
        >
          <div className="lg:text-2xl md:text-lg sm:text-md ">
            Search
            <div className=" rounded-lg dark:border-gray-700 bg-gray-200">
              <div className="w-full md:w-full shadow p-5 lg:px-40 md:px-24 sm:px-28 bg-white">
                <div className="relative">
                  <div className="absolute flex items-center ml-2 h-full">
                    <svg
                      className="w-4 h-4 fill-current text-primary-gray-dark"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
                    </svg>
                  </div>

                  <input
                    type="text"
                    // value={formData}
                    onChange={handleFilterChange}
                    placeholder="Search by listing, Food Item"
                    className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="font-medium">Filters</p>

                  <button
                    onClick={resetSelect}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
                  >
                    Reset Filter
                  </button>
                </div>

                <div>
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                    <select
                      className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                      onChange={(e) => handleSelectCategoryChange(e)}
                    >
                      <option value="">Select Category</option>
                      {Category.map((item) => (
                        // console.log(first)
                        <option key={item} value={item}>
                          {item}{" "}
                        </option>
                      ))}
                    </select>

                    <select
                      onChange={(e) => handleSelectPriceChange(e)}
                      className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    >
                      <option>Price</option>
                      <option value="1000"> 1000 XAF</option>
                      <option value="1500"> 1500 XAF</option>
                      <option value="2000"> 2000 XAF</option>
                      <option value="3000"> 3000 XAF</option>
                      <option value="4000"> 4000 XAF</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                className={`${props.open ? "p-5" : "p-10"} ${
                  filteredList.length == 0
                    ? "flex  justify-center items-center"
                    : " grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 lg:px-36 md:px-12 sm:12"
                }   mb-4 rounded bg-gray-50 dark:bg-white`}
              >
                {filteredList.length > 0 ? (
                  filteredList.map((item: any, index: any) => (
                    <FoodCardDash
                      key={index}
                      item={item}
                      img={item.image}
                      title={item.title}
                      icon={item.icon}
                      icon2={item.icon2}
                      open={props.open}
                    />
                  ))
                ) : (
                  <div className=" h-screen  flex flex-col justify-center items-center ">
                    <img src={load} style={{ width: "78%", height: "18%" }} />
                    <h3 className="">Not Found</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
