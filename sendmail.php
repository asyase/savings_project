<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->IsHTML(true);

$mail->setFrom('elle.sinelle@gmail.com', 'Transfer');

$mail->addAddress('lena_primakova@mail.ru');

$mail->Subject = 'Заказ с сайта';

$body = '<h1>Заказ с сайта</h1>';

$body .='<p><span>Форма заявки: </span>'.$_POST['formName'].'</p>';
$body .='<p><span>Пункт отправления: </span>'.$_POST['departure'].'</p>';
$body .='<p><span>Направление поездки по Европе: </span>'.$_POST['goto'].'</p>';
$body .='<p><span>Дата отправления: </span>'.$_POST['date'].'</p>';
$body .='<p><span>Количество пассажиров: </span>'.$_POST['places'].'</p>';
$body .='<p><span>Адрес: </span>'.$_POST['address'].'</p>';
$body .='<p><span>Телефон: </span>'.$_POST['tel'].'</p>';
$body .='<p><span>Наличие багажа: </span>'.$_POST['luggage'].'</p>';
$body .='<p><span>Тип груза: </span>'.$_POST['cargoType'].'</p>';
$body .='<p><span>Вес груза груза: </span>'.$_POST['weight'].'</p>';
$body .='<p><span>Комментарии: </span>'.$_POST['comments'].'</p>';

$mail->Body = $body;

if (!$mail->send()) {
  $message = 'Ошибка';
} else {
  $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>