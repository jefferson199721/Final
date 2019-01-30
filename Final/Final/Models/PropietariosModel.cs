using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Final.Data;
using Final.Models;
using Microsoft.AspNetCore.Identity;



namespace Final.Models
{    
    public class PropietariosModel
    {
        public ApplicationDbContext _contexto;
        public PropietariosModel(ApplicationDbContext context)
        {
            _contexto = context;
        }

        public IdentityError Nuevo_Propietarios_Model(
           string nombre,
           string apellido,
           string direccion,
           string correo,
           string telefono)
        {
            IdentityError resultado = new IdentityError();
            Propietarios propietario = new Propietarios()
            {
                Nombres =nombre,
                Apellidos=apellido,
                Direccion=direccion,
                Correo = correo,
                Telefono = telefono
                
            };
            try
            {
               
                _contexto.Propietarios.Add(propietario);
                _contexto.SaveChanges();
                resultado = new IdentityError()
                {
                    Code = "ok",
                    Description = "Se Guardo con Exito"
                };

            }
            catch (Exception ex)
            {
                resultado = new IdentityError()
                {
                    Code = "error",
                    Description = ex.Message.ToString()
                };

            }
            return resultado;
        }


    }
}
