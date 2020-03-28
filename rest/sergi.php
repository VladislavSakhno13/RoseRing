<?php
 $inputJSON = file_get_contents('php://input');
 $input = json_decode($inputJSON, TRUE);

 $conect = new mysqli('127.0.0.1','root','','ringrose');
 if($_SERVER['REQUEST_METHOD'] == 'GET'){
    
        $data = array();
        $sql = $conect->query("SELECT * FROM `sergi` INNER JOIN `metal` ON `sergi`.`metal_id` = `metal`.`id`");
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;   
    }
    exit(json_encode($data));
}