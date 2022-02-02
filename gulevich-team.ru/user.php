<?php
    date_default_timezone_set('UTC');

    $fd = fopen("hello.txt", 'a') or die("не удалось создать файл");
    $width = $_GET['width'];
    $height = $_GET['height'];
    $user = $_GET['user'];
    $date = date('l jS \of F Y h:i:s A');
    $str = 'Дата:'.$date."\n".'Ширина экрана: '.$width.'px'."\n".'высота экрана: '.$height.'px'."\n".'устройство: '.$user."\n\n";
    
    fwrite($fd, $str);
    fclose($fd);
    //use get
?>