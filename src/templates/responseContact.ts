interface DataTypes {
  name: string;
  email: string;
  lng: string;
  company?: string;
  message: string;
}
import { ES, EN, BR, FR } from "./responseByLanguage";

export const templateResponseContact = (data: DataTypes) => {
  const returnLng = () => {
    if (data) {
      switch (data.lng) {
        case "es":
          return ES;
        case "en":
          return EN;
        case "fr":
          return FR;
        case "br":
          return BR;
        default:
          return ES;
      }
    } else {
      return ES;
    }
  };

  const returnTextOne = () => {
    if (data && data.company) {
      return ` ${returnLng().the} ${data.company} ${returnLng().text1}`;
    } else {
      return ` ${returnLng().text1}`;
    }
  };
  const body = `
    <div>
      <p>
        <b>${data.name}</b>${returnTextOne()}
      </p>
      <p>${returnLng().text2}<b>${" " + data.email}</b></p>
      <br/>
      <p>${returnLng().text3} Guillermo Ferraz</p>
      <br/>
      <p>Email: ${returnLng().text4}</p>
      <br/>
      <small>${returnLng().text5}</small>
    </div>
    `;
  return body;
};
