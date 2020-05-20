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
    $usuario = $this->db->get()->row();
    $token = $usuario->id.' '.$usuario->usuario;
    $token_encriptado = $this->encryption->encrypt($token);
    $fecha_expiracion = modificacionFecha(date('Y-m-d H:i:s'),$this->config->item('sess_expiration'),'second','+');
    $usuario->token = $token_encriptado;
    $usuario->token_expiracion = $fecha_expiracion;
    return $usuario; 

        
    }

}

