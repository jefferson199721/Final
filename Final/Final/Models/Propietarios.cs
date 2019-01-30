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

        [Key]
        public int PropietarioId { get; set; }
        [Display(Name = "Nombres")]
        [Required]
        public string Nombres { get; set; }
        [Display(Name = "Apellidos")]
        [Required]
        public string Apellidos { get; set; }
        [Display(Name = "Direccion")]
        [Required]
        public string Direccion { get; set; }
        [Display(Name = "Correo")]
        [Required]
        public string Correo { get; set; }
        [Display(Name = "Telefono")]
        [Required]
        public string Telefono { get; set; }
    }
}
