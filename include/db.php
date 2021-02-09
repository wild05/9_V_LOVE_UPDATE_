<?php
    define('DB_HOST', 'localhost');
    define('DB_USER', 'mysql');
    define('DB_PASSWORD', 'mysql');
    define('DB_NAME', 'test');
    
    $mysql = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    
    if ($mysql->connect_errno) exit('Ошибка подключения БД');
    $mysql->set_charset('utt8');
    $mysql->close();
?>
