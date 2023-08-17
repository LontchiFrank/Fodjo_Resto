import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { useSelector, useDispatch } from "react-redux";

type FillProps = {
  show: boolean;
  item: any;
  handleShowOffModal: any;
};
interface Food {
  name: string;
  desc: string;
  price: number;
  category?: string | object;
}
interface Option {
  readonly label: string;
  readonly value: string;
}
function ModalEdit(props: FillProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    desc: "",
  });
  const [image, setImage] = useState<File>();
  const { name, desc, price, category } = formData;
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
  });

  const defaultOptions = [
    createOption("Meal"),
    createOption("Grill"),
    createOption("Fries"),
  ];
  //the react-select component
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState<Option | null>();

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue(newOption);
    }, 1000);
  };

  useEffect(() => {
    //   console.log(item, "dsatat");
    if (props.item) {
      setFormData({
        name: props.item?.name,
        price: props.item?.price,
        category: props.item?.category,
        desc: props.item?.desc,
      });
    }
  }, [props.item]);
  //   const json = JSON.stringify(category);
  //   const sig = JSON.parse(json);
  console.log();
  const load = useSelector((state: any) => state.food?.loading);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(event);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFiles = files as FileList;
    setImage(selectedFiles?.[0]);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategory = (item: any | Option | null) => {
    setValue(item);
    setFormData({ ...formData, category: item });
    console.log(item);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    const info = new FormData();
    info.append("name", name);
    info.append("category", category);
    info.append("desc", desc);
    info.append("price", price);
    info.append("image", image as Blob);
    console.log(info);

    // dispatch(createFoodAsync(info));
  };

  return (
    <div>
      {props.show ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex ">
                    <div className="mt-3 w-[100%] text-center sm:mt-0 sm:text-left">
                      <h3
                        className="text-xl mb-3 font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Edit Food Item
                      </h3>
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-6">
                          <label
                            // for="title"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                          >
                            Name Of Food
                          </label>
                          <input
                            type="text"
                            id="text"
                            name="name"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Name "
                            value={name}
                            onChange={(e) => handleChange(e)}
                            required
                          />
                        </div>
                        <div className="   mb-6">
                          <label
                            // for="category"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                          >
                            Select your Category
                          </label>

                          <CreatableSelect
                            isClearable
                            isDisabled={isLoading}
                            isLoading={isLoading}
                            onChange={(newValue) => handleCategory(newValue)}
                            onCreateOption={handleCreate}
                            options={options}
                            value={value}
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            // for="title"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                          >
                            Price
                          </label>
                          <input
                            type="text"
                            id="text"
                            name="price"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => handleChange(e)}
                            required
                          />
                        </div>
                        <div className="flex flex-col mb-6">
                          <label
                            // For="category"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-black"
                          >
                            Image
                          </label>
                          <input
                            type="file"
                            id="img"
                            name="image"
                            accept="image/*"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => handleImageChange(e)}
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            // for="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                          >
                            Description
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            name="desc"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Leave a comment..."
                            value={desc}
                            onChange={(e) => handleTextAreaChange(e)}
                          ></textarea>
                        </div>
                        <div className="flex items-start mb-6"></div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
                          >
                            {load ? (
                              <svg
                                aria-hidden="true"
                                role="status"
                                className="inline mr-3 w-4 h-4 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="#E5E7EB"
                                ></path>
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            ) : null}
                            Create
                          </button>
                          <button
                            type="button"
                            onClick={() => props.handleShowOffModal(false)}
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ModalEdit;
