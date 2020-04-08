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
        $this->db->select('detalle_siiau.aula_fk_nombre AS nombre, profesor.nombre AS profesor, detalle_siiau.aula_fk_sede AS edificio, siiau.id AS siiau_id, detalle_siiau.id AS detalle_id');
        $this->db->from('detalle_siiau');//TODO: asdf
        $this->db->join('siiau','detalle_siiau.siiau_fk = siiau.id');
        $this->db->join('profesor','siiau.profesor_fk = profesor.id');
        $this->db->where('hora_ini < CURRENT_TIME()');
        $this->db->where('hora_fin > CURRENT_TIME()');
        $this->db->where('activo',1);


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
    public function desactivar_detalle($detalle_id)
    { 
        //UPDATE `detalle_siiau` SET `activo` = '0' WHERE `detalle_siiau`.`id` = 1
        //INSERT INTO `detalle_siiau` (`id`, `hora_ini`, `hora_fin`, `dias`, `aula_fk_nombre`, `activo`, `siiau_fk`, `actualizacion`, `aula_fk_sede`) VALUES (NULL, '14:00:00', '17:55:00', 'I', NULL, '1', '503', CURRENT_TIMESTAMP, NULL);
        $this->db->trans_start();

        $data = [
            'activo' => '0',
        ];
        $this->db->where('id',$detalle_id);
        $this->db->set($data);
        $this->db->update('detalle_siiau');
        //$this->db->set('activo',0);
        $affected_rows = $this->db->affected_rows();

        
        $this->db->where('id',$detalle_id);
        $this->db->from('detalle_siiau');
        $this->db->select('hora_ini, hora_fin, dias,siiau_fk');
        $result = $this->db->get()->result_array();

        $sql = $this->db->insert('detalle_siiau',$result[0]);
        $this->db->trans_complete();
        return $sql;
    }

    public function __destruct()
    {
        
    }
}

?>