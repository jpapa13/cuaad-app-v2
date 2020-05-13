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
        $this->load->library('request_lib');
        
    }

    public function index_post()
    {
        $this->response([

            'status' => TRUE,
            'data' => $this->post()

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
                    'field' => 'contraseña',
                    'rules' => 'required',
                    'errors' => array(
                        'required' => 'Ingresar contraseña'
                    )
                )


        );
        if ($this->request_lib->validar($this->post(),$arreglo) == FALSE)
		{
			$this->response([
				'status' => FALSE,
				'data'   => $this->form_validation->error_array()
			], REST_Controller::HTTP_BAD_REQUEST);
		}else{
			$respuesta = $this->Login_models->login($this->post('usuario'),$this->post('contraseña'));
			if($respuesta !== FALSE){
				$this->response([
					'status' => TRUE,
					'data'   => $respuesta
				], REST_Controller::HTTP_OK);
			}else{
				$this->response([
					'status' => FALSE,
					'data'   => 'usuario o password incorrectos'
				], REST_Controller::HTTP_NOT_ACCEPTABLE);
			}
		}	
    }
}

