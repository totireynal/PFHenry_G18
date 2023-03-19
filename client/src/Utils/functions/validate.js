const regex = {
  date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
  email:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  image: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)\??([%&a-z0-9=_-]+)?$/i,
};

const validate = (values) => {
  const errors = {};

  // if (!values.image.length) errors.image = 'No ha ingresado ningun caracter';
  if (!regex.image.test(values.image)) errors.image = "No es un url apropiado";

  // if (values.role === "default")
  //   errors.role = "Debe elegir in Role";
  if (!values.name.length) errors.name = "No ha ingresado ningun caracter";
  if (!values.lastName.length)
    errors.lastName = "No ha ingresado ningun caracter";
  if (!values.cuil.length) errors.cuil = "No ha ingresado ningun caracter";
  if (!values.cbu.length) errors.cbu = "No ha ingresado ningun caracter";
  if (!values.address.length)
    errors.address = "No ha ingresado ningun caracter";
  if (!values.position.length)
    errors.position = "No ha ingresado ningun caracter";
  if (!values.area.length) errors.area = "No ha ingresado ningun caracter";
  if (!values.tel.length) errors.tel = "No ha ingresado ningun caracter";
  if (!values.birthDate.length)
    errors.birthDate = "No ha ingresado ninguna fecha";
  if (!values.dateOfAdmission.length)
    errors.dateOfAdmission = "No ha ingresado ninguna fecha";
  if (!values.dni.length) errors.dni = "No ha ingresado ningun caracter";
  if (values.dni.length > 9) errors.dni = "Maximo de 9 caracteres";
  if (values.tel.length > 13) errors.tel = "Maximo de 13 caracteres";
  // if (!regex.date.test(values.dateOfAdmission)) errors.dateOfAdmission = 'Esto no es una fecha'
  // if (!regex.date.test(values.birthDate)) errors.birthDate = 'Esto no es una fecha'
  if (!values.email.length) errors.email = "No ha ingresado ningun caracter";
  if (!regex.email.test(values.email)) errors.email = "El email es invalido";

  return errors;
};

export default validate;
