<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Horarios_mdl extends CI_Model{
    public function __construct()
    {
        parent::__construct();
    }
    public function todos()
    {   
        /*SELECT detalle_siiau.aula_fk_nombre AS nombre, profesor.nombre AS profesor, detalle_siiau.aula_fk_sede AS edificio FROM `detalle_siiau`
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
        //SELECT * FROM `detalle_siiau` ORDER BY `dias`  DESC
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

        $this->db->from('detalle_siiau');
        $this->db->order_by('id','DESC');
        $this->db->limit('1');
        $this->db->select('id');
        $result = $this->db->get()->result();
        $this->db->trans_complete();
        return $result[0];
    }

    public function asignar_detalle($detalle_id, $edificio, $aula)
    { 
        //UPDATE `detalle_siiau` SET `activo` = '0' WHERE `detalle_siiau`.`id` = $detalle_id
        //INSERT INTO `detalle_siiau` (`id`, `hora_ini`, `hora_fin`, `dias`, `aula_fk_nombre`, `activo`, `siiau_fk`, `actualizacion`, `aula_fk_sede`) VALUES (NULL, '14:00:00', '17:55:00', 'I', NULL, '1', '503', CURRENT_TIMESTAMP, NULL);
       //SELECT * FROM `detalle_siiau` ORDER BY `dias`  DESC

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
        $result = $result[0];
        $result['aula_fk_nombre'] = $aula;
        $result['aula_fk_sede'] = $edificio;
        $sql = $this->db->insert('detalle_siiau',$result);

        // New id
        $this->db->from('detalle_siiau');
        $this->db->order_by('id','DESC');
        $this->db->limit('1');
        $this->db->select('id');
        $result = $this->db->get()->result();

        $this->db->trans_complete();
        return $result[0];
    }

    public function intercambiar_detalle($detalle_1, $detalle_2)
    { 
        //UPDATE `detalle_siiau` SET `activo` = '0' WHERE `detalle_siiau`.`id` = 1 OR `detalle_siiau`.`id` = 2
        //INSERT INTO `detalle_siiau` (`id`, `hora_ini`, `hora_fin`, `dias`, `aula_fk_nombre`, `activo`, `siiau_fk`, `actualizacion`, `aula_fk_sede`) VALUES (NULL, '14:00:00', '17:55:00', 'I', NULL, '1', '503', CURRENT_TIMESTAMP, NULL);
        //SELECT * FROM `detalle_siiau` ORDER BY `dias`  DESC
        //INSERT INTO `detalle_siiau` (`id`, `hora_ini`, `hora_fin`, `dias`, `aula_fk_nombre`, `activo`, `siiau_fk`, `actualizacion`, `aula_fk_sede`) VALUES (NULL, '14:00:00', '17:55:00', 'I', NULL, '1', '503', CURRENT_TIMESTAMP, NULL);
        //SELECT * FROM `detalle_siiau` ORDER BY `dias`  DESC
        $this->db->trans_start();

        $data = [
            'activo' => '0',
        ];
        $this->db->where('id',$detalle_1);
        $this->db->or_where('id',$detalle_2);
        $this->db->set($data);
        $this->db->update('detalle_siiau');
        //$this->db->set('activo',0);
        $affected_rows = $this->db->affected_rows();
        
        $this->db->where('id',$detalle_1);
        $this->db->from('detalle_siiau');
        $this->db->select('hora_ini, hora_fin, dias,aula_fk_nombre,siiau_fk, aula_fk_sede');
        $result1 = $this->db->get()->result_array();
        $siiau_fk1= $result1[0]['siiau_fk'];

        $this->db->where('id',$detalle_2);
        $this->db->from('detalle_siiau');
        $this->db->select('hora_ini, hora_fin, dias,aula_fk_nombre,siiau_fk, aula_fk_sede');
        $result2 = $this->db->get()->result_array();
        
        $result1[0]['siiau_fk'] = $result2[0]['siiau_fk'];
        $result2[0]['siiau_fk'] = $siiau_fk1;
        
        //$sql = array('result1' => $result1, 'result2' => $result2);
        $sql1 = $this->db->insert('detalle_siiau',$result1[0]); 
        // New id 1
        $this->db->from('detalle_siiau');
        $this->db->order_by('id','DESC');
        $this->db->limit('1');
        $this->db->select('id');
        $result1 = $this->db->get()->result();

        $sql2 = $this->db->insert('detalle_siiau',$result2[0]); 
        // New id 2
        $this->db->from('detalle_siiau');
        $this->db->order_by('id','DESC');
        $this->db->limit('1');
        $this->db->select('id');
        $result2 = $this->db->get()->result();


        //$sql = $this->db->affected_rows();
        $this->db->trans_complete();
        return array('detalle1' => $result1[0],
                     'detalle2' => $result2[0]);
    }

    public function __destruct()
    {
        
    }
}

?>