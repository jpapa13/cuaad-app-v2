<?php
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit ('No direct script access allowed');
require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';


class LoginCtrl extends REST_Controller{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Login_models');
        
    }

    public function index_post()
    {
        $this->response([

            'status' => TRUE,
            'data' => $this->get()

        ], REST_Controller::HTTP_NOT_FOUND);
    }

    public function login_post()
    {
        $arreglo = array(
            array(
                'field'=>'usuario',
                'rueles' => 'required|valid_usuario',
                'errors' => array (
                    'required' => 'El campo usuario debe ser ingresado',
                    'valid_usuario' => 'El usuario debe ser valido'
                )
                ), array(
                    'field' => 'constraseña',
                    'rules' => 'required',
                    'errors' => array(
                        'required' => 'Ingresar contraseña'
                    )
                )


        );
    }
}

