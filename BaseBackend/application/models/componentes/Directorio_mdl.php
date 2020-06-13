<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Directorio_mdl extends CI_Model{
    public function __construct()
    {
        parent::__construct();
    }
    public function obtener_area($parent)
    {   
        $this->db->from('area');
       $this->db->where('dentro_de_fk',$parent);
        return $this->db->get()->result();
    }
	
	public function obtener_area_persona($parent)
    {   
		$this->db->select("ud.id, ud.nombre, ud.foto, p_c.nombre as puesto");
		$this->db->from('usuario_detalle as ud');
		$this->db->join('usuario_directorio AS u_d','u_d.usuario_detalle_fk = ud.id','inner');
        $this->db->join('puesto_cat AS p_c','ud.puesto_fk = p_c.id');
		$this->db->where('u_d.area_fk',$parent);
        return $this->db->get()->result();
    }/*
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