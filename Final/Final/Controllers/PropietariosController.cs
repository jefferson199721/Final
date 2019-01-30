using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Final.Data;
using Final.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Final.Controllers
{
    public class PropietariosController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly PropietariosModel _propietarios_model;


        public PropietariosController(ApplicationDbContext context)
        {
            _context = context;
            _propietarios_model = new PropietariosModel(context);
        }

        public async Task<IActionResult> Index()
        {
            return View(await _context.Propietarios.ToListAsync());
        }

    }
}