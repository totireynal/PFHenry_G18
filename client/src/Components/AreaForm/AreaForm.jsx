/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postAreaCrud,
  getAreasCrud,
  deleteAreaCrud,
} from "../../state/redux/actions/actions";

const AreaForm = () => {
  const dispatch = useDispatch();

  const allAreas = useSelector((state) => state.areas);

  const [area, setArea] = useState({
    area: "",
  });

  const [showList, setShowList] = useState(false);

  const handleChange = (event) => {
    setArea({
      ...area,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitPost = (event) => {
    event.preventDefault();
    dispatch(postAreaCrud(area));
    setArea({
      area: "",
    });
  };

  const handleSubmitGet = (event) => {
    event.preventDefault();
    dispatch(getAreasCrud());
    setShowList(!showList);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-20">
      <form onClick={handleSubmitPost} className="flex flex-col gap-2 w-80">
        <input
          name="area"
          value={area.area}
          onChange={handleChange}
          className="rounded-md border-2 border-gray-800 block px-2 h-12 pl-4 outline-none focus:border-sky-400 resize-none"
          autoComplete="off"
        ></input>
        <button
          type="submit"
          className="bg-sky-400 text-white  rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
        >
          CREATE AREA
        </button>
      </form>
      <form onClick={handleSubmitGet} className="flex flex-col gap-2 w-80">
        <button
          type="submit"
          className="bg-sky-400 text-white  rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
        >
          {showList ? "HIDE AREAS" : "GET AREAS"}
        </button>
        {showList && (
          <div>
            <ul>
              {allAreas && allAreas.length > 0 ? (
                allAreas.map((area) => (
                  <div className="relative mb-1">
                    <p
                      key={area.id}
                      className="flex justify-center items-center border rounded h-8 font-semibold border-gray-400 bg-white"
                    >
                      {area.area}
                    </p>
                    <button
                      onClick={() => dispatch(deleteAreaCrud(area.id))}
                      className="absolute top-2 right-4 font-semibold text-red-600"
                    >
                      X
                    </button>
                  </div>
                ))
              ) : (
                <p className="flex justify-center items-center  rounded h-8 font-semibold">
                  No areas found
                </p>
              )}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default AreaForm;
