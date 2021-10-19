function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("pass").value;	

			if(usuario == "usuario" && Contraseña == "1234")
			{
				alert(window.location.href = 'file:///E:/Útiles/Visual%20Proyectos/Pruebas%20facu/HOME.html?#')
			}
			else
			{
				alert("Verifique sus credenciales");
			}
		}