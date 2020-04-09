<?php
 $inputJSON = file_get_contents('php://input');
 $input = json_decode($inputJSON, TRUE);

 $conect = new mysqli('127.0.0.1','root','','ringrose');
 if($_SERVER['REQUEST_METHOD'] == 'GET'){
    
        $data = array();
        $sql = $conect->query("SELECT * FROM `time_bin`");
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;   
    }
    exit(json_encode($data));
}
//"SELECT DISTINCT * FROM `rings` INNER JOIN `metal` ON `podves`.`metal_id` = `metal`.`id`"
else if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(isset($input['name'])){
        $conect->query("INSERT INTO `time_bin` (`name`,`articul`) VALUES('$input[name]','$input[articul]')");
        $sql = $conect->query("SELECT * FROM `time_bin` ORDER BY id DESC LIMIT 1");
        $data = $sql->fetch_assoc();
        exit(json_encode($data));
    } else exit(json_encode( array("status" => 'Error')));

    
    
}
else if($_SERVER['REQUEST_METHOD'] == 'PUT'){
    if(!isset($_GET['id'])){
        exit(json_encode('error'));
    } else {
        
        $conect->query("UPDATE `a place` SET `place` = '$input[newplace]'  WHERE `id` = $_GET[id]");
        $sql = $conect->query("SELECT * FROM `a place` ORDER BY id DESC LIMIT 1");
        $data = $sql->fetch_assoc();
        exit(json_encode($data));
    }
    
   
}
else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
       
        $conect->query("DELETE  FROM `time_bin`");
     
}
?>