$().ready(
    ()=>    {
    listaClientes();
    });


//$().ready(
//    () => {
//    listaproveedores();
//    });
////Ingreso de Nuevos/////
var nuevo_Cliente = () => {
    var Nombres = document.getElementById('Nombres').value;
    var Apellidos = document.getElementById('Apellidos').value;
    var Telefono = document.getElementById('Telefono').value;
    var Correo = document.getElementById('Correo').value;
    var Categoria = document.getElementById('Categoria').value;
    var Garantia = document.getElementById('Garantia').value;
    var FechaIngreso = document.getElementById('FechaIngreso').value;
   

    var ClienteId = document.getElementById("ClienteId").value;

    if (ClienteId == '') {
        var accion = '../Clientes/Nuevo_Cliente_Controller';
    } else {
        var accion = '../Clientes/Editar_Cliente_Controller';
    }
    if (Nombres == '') {
        $('#control_Cedula').removeClass('hidden');
    } else {
        $('#control_Cedula').addClass('hidden');
        if (Apellidos == '') {
            $('#control_Nombre').removeClass('hidden');
        } else {
            $('#control_Nombre').addClass('hidden');
            if (Telefono == '') {
                $('#control_Apellido').removeClass('hidden');
            } else {
                $('#control_Apellido').addClass('hidden');
                if (Correo == '') {
                    $('#control_Telefono').removeClass('hidden');
                } else {
                    $('#control_Telefono').addClass('hidden');
                    if (Categoria == '') {
                        $('#control_Correo').removeClass('hidden');
                    } else {
                        $('#control_Correo').addClass('hidden');
                        if (Garantia == '') {
                            $('#control_Correo').removeClass('hidden');
                        } else {
                            $('#control_Correo').addClass('hidden');
                            if (FechaIngreso == '') {
                                $('#control_Correo').removeClass('hidden');
                            } else {
                                $('#control_Correo').addClass('hidden');
                                var clasecli = new ClaseClientes(Nombres, Apellidos, Telefono, Correo, Categoria, Garantia, FechaIngreso, accion);
                                clasecli.Nuevo_Cliente(ClienteId);

                            }

                        }
                    }
                }
            }
        }
    }
}


////Ingreso de Un/////
var Un_Cliente = (ClienteId) => {
    var accion = "Clientes/Un_Cliente_Controller";
    var cliente = new ClaseClientes(' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', accion);
    cliente.Un_Cliente(ClienteId);
}
var Un_Proveedor = (proveedorId) => {
    var accion = "Proveedors/Un_Proveedor_Controller";
    var proveedor = new ClaseProveedores(' ', ' ', ' ', ' ', ' ', accion);
    proveedor.Un_Proveedor(proveedorId);
}

////Ingreso de Eliminar/////
var eliminar_cliente = (ClienteId) => {
    var accion = "Clientes/Eliminar_Cliente_Controller";
    var cliente = new ClaseClientes(' ', ' ', ' ', ' ', ' ', ' ', ' ', accion);
    cliente.eliminar_cliente(ClienteId);
}
var eliminar_proveedor = (proveedorId) => {
    var accion = "Proveedors/Eliminar_Proveedor_Controller";
    var proveedor = new ClaseProveedores(' ', ' ', ' ', ' ', ' ', accion);
    proveedor.eliminar_proveedor(proveedorId);
}

////Validacion cedulas o ruc/////
var validarCEdula = () => {
    var cedula = document.getElementById('Cedula').value;
    if (cedula == '') {
        $('#control_Cedula').removeClass("hidden");

    } else {
        var accion = 'Clientes/Validar_Cedula_Cliente_Controller';
        var cliente = new ClaseClientes(cedula, ' ', ' ', ' ', ' ', accion);
        cliente.validarCEdula();
    }
}
var validarRUC = () => {
    var ruc = document.getElementById('Ruc').value;
    if (ruc == '') {
        $('#control_Ruc').removeClass("hidden");

    } else {
        var accion = 'Proveedors/Validar_Ruc_Proveedor_Controller';
        var proveedor = new ClaseProveedores(ruc, ' ', ' ', ' ', ' ', accion);
        proveedor.validarRUC();
    }
}


////Validacion correos/////
var validarCorreo = () => {
    var correo = document.getElementById('Correo').value;
    if (correo == '') {
        $('#control_Correo').removeClass("hidden");

    } else {
        var accion = 'Clientes/Validar_Correo_Cliente_Controller';
        var cliente = new ClaseClientes(' ', ' ', ' ', ' ', correo, accion);
        cliente.validarCorreo();
    }
}
var validarcorreo = () => {
    var correo = document.getElementById('Correo').value;
    if (correo == '') {
        $('#control_correo').removeClass("hidden");

    } else {
        var accion = 'Proveedors/Validar_Correo_Proveedor_Controller';
        var proveedor = new ClaseProveedores(' ', ' ', ' ', ' ', correo, accion);
        proveedor.validarcorreo();
    }
}

////Ingreso de Listas/////
var listaClientes = () => {
    var accion = 'Clientes/Lista_Clientes_Controller';
    var cliente = new ClaseClientes('', '', '', '', '', accion);
    cliente.listaClientes();
}
var listaproveedores = () => {
    var accion = '../Proveedors/Lista_Proveedor_Controller';
    var proveedor = new ClaseProveedores('', '', '', '', '', accion);
    proveedor.listaProveedores();
}


var Nuevo_Producto = () => {
    var nombreproducto = document.getElementById('NombreProducto').value;
    var cantidad = parseInt(document.getElementById('Cantidad').value);
    var precio = document.getElementById('Precio').value;
    var proveedorid = document.getElementById('ProveedorId').value;
    var accion = '../Productos/Nuevo_Producto_Controller';


    alert(document.getElementById('precio').value);

    var claseprod = new ClaseProductos(nombreproducto, cantidad, precio, proveedorid, accion);
    claseprod.Nuevo_Producto();

    

}

var Imprimir_Cliente = () => {
    var contenido = document.getElementById('Imprimir_Clientes').innerHTML;
    var contenidopaginaoriginal = document.body.innerHTML;
    document.body.innerHTML = contenido;
    window.print();
    document.body.innerHTML = contenidopaginaoriginal;
    $('#Reporte').modal('hide');
}


    var quitar_Botones = () => {
        var contador = 0;
        $('#Cuerpo_Cliente tr').each(function () {
            var celdas = $(this).find('td');

            $(celdas[5]).addClass('hidden');

        });
    }
