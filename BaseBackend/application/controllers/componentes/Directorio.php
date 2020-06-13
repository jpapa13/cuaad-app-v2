<?php
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';

class Directorio extends REST_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->library('request_lib');
		$this->load->model('componentes/Directorio_mdl');
	}
	public function index_get()
	{
		$this->response([
			'status' => TRUE,
			'data'   => $this->get()
		], REST_Controller::HTTP_OK);
	}
	public function recursivo($arreglo, $res)
	{
		foreach($arreglo as $d){
			$personal = $this->Directorio_mdl->obtener_area_persona($d->id);
			$res[$d->nombre] = array(
				'id'=>$d->id,
				'hoja'=>null,
				'personal'=>$personal
			);
			$aux = $this->Directorio_mdl->obtener_area($d->id);
			$res[$d->nombre]['hoja'] = $this->recursivo($aux,$res[$d->nombre]['hoja']);
		}
		return $res;
	}
	public function obtener_area_post(){
        $rules = array(
            array(
                'field'=>'parent',
                'rules'=>'required',
                'errors'=>array(
                    'required'=>'El campo parent debe ser ingresado'
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
			$respuesta = $this->Directorio_mdl->obtener_area($this->post('parent'));
            if($respuesta !== FALSE){
				$this->response([
                    'status' => TRUE,
                    'data'   => $respuesta
                ], REST_Controller::HTTP_OK);
            }else{
                $this->response([
                    'status' => FALSE,
                    'data'   => 'area no encontrada'
                ], REST_Controller::HTTP_NOT_ACCEPTABLE);
            }
        }    
    }
	public function obtener_area_todos_get(){
			//$raiz = 5; //id de nodo raiz del árbol de directorio
            $respuesta = $this->Directorio_mdl->obtener_area($this->post('parent'));
            if($respuesta !== FALSE){
				$res = [];
				$respuestaR = $this->recursivo($respuesta,$res);
				$this->response([
                    'status' => TRUE,
                    'data'   => $respuestaR
                ], REST_Controller::HTTP_OK);
            }else{
                $this->response([
                    'status' => FALSE,
                    'data'   => 'area no encontrada'
                ], REST_Controller::HTTP_NOT_ACCEPTABLE);
            }
   
    }
	public function obtener_persona_post(){
        $rules = array(
            array(
                'field'=>'id_persona',
                'rules'=>'required|numeric',
                'errors'=>array(
                    'required'=>'El campo id_persona debe ser ingresado',
					'numeric'=>'El campo id_persona debe ser numérico'
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
			$respuesta = $this->Directorio_mdl->obtener_persona($this->post('persona'));
            if($respuesta !== FALSE){
				$this->response([
                    'status' => TRUE,
                    'data'   => $respuesta
                ], REST_Controller::HTTP_OK);
            }else{
                $this->response([
                    'status' => FALSE,
                    'data'   => 'persona no encontrada'
                ], REST_Controller::HTTP_NOT_ACCEPTABLE);
            }
        }    
    }
	public function obtener_area_persona_post(){
        $rules = array(
            array(
                'field'=>'parent',
                'rules'=>'required',
                'errors'=>array(
                    'required'=>'El campo parent debe ser ingresado'
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
			$respuesta = $this->Directorio_mdl->obtener_area_persona($this->post('parent'));
            if($respuesta !== FALSE){
				$this->response([
                    'status' => TRUE,
                    'data'   => $respuesta
                ], REST_Controller::HTTP_OK);
            }else{
                $this->response([
                    'status' => FALSE,
                    'data'   => 'area no encontrada'
                ], REST_Controller::HTTP_NOT_ACCEPTABLE);
            }
        }    
    }
    /*
    public function archivos_todos_post()
    {
        $rules = array(
            array(
                'field'=>'sede',
                'rules'=>'required',
                'errors'=>array(
                    'required'=>'El campo sede debe ser ingresado',
                    'valid_email'=>'El campo correo debe tener un correo valido'
                )
            ),array(
                'field'=>'tipo',
                'rules'=>'required',
                'errors'=>array(
                    'required'=>'El campo sede debe ser ingresado',
                    'valid_email'=>'El campo correo debe tener un correo valido'
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
            $respuesta = $this->Lugares_mdl->archivos_todos($this->post('sede'),$this->post('tipo'));
            if($respuesta !== FALSE){
                $this->response([
                    'status' => TRUE,
                    'data'   => $respuesta
                ], REST_Controller::HTTP_OK);
            }else{
                $this->response([
                    'status' => FALSE,
                    'data'   => 'sede o tipo no encontrado'
                ], REST_Controller::HTTP_NOT_ACCEPTABLE);
            }
        }		
    }*/
}
