<?php
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';

class TipoLugar extends REST_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->library('request_lib');
		$this->load->model('catalogos/TipoLugar_mdl');
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
			'data'   => $this->TipoLugar_mdl->todos()
		], REST_Controller::HTTP_OK);
	}
}
