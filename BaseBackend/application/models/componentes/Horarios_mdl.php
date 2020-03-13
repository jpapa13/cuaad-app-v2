<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Horarios_mdl extends CI_Model{
    public function __construct()
    {
        parent::__construct();
    }
    public function todos()
    {   
        /*SELECT * FROM `detalle_siiau`
            JOIN siiau ON detalle_siiau.siiau_fk = siiau.id
            JOIN profesor ON siiau.profesor_fk = profesor.id
            WHERE `hora_ini` < CURRENT_TIME AND hora_fin > CURRENT_TIME AND dias LIKE '%J%'*/
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
            case 2:
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
    

    /*
    public function detalle($evento_id)
    {   
        $this->db->select("e.`id`, e.`titulo`, e.`descripcion`, e.`inicio`, e.`fin`, a.ruta, l.nombre, e.lugar_fk ");
        $this->db->from('evento AS e');
        $this->db->join('archivo AS a','banner_fk = a.id','left');
        $this->db->join('lugar AS l','lugar_fk = l.id ','left');
        $this->db->where('e.id',$evento_id);
        return $this->db->get()->result();
    }

    public function imagenes($evento_id)
    {   
        $this->db->select("a.ruta");
        $this->db->from('archivo AS a');
        $this->db->join('evento_archivo as ae','ae.archivo_fk = a.id','inner');
        $this->db->where('ae.evento_fk',$evento_id);
        return $this->db->get()->result();
    
    }
    */
    public function __destruct()
    {
        
    }
}

?>