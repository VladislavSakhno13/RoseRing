<?php
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

$conect = new mysqli('127.0.0.1','root','','ringrose');
 if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(isset($input['phone'])){
        $conect->query("INSERT INTO `orders` (`name`,`articul`,`phone`) VALUES('$input[name]','$input[articul]','$input[phone]')");
        //$data = $sql->fetch_assoc();
        exit(json_encode($data));
    } else exit(json_encode( array("status" => 'Error')));

    
    
}
    

?>