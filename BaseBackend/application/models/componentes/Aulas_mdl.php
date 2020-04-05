<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Aulas_mdl extends CI_Model{
    public function __construct()
    {
        parent::__construct();
    }
    public function todos()
    {   
        /*SELECT nombre,sede_val FROM `aula` order by sede_fk*/
        $this->db->select('nombre,sede_val AS edificio');
        $this->db->from('aula');
        $this->db->order_by('sede_fk');


        return $this->db->get()->result();
    }
    public function __destruct()
    {
        
    }
}

?>