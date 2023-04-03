// import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import DeletedEmployee from "../Employee/DeletedEmployee";
import SearchBar from "./../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanUrl,
  getAreas,
  // getArrayEmails,
  getDeletedEmployees,
  getFilter,
  getPositions,
  getRoles,
  updateDeletedEmployee,
} from "../../../state/redux/actions/actions";
import Sort from "../../../Components/Sort/Sort";
import Position from "../../../Components/Position/Position";
import Area from "../../../Components/Area/Area";
import Rol from "../../../Components/Rol/Rol";
import { useAnswer } from "../../../Utils/hooks/answer";
// import { AiOutlinePlus } from "react-icons/ai";
// import { RiMailAddLine } from "react-icons/ri";
// import { SiMinutemailer } from "react-icons/si";
// import { BsFillTrashFill } from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";
import SearchBarDeleted from "../SearchBarDeleted/SearchBarDeleted";

const RestoreEmployees = () => {
  const users = useSelector((state) => state.deletedEmployees);

  const currentEmployee = useSelector((state) => state.currentEmployee);
  const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;

  // const { CompanyId } = useParams()

  // const navigate = useNavigate();
  const { answer, showAnswer } = useAnswer();

  const dispatch = useDispatch();

  const [deletes, setDeletes] = useState(users);

  const fn = (id) =>
    setDeletes((del) => {
      const filter = del?.filter((e) => e.id !== id);
      return filter;
    });
  //   const catchEmails = (email, checked) => {
  //     setEmailSelection((emails) => {
  //       if (checked) {
  //         return [...emails, email];
  //       } else {
  //         return emails.filter((e) => e !== email);
  //       }
  //     });
  //   };

  //   const [emailsUnselect, setEmailsUnselect] = useState(false);

  //   const sendEmails = () => {
  //     dispatch(getArrayEmails(emailsSelection));
  //     navigate("/notifications");
  //   };

  const [selectedOption, setSelectedOption] = useState({
    area: "default",
    sort: "default",
    position: "default",
    role: "default",
  });

  const handleReset = () => {
    setSelectedOption({
      area: "default",
      sort: "default",
      position: "default",
      role: "default",
    });
  };

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const arrContentFilters = useSelector((state) => state.arrContentFilters);

  useEffect(() => {
    dispatch(getDeletedEmployees(undefined, showAnswer, CompanyId));
  }, [dispatch, CompanyId, deletes]);

  useEffect(() => {
    dispatch(getFilter(arrContentFilters, CompanyId));
  }, [dispatch, arrContentFilters, CompanyId]);

  const handleRefresh = (event) => {
    dispatch(cleanUrl());
    dispatch(getDeletedEmployees());
    dispatch(getAreas());
    dispatch(getRoles());
    dispatch(getPositions());
    handleReset();
  };

  const [optionFilters, setOptionFilters] = useState(false);
  const handleOptionsFilters = () => {
    setOptionFilters(!optionFilters);
  };

  const [searchId, setSearchId] = useState(0)
  const sendSearchId = (id) => setSearchId(id)

    const handleClick = (event) => {
      dispatch(updateDeletedEmployee(searchId));
      dispatch(getDeletedEmployees(undefined, undefined, CompanyId));
      fn(searchId);
  };
  
    const refDivCheck = useRef();

    let refModal = useRef();

    let refDivModal = useRef();

    const modalActive = () => {
      refModal.current.style.display = "flex";
      refDivModal.current.style.transform = "scale-1";
      refDivModal.current.style.opacity = "1";
    };
  return (
    <>
      <div
        onClick={() => {
          refModal.current.style.display = "none";
        }}
        ref={refModal}
        className="fixed w-screen h-screen justify-center items-center bg-black bg-opacity-50 hidden z-10"
      >
        <div
          ref={refDivModal}
          className="flex flex-col justify-between w-[600px] h-[200px] bg-white rounded p-6 text-xl transition-all duration-100"
        >
          <h3>Are you sure you want to restore this employee?</h3>
          <div className="text-end text-base flex justify-between">
            <div className="flex justify-center items-center text-base  bg-green-400 rounded w-60 opacity-0">
              <p className="pr-42 pl-2 py-1">Se deleteo</p>
            </div>
            <div>
              <button
                className="mr-6 px-6 py-2 bg-blue-400 rounded text-white"
                onClick={handleClick}
              >
                Restore
              </button>
              <button
                className=" px-6 py-2 bg-red-400 rounded text-white"
                onClick={() => (refModal.current.style = "none")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative w-full mr-10 h-screen overflow-auto  xl:pl-72 sm:pl-36 ssm:pl-12 z-0">
        {/* {
      isLoading ? <div>loadong</div> : */}
        {/* <div> */}
        <div className="flex sm:flex-col flex-wrap  h-auto pt-12    bg-slate-100 mb-3 items-center justify-center gap-2.5">
          <div className="flex gap-2 ">
            <SearchBarDeleted
              SearchBar
              showAnswer={showAnswer}
              answer={answer}
              handleRefresh={handleRefresh}
            />
          </div>
        </div>
        <div className="sticky top-0 z-30 bg-slate-100 pb-2">
          <div className="flex sm:flex-col flex-wrap  h-auto pt-12    bg-slate-100 mb-3 items-center justify-center gap-2.5"></div>

          <div className="sm:hidden ssm:inline-block absolute left-14">
            <button
              onClick={handleOptionsFilters}
              className="bg-sky-400 text-white rounded overflow-hidden h-8 px-4 ssm:py-1 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
            >
              <FaEllipsisH />
            </button>
            <div
              className={`${
                optionFilters
                  ? "opacity-1 pointer-events-auto translate-y-0 transition-all duration-300 w-[100%]"
                  : "opacity-0 pointer-events-none -translate-y-3 transition-all duration-300 w-[50px]"
              } relative flex flex-col justify-center items-start   p-2  bg-black bg-opacity-50 rounded gap-1 mt-2 `}
            >
              <button
                className="flex relative bg-sky-400
          shadow-sky-200 hover:bg-sky-300 h-8 w-20 justify-center items-center rounded text-white border px-2"
                onClick={handleRefresh}
              >
                Refresh
              </button>
              <Sort
                selectedOption={selectedOption}
                handleSelectChange={handleSelectChange}
                CompanyId={CompanyId}
              />
              <Area
                selectedOption={selectedOption}
                handleSelectChange={handleSelectChange}
                CompanyId={CompanyId}
              />
              <Position
                selectedOption={selectedOption}
                handleSelectChange={handleSelectChange}
                CompanyId={CompanyId}
              />
              <Rol
                selectedOption={selectedOption}
                handleSelectChange={handleSelectChange}
                CompanyId={CompanyId}
              />
            </div>
          </div>
          <div className="flex flex-wrap text-center h-auto justify-center items-center gap-8 mb-8 sm:flex ssm:hidden">
            <button
              className="flex relative bg-sky-400
          shadow-sky-200 hover:bg-sky-300 h-8 w-20 justify-center items-center rounded text-white border px-2"
              onClick={handleRefresh}
            >
              Refresh
            </button>
            <Sort
              selectedOption={selectedOption}
              handleSelectChange={handleSelectChange}
              CompanyId={CompanyId}
            />
            <Area
              selectedOption={selectedOption}
              handleSelectChange={handleSelectChange}
              CompanyId={CompanyId}
            />
            <Position
              selectedOption={selectedOption}
              handleSelectChange={handleSelectChange}
              CompanyId={CompanyId}
            />
            <Rol
              selectedOption={selectedOption}
              handleSelectChange={handleSelectChange}
              CompanyId={CompanyId}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 pb-8 sm:pt-3 ssm:pt-10 ">
          {users ? (
            users?.map((user, i) => {
              return (
                <DeletedEmployee
                  key={i}
                  id={user?.id}
                  name={user?.name}
                  lastName={user?.lastName}
                  email={user?.email}
                  image={user?.image}
                  area={user?.area}
                  position={user?.position}
                  role={user?.role}
                  fn={fn}
                  modalActive={modalActive}
                  sendSearchId={sendSearchId}
                />
              );
            })
          ) : (
            <h3>{answer ? answer : ""}</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default RestoreEmployees;

// <div className=" relative w-full mr-10 h-screen overflow-auto  xl:pl-72 sm:pl-36 ssm:pl-12 z-0">
//   <div className="flex sm:flex-col flex-wrap sticky h-auto pt-12 pb-5 top-0 z-10 bg-slate-100 mb-3 items-center justify-center gap-2.5">
//     <div className="flex gap-2 ">
//       <SearchBar />
//       {/* <Link to={"/addemployee/"}>
//         <button className="bg-sky-400 text-white rounded  overflow-hidden h-full px-4 ssm:py-1 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300">
//           <AiOutlinePlus size={20} />
//         </button>
//       </Link> */}
//       {/* <button
//         onClick={() => setEmailsUnselect(!emailsUnselect)}
//         className="bg-sky-400 text-white rounded  overflow-hidden  px-4 ssm:py-1 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
//       >
//         <RiMailAddLine size={20} />
//       </button>
//       {emailsSelection.length ? (
//         <button
//           onClick={sendEmails}
//           className="bg-sky-400 text-white rounded  overflow-hidden  px-4 ssm:py-1 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
//         >
//           <SiMinutemailer />
//         </button>
//       ) : (
//         ""
//       )} */}
//     </div>
//   </div>
//   <div className="flex flex-wrap text-center h-auto justify-center items-center gap-8 mb-8">
//     <button
//       className="flex relative bg-sky-400 shadow-sky-200 hover:bg-sky-300 h-8 w-20 justify-center items-center rounded text-white border px-2 "
//       onClick={handleRefresh}
//     >
//       Refresh
//     </button>
//     <Sort
//       selectedOption={selectedOption}
//       handleSelectChange={handleSelectChange}
//       CompanyId={CompanyId}
//     />
//     <Area
//       selectedOption={selectedOption}
//       handleSelectChange={handleSelectChange}
//       CompanyId={CompanyId}
//     />
//     <Position
//       selectedOption={selectedOption}
//       handleSelectChange={handleSelectChange}
//       CompanyId={CompanyId}
//     />
//     <Rol
//       selectedOption={selectedOption}
//       handleSelectChange={handleSelectChange}
//       CompanyId={CompanyId}
//     />
//   </div>
//   <div className="flex flex-col gap-2 pb-8 pt-3 ">
//     {(
//       deletes?.map((user, i) => {
//         return (
//           // <Link key={i} to={`/employee/${user?.id}`} >
//           <DeletedEmployee
//             key={i}
//             id={user?.id}
//             name={user?.name}
//             lastName={user?.lastName}
//             email={user?.email}
//             image={user?.image}
//             area={user?.area}
//             position={user?.position}
//             role={user?.role}
//             fn={fn}
//             // catchEmails={catchEmails}
//             // emailsSelection={emailsSelection}
//             // emailsUnselect={emailsUnselect}
//           />
//           // </Link>
//         );
//       })

//     )}
//   </div>

// </div>
