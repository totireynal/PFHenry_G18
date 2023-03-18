import InputForm from "../InputForm";
import SelectForm from "../SelectForm/SelectForm";

const Form = ({ handleInput, handleSubmit,handleSelect, errors, users, errorButton, submited }) => {
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
            value={users.email}
            handler={handleInput}
            id="email"
            error={errors.email}
          />

          <InputForm
            label="Cuil"
            placeholder="Cuil"
            type="text"
            name="cuil"
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
            type="text"
            name="cbu"
            value={users.cbu}
            handler={handleInput}
            id="cbu"
            error={errors.cbu}
          />

          <InputForm
            label="DNI"
            placeholder="DNI"
            type="text"
            name="dni"
            value={users.dni}
            handler={handleInput}
            id="dni"
            error={errors.dni}
          />
          <InputForm
            label="Phone"
            placeholder="Phone"
            type="text"
            name="tel"
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
            value={users.address}
            handler={handleInput}
            id="address"
            error={errors.address}
          />
        </div>
        <div>
          <InputForm
            label="Position"
            placeholder="Position"
            type="text"
            name="position"
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
            value={users.area}
            handler={handleInput}
            id="area"
            error={errors.area}
          />

          <InputForm
            label="Admission Date"
            placeholder="Admission Date"
            type="date"
            name="dateOfAdmission"
            value={users.dateOfAdmission}
            handler={handleInput}
            id="dateOfAdmission"
            error={errors.dateOfAdmission}
          />

          <SelectForm
            label="Role"
            name="role"
            handler={handleSelect}
            error={errors.role}
            optionQuantity={[
              { value: "default", html: "Role" },
              { value: "user", html: "User", disable: false },
              { value: "admin", html: "Admin", disable: true },
            ]}
          />

          <InputForm
            label="Image"
            placeholder="Image"
            type="text"
            name="image"
            value={users.image}
            handler={handleInput}
            id="image"
            error={errors.image}
          />
        </div>
      </div>

      <button
        className={
          errorButton
            ? "cursor-not-allowed border border-gray-600 w-24 h-9 rounded-2xl shadow-md shadow-slate-300 bg-gray-400 text-slate-300"
            : "border border-gray-600 w-24 h-9 rounded-2xl shadow-md shadow-slate-300 bg-gray-800 text-slate-300"
        }
        onClick={handleSubmit}
        disabled={errorButton}
      >
        Edit
      </button>
      {submited && (
        <p className="text-green-800">El formulario ha sido enviado</p>
      )}
    </form>
  );
}

export default Form