<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Puesto_mdl extends CI_Model{

    public function todos()
    {
        $this->db->from('puesto_cat');
        return $this->db->get()->result();
    }

}

?>