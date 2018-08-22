"use strict";

function showDialog(title, message) {

    $("#dialog").dialog("option", "title", title);
    $("#dialog").empty();
    $("#dialog:empty").text(message);
    $("#dialog").dialog("open");

}

function checkInput(input, pattern) {
    if (!pattern.test(input.value)) {
       // $(input).effect("shake");
        input.style.borderColor = 'red';
        $(input).effect("shake");
        if (input.value != '') {
            showDialog(input.placeholder, "Ошибка ввода ");
        }
        event.preventDefault();
    } else {
        input.style.borderColor = 'green';
    }
}

function checkForm() {
    checkInput(document.getElementById('name'), /^[a-zA-ZА-Яа-пр-я]+$/);
    checkInput(document.getElementById('phone'), /^\+7\(\d{3}\)\d{3}-\d{4}$/);
    checkInput(document.getElementById('email'), /^[a-zA-ZА-Яа-пр-я_.-]+@[a-z]+\.[a-z]{2,3}$/);
    event.preventDefault();

    return false;
}

document.getElementById('contact').addEventListener('submit', checkForm);

(function ($) {
    $(document).ready(function () {
        $.get('cities.json', {}, function (cities) {
            var $select = $('<select />');
            cities.forEach(function (element) {
                var $option = $('<option />', {
                    value: element.city,
                    text: element.city
                });
                $select.append($option);
            });
            $('#email').after($select);
            $('select').addClass('txt');

        }, 'json');
    });
})(jQuery);

$("#dialog").dialog({autoOpen: false});