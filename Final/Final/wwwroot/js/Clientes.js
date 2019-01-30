class ClaseClientes {
    constructor(Nombres, Apellidos, Telefono, Correo, Categoria, Garantia, FechaIngreso, accion) {
        this.Nombres = Nombres;
        this.Apellidos = Apellidos;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.Categoria = Categoria;
        this.Garantia = Garantia;
        this.FechaIngreso = FechaIngreso;
        this.accion = accion;
    }

    Nuevo_Cliente(ClienteId) {
        var Nombres = this.Nombres;
        var Apellidos = this.Apellidos;
        var Telefono = this.Telefono;
        var Correo = this.Correo;
        var Categoria = this.Categoria;
        var Garantia = this.Garantia;
        var FechaIngreso = this.FechaIngreso;
        var accion = this.accion;

        if (ClienteId == '') {
            try {
                $.post(
                    accion,
                    { Nombres, Apellidos, Telefono, Correo, Categoria, Garantia, FechaIngreso },
                    (respuesta) => {
                        if (respuesta.code == "ok") {
                            swal('Clientes', respuesta.description, 'success');
                            this.limpiar();
                        } else {
                            swal('Clientes', respuesta.description, 'Error');
                        }
                    });
            } catch (e) {
                alert(e.message);
            }
        } else {
            try {
                $.post(
                    accion,
                    { Nombres, Apellidos, Telefono, Correo, Categoria, Garantia, FechaIngreso },
                    (respuesta) => {
                        if (respuesta.code == "ok") {
                            swal('Clientes', respuesta.description, 'success');
                            this.limpiar();
                        } else {
                            swal('Clientes', respuesta.description, 'Error');
                        }
                    });
            } catch (e) {
                alert(e.message);
            }
        }

    }

    Un_Cliente(ClienteId) {
        var accion = this.accion;
        $.ajax({
            type: "POST",
            url: accion,
            data: { ClienteId },
            success: (respuesta) => {
                document.getElementById("Nombres").value = respuesta.Nombres;
                document.getElementById("Apellidos").value = respuesta.Apellidos;
                document.getElementById("Telefono").value = respuesta.Telefono;
                document.getElementById("Correo").value = respuesta.Correo;
                document.getElementById("Categoria").value = respuesta.Categoria;
                document.getElementById("Garantia").value = respuesta.Garantia;
                document.getElementById("FechaIngreso").value = respuesta.FechaIngreso;
                document.getElementById("ClienteId").value = respuesta.ClienteId;
            }
        });
    }

    eliminar_cliente(ClienteId) {
        swal({
            title: "¿Eliminar Cliente?",
            text: "Esta seguro que desea eliminar el cliente..!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    var accion = this.accion;
                    $.post(accion, { ClienteId },
                        (respuesta) => {
                            if (respuesta.code == "ok") {
                                swal('Clientes', respuesta.description, 'success');
                                this.limpiar();
                            } else {
                                swal('Clientes', respuesta.description, 'Error');
                            }
                        });
                } else {
                    swal('Clientes', 'Usted a cancelo la accion', 'warning');
                }
            });



    }


    listaClientes() {
        var accion = this.accion;
        $.post(
            accion,
            {},
            (respuesta) => {

                $.each(respuesta, (index, val) => {
                    $('#Cuerpo_Cliente').html(val[0])
                });
                // $('#cuerpo_Cliente').html(respuesta);
            }
        );
    }




    limpiar() {
        document.getElementById("Nombres").value = '';
        document.getElementById("Apellidos").value = '';
        document.getElementById("Telefono").value = '';
        document.getElementById("Correo").value = '';
        document.getElementById("Categoria").value = '';
        document.getElementById("Garantia").value = '';
        document.getElementById("FechaIngreso").value = '';
        document.getElementById("ClienteId").value = '';
        $('#Ingreso_Cliente').modal('hide');
        listaClientes();
    }




}