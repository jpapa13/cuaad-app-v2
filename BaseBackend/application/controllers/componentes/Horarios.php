<?php
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';

class Horarios extends REST_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->library('request_lib');
		$this->load->model('componentes/Horarios_mdl');
	}
	public function index_get()
	{
		$this->response([
			'status' => TRUE,
			'data'   => $this->get()
		], REST_Controller::HTTP_OK);
	}
	public function todos_get()
	{
		$this->response([
			'status' => TRUE,
			'data'   => $this->Horarios_mdl->todos()
		], REST_Controller::HTTP_OK);
	}
	public function desactivar_detalle_post(){
		$rules = array(
            array(
                'field'=>'detalle_id',
                'rules'=>'required',
                'errors'=>array(
                    'required'=>'El campo detalle_id debe ser ingresado'
                )
            )
        );
        if ($this->request_lib->validar($this->post(),$rules) == FALSE)
        {
            $this->response([
                'status' => FALSE,
                'data'   => $this->form_validation->error_array()
            ], REST_Controller::HTTP_BAD_REQUEST);
        }else{
            $respuesta = $this->Horarios_mdl->desactivar_detalle($this->post('detalle_id'));
            if($respuesta !== FALSE){
                $this->response([
                    'status' => TRUE,
                    'data'   => $respuesta
                ], REST_Controller::HTTP_OK);
            }else{
                $this->response([
                    'status' => FALSE,
                    'data'   => 'detalle no encontrado'
                ], REST_Controller::HTTP_NOT_ACCEPTABLE);
            }
        }  
	}
}
