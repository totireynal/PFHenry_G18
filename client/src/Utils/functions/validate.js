const regex = {
  date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
  email:
    /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  image: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)\??([%&a-z0-9=_-]+)?$/i,
};

const validate = (values) => {
  const errors = {};

  // if (!values.image.length) errors.image = 'No ha ingresado ningun caracter';
  // if (!regex.image.test(values.image)) errors.image = "No es un url apropiado";
  // console.log(values);
  if (values.role === "default")
    errors.role = "You must pick a role";
  if (!values.name.length) errors.name = "Please enter a value" //"No ha ingresado ningun caracter";
  if (!values.lastName.length)
    errors.lastName = "Please enter a value";
  if (!values.cuil.length) errors.cuil = "Please enter a value";
  if (!values.cuil.length) errors.cuil = "Please enter a value";
  if (!values.cbu.length) errors.cbu = "Please enter a value";
  if (!values.address.length)
    errors.address = "Please enter a value";
  if (!values.position.length)
    errors.position = "Please enter a value";
  if (!values.area.length) errors.area = "Please enter a value";
  if (!values.tel.length) errors.tel = "Please enter a value";
  if (!values.birthDate.length)
    errors.birthDate = "Please enter a value";
  if (!values.dateOfAdmission.length)
    errors.dateOfAdmission = "Please enter a value";
  if (!values.dni.length) errors.dni = "Please enter a value";
  if (values.dni.length > 9) errors.dni = "Max length 9 characters"//"Maximo de 9 caracteres";
  if (values.tel.length > 13) errors.tel = "Max length 13 characters"//"Maximo de 13 caracteres";
  // if (!regex.date.test(values.dateOfAdmission)) errors.dateOfAdmission = 'Esto no es una fecha'
  // if (!regex.date.test(values.birthDate)) errors.birthDate = 'Esto no es una fecha'
  if (!values.email.length) errors.email = "Please enter a value";
  if (!regex.email.test(values.email)) errors.email = "Invalid email adress"//"El email es invalido";

  return errors;
};

export default validate;