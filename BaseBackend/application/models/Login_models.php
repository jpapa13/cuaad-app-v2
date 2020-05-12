<?php if( ! defined('BASEPATH')) exit ('No direct script access allowed');

class Login_models extends CI_Model {

    public $variable;

    public function __construct()
    {
        parent:: __construct();
    }

    public function login($usuario, $contraseña)
    {
        $this->db->select('usuario', 'constraseña');
        $this->db->from('usuarios');
        $this->db->join('usuario_detalle', 'usuario.id = usuario_detalle.id');
        $this->db->join('puesto_cat', 'usuario_detalle.puesto_fk = puesto_car.id');
        $usuario = $this->db->get()->row();

        
    }

}

