function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("pass").value;	

			if(usuario == "usuario" && Contraseña == "1234")
			{
				alert(window.location.href = 'https://www.ole.com.ar')
			}
			else
			{
				alert("Verifique sus credenciales");
			}
		}