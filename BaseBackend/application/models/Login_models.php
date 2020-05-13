<?php if( ! defined('BASEPATH')) exit ('No direct script access allowed');

class Login_models extends CI_Model {

    public $variable;

    public function __construct()
    {
        parent:: __construct();
    }

    public function login($usuario, $contraseña)
    {
        
        $this->db->from('usuario');
        $this->db->join('usuario_detalle', 'usuario_detalle.usuario_fk = usuario.id');
        $this->db->join('puesto_cat', 'puesto_cat.id = usuario_detalle.puesto_fk');
        $this->db->where( $respuesta = array (

            'usuario.usuario' => $usuario,
            'usuario.contraseña' => $contraseña

        ));
        return $this->db->get()->row();

        
    }

}

