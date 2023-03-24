import { useState } from "react";

const UploadImage = ({ handleChangeImage }) => {
  const [image, setImage] = useState("");

  const upload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "staffsphere");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtqhqhc9e/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    setImage(file.secure_url);
    console.log("URL de la imagen:", file.secure_url);

    handleChangeImage(file.secure_url);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div>
        <input type="file" name="file" onChange={upload}></input>
      </div>
      <div>
        <img
          src={image}
          alt="profilepic"
          className="rounded-3xl shadow-md shadow-gray-600"
          width="200px"
          height="100"
        ></img>
      </div>
    </div>
  );
};

export default UploadImage;
