import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DeletedEmployee from "../Employee/DeletedEmployee";
import SearchBar from "./../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanUrl,
  getAreas,
  getArrayEmails,
  getDeletedEmployees,
  getFilter,
  getPositions,
  getRoles,
} from "../../../state/redux/actions/actions";
import Sort from "../../../Components/Sort/Sort";
import Position from "../../../Components/Position/Position";
import Area from "../../../Components/Area/Area";
import Rol from "../../../Components/Rol/Rol";
import { useAnswer } from "../../../Utils/hooks/answer";
import { AiOutlinePlus } from "react-icons/ai";
import { RiMailAddLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";

const RestoreEmployees = () => {

  const users = useSelector((state) => state.deletedEmployees);
  console.log("segunda", users);

  const currentEmployee = useSelector((state) => state.currentEmployee);
  const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;
  
  // const { CompanyId } = useParams()
  console.log('monta employees-->', CompanyId);

  const navigate = useNavigate();
  const { answer, showAnswer } = useAnswer();

  const dispatch = useDispatch();

  const [deletes, setDeletes] = useState(users);

  const fn = (id) => setDeletes(del => {
    const filter = del?.filter(e => e.id !== id)
      return filter
  })
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
    dispatch(getDeletedEmployees(undefined, showAnswer, CompanyId))
  }, [dispatch, CompanyId, deletes]);
  
  
  useEffect(() => {
    dispatch(getFilter(arrContentFilters, CompanyId))
  }, [dispatch, arrContentFilters, CompanyId]);

  const handleRefresh = (event) => {
    dispatch(cleanUrl());
    dispatch(getDeletedEmployees());
    dispatch(getAreas());
    dispatch(getRoles());
    dispatch(getPositions());
    handleReset();
  };

  return (
    <div className=" relative w-full mr-10 h-screen overflow-auto  xl:pl-72 sm:pl-36 ssm:pl-12 z-0">
      <div className="flex sm:flex-col flex-wrap sticky h-auto pt-12 pb-5 top-0 z-10 bg-slate-100 mb-3 items-center justify-center gap-2.5">
        <div className="flex gap-2 ">
          <SearchBar />
          {/* <Link to={"/addemployee/"}>
            <button className="bg-sky-400 text-white rounded  overflow-hidden h-full px-4 ssm:py-1 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300">
              <AiOutlinePlus size={20} />
            </button>
          </Link> */}
          {/* <button
            onClick={() => setEmailsUnselect(!emailsUnselect)}
            className="bg-sky-400 text-white rounded  overflow-hidden  px-4 ssm:py-1 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
          >
            <RiMailAddLine size={20} />
          </button>
          {emailsSelection.length ? (
            <button
              onClick={sendEmails}
              className="bg-sky-400 text-white rounded  overflow-hidden  px-4 ssm:py-1 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
            >
              <SiMinutemailer />
            </button>
          ) : (
            ""
          )} */}
        </div>
      </div>
      <div className="flex flex-wrap text-center h-auto justify-center items-center gap-8 mb-8">
        <button
          className="flex relative bg-sky-400 shadow-sky-200 hover:bg-sky-300 h-8 w-20 justify-center items-center rounded text-white border px-2 "
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
      <div className="flex flex-col gap-2 pb-8 pt-3 ">
        {(
          deletes?.map((user, i) => {
            return (
              // <Link key={i} to={`/employee/${user?.id}`} >
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
                // catchEmails={catchEmails}
                // emailsSelection={emailsSelection}
                // emailsUnselect={emailsUnselect}
              />
              // </Link>
            );
          })
         
        )}
      </div>

    </div>
  );
};

export default RestoreEmployees;
