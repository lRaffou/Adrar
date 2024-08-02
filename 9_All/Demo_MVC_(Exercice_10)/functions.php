<?php
function sanitize($data){
    return htmlentities(strip_tags(stripslashes(trim($data))));
}

function connectBDD(){
    return new PDO('mysql:host=localhost;dbname=articles',"root","root",array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}

?>