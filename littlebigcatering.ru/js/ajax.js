console.log("123");

function SendPost() { // Наша функция, которая будет осуществлять ajax-отправку
	jQuery.ajax({    // Начала конструкции для работы с Ajax через jQuery
		type: "POST", // Метод, которым получаем данные из формы
		url: "../send.php", // Обработчик формы.
		data: jQuery("#form").serialize(), // Этот метод, берет форму с id=form и достает оттуда данные
		success: function(html) {    // функция выполняемая при успешном отправлении данных
		jQuery("#form").empty();    // очищаем тело документа
		//jQuery("form").append("<h2><center>Ваше сообщение успешно отправлено.</center></h2>");
		//function changeurl(){eval(self.location="http://littlebigcatering.ru/index.html");}
		//window.setTimeout("changeurl();",500); // вставляем сообщение об успехе
		}
	});
}

