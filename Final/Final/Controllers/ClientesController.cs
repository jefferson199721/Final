using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Final.Data;
using Final.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Final.Controllers
{
    public class ClientesController : Controller
    {
        /*private readonly ApplicationDbContext _context;

        private readonly ClientesModel _clientes_model;

        public ClientesController(ApplicationDbContext context)
        {
            _context = context;
            _clientes_model = new ClientesModel(context);
        }

        // GET: Clientes
        public async Task<IActionResult> Index()
        {
            return View(await _context.Cliente.ToListAsync());
        }


        public IdentityError Nuevo_Cliente_Controller(string Nombres, string Apellidos, string Telefono,
            string Correo, string Categoria, string Garantia, DateTime FechaIngreso)
        {
            return _clientes_model.Nuevo_Cliente_Model(Nombres, Apellidos, Telefono,
             Correo, Categoria, Garantia, FechaIngreso);

        }


        public Cliente Un_Cliente_Controller(int clienteId)
        {
            return _clientes_model.Un_Cliente_Model(clienteId);
        }
        public IdentityError Editar_Cliente_Controller(int ClienteId, string Nombres, string Apellidos, string Telefono,
            string Correo, string Categoria, string Garantia, DateTime FechaIngreso)
        {
            return _clientes_model.Editar_Cliente_Model(ClienteId, Nombres, Apellidos, Telefono,
             Correo, Categoria, Garantia, FechaIngreso);

        }
        public IdentityError Eliminar_Cliente_Controller(int ClienteId)
        {
            return _clientes_model.Eliminar_Cliente_Model(ClienteId);
        }



        public List<object[]> Lista_Clientes_Controller()
        {
            return _clientes_model.Lista_Cliente_Model();
        }*/
    }
}