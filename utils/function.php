<?php
    include 'env.php';

    function sanitize($data){
        $data = htmlentities(strip_tags(stripslashes(trim($data))));
        return $data;
    }

    function connectBdd(){
        return new PDO("mysql:host=".$_ENV['host'].";dbname=".$_ENV['dataB']. ";charset=utf8", $_ENV['name'],$_ENV['password'],array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));
    }


?>