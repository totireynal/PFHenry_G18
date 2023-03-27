import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAreasNum, getPositionsNum } from "../../state/redux/actions/actions";
import InputForm from "../InputForm";
import SelectForm from "../SelectForm/SelectForm";
import UploadImage from "../Upload/UploadImage";

const Form = ({
  handleInput,
  handleSubmit,
  handleSelect,
  touched,
  errors,
  users,
  errorButton,
  submited,
  button,
  answer,
  handleChangeImage,
}) => {

//   const dispatch = useDispatch();

//   useEffect(() => {
// dispatch(getPositionsNum())
// dispatch(getAreasNum())
//   }, [dispatch])

  const positionsNum = useSelector((state) => state.positionsNum);
  const areasNum = useSelector((state) => state.areasNum);
  // console.log(positionsNum, "nummmm");

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex gap-8 justify-center items-start mb-10">
        <div>
          <InputForm
            label="Name"
            placeholder="Name"
            type="text"
            name="name"
            touched={touched.name}
            value={users.name}
            handler={handleInput}
            id="name"
            error={errors.name}
          />

          <InputForm
            label="Last Name"
            placeholder="Last Name"
            type="text"
            name="lastName"
            touched={touched.lastName}
            value={users.lastName}
            handler={handleInput}
            id="lastName"
            error={errors.lastName}
          />

          <InputForm
            label="Birth Date"
            placeholder="Birth Date"
            type="date"
            name="birthDate"
            touched={touched.birthDate}
            value={users.birthDate}
            handler={handleInput}
            id="birthDate"
            error={errors.birthDate}
          />

          <InputForm
            label="Email"
            placeholder="Email"
            type="text"
            name="email"
            touched={touched.email}
            value={users.email}
            handler={handleInput}
            id="email"
            error={errors.email}
          />

          <InputForm
            label="Cuil"
            placeholder="Cuil"
            type="number"
            name="cuil"
            touched={touched.cuil}
            value={users.cuil}
            handler={handleInput}
            id="cuil"
            error={errors.cuil}
          />
        </div>
        <div>
          <InputForm
            label="CBU"
            placeholder="CBU"
            type="number"
            name="cbu"
            touched={touched.cbu}
            value={users.cbu}
            handler={handleInput}
            id="cbu"
            error={errors.cbu}
          />

          <InputForm
            label="DNI"
            placeholder="DNI"
            type="number"
            name="dni"
            touched={touched.dni}
            value={users.dni}
            handler={handleInput}
            id="dni"
            error={errors.dni}
          />
          <InputForm
            label="Phone"
            placeholder="Phone"
            type="number"
            name="tel"
            touched={touched.tel}
            value={users.tel}
            handler={handleInput}
            id="tel"
            error={errors.tel}
          />

          <InputForm
            label="Address"
            placeholder="Address"
            type="text"
            name="address"
            touched={touched.address}
            value={users.address}
            handler={handleInput}
            id="address"
            error={errors.address}
          />
        </div>
        <div>
          {/* <InputForm
            label="Position"
            placeholder="Position"
            type="text"
            name="position"
            touched={touched.position}
            value={users.position}
            handler={handleInput}
            id="position"
            error={errors.position}
          />

          <InputForm
            label="Area"
            placeholder="Area"
            type="text"
            name="area"
            touched={touched.area}
            value={users.area}
            handler={handleInput}
            id="area"
            error={errors.area}
          /> */}
          <InputForm
            label="Admission Date"
            placeholder="Admission Date"
            type="date"
            name="dateOfAdmission"
            touched={touched.dateOfAdmission}
            value={users.dateOfAdmission}
            handler={handleInput}
            id="dateOfAdmission"
            error={errors.dateOfAdmission}
          />
          <SelectForm
            label="Role"
            name="role"
            touched={touched.role}
            handler={handleSelect}
            error={errors.role}
            optionQuantity={[
              { value: "default", html: "Role", disable: false },
              { value: "User", html: "User", disable: true },
              { value: "Admin", html: "Admin", disable: false },
            ]}
          />

          <select
            onChange={handleSelect}
            name="PositionId"
            id="PositionId"
            defaultValue="default"
          >
            <option value="default" hidden>
              Position:
            </option>
            {positionsNum.map((pos) => (
              <option value={pos.id}>{pos.position}</option>
            ))}
          </select>

          <select
            onChange={handleSelect}
            name="AreaId"
            id="AreaId"
            defaultValue="default"
          >
            <option value="default" hidden>
              Areas:
            </option>
            {areasNum.map((pos) => (
              <option value={pos.id}>{pos.area}</option>
            ))}
          </select>
          <UploadImage handleChangeImage={handleChangeImage} />
        </div>
      </div>
      {!submited ? (
        <button
          className={
            errorButton
              ? "cursor-not-allowed border px-16 py-3 h-auto rounded shadow-md shadow-slate-300 bg-gray-400 text-slate-300"
              : "bg-sky-400 text-white  rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
          }
          onClick={handleSubmit}
          disabled={errorButton}
        >
          {button}
        </button>
      ) : (
        <p className="px-20 py-4 bg-green-400 text-white rounded">{answer}</p>
      )}
      {/* <p className="px-20 py-4 bg-green-400 rounded">hola que ase</p> */}
      {/* {submited && <p className="text-green-800">{answer}</p>} */}
    </form>
  );
};

export default Form;