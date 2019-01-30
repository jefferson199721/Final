using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Final.Models
{
    public class Propietarios
    {
              
       public int PropietariosId { get; set; }
       public string Nombres { get; set; }
       public string Apellidos { get; set; }
       public string Direccion { get; set; }
       public string Correo { get; set; }
       public string Telefono { get; set; }
    }
}
