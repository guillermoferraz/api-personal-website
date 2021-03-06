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
    <div style="border: 1px solid #000c24; padding: 35px; border-radius: 10px; box-shadow: 3px 8px 16px rgba(0,0,0,0.6); background: #EBEBEB; color: #000c24">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');
        .logo{
            font-family: 'Syne Mono', monospace;
						font-weight: bolder;
						display: flex;							
						align-items: center;
            margin-bottom: 25px;
        }
				p{
					padding:0;
						margin: 0
				}
				.icon{
					width: 35px;
					height: 35px
				}
    </style>
		<div class='logo' style="font-family: Syne Mono, monospace; font-weight: bolder; display: flex; align-items: center; margin-bottom: 25px">
			<p style="margin-right: 25px">Gf Web</p>
			<img style="width: 35px; height: 35px;" class='icon' src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-developer-computer-programming-icons-flaticons-lineal-color-flat-icons-3.png'/>
		</div>
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
