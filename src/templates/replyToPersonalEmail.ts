interface DataTypes {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const templateReplyPersonalEmail = (data: DataTypes) => {
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
  <p>Has recibido un nuevo mensaje de <b>${data.name}</b>.
  ${data.company && `<p>De la empresa <b>${data.company}</b></p>`}
  <p>Email de contacto ${data.email}</p>
  <p>Mensaje:</p>
  <br/>
  <p>${data.message}</p>
  </div>
  `;
  return body;
};
