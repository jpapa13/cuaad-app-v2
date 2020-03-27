<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Horarios_mdl extends CI_Model{
    public function __construct()
    {
        parent::__construct();
    }
    public function todos()
    {   
        /*SELECT detalle_siiau.aula_fk_nombre AS nombre, profesor.nombre AS profesor, detalle_siiau.aula_fk_sede AS edificio FROM `detalle_siiau`
            JOIN siiau ON detalle_siiau.siiau_fk = siiau.id
            JOIN profesor ON siiau.profesor_fk = profesor.id
            WHERE `hora_ini` < CURRENT_TIME AND hora_fin > CURRENT_TIME AND dias LIKE '%J%' ORDER BY nombre*/
        $this->db->select('detalle_siiau.aula_fk_nombre AS nombre, profesor.nombre AS profesor, detalle_siiau.aula_fk_sede AS edificio');
        $this->db->from('detalle_siiau');//TODO: asdf
        $this->db->join('siiau','detalle_siiau.siiau_fk = siiau.id');
        $this->db->join('profesor','siiau.profesor_fk = profesor.id');
        $this->db->where('hora_ini < CURRENT_TIME()');
        $this->db->where('hora_fin > CURRENT_TIME()');

        switch (date('w')) {
            case 0:
                $this->db->like('dias','D');
                break;
            case 1:
                $this->db->like('dias','L');
                break;
            case 2:
                $this->db->like('dias','M');
                break;
            case 3:
                $this->db->like('dias','I');
                break;
            case 4:
                $this->db->like('dias','J');
                break;
            case 5:
                $this->db->like('dias','V');
                break;
            case 6:
                $this->db->like('dias','S');
                break;
        }
        


        return $this->db->get()->result();
    }
    public function __destruct()
    {
        
    }
}

?>