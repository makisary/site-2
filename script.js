const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

$(document).ready(function () {
  var text = window.location.href;// Берем ссылку
  var regex = /#(\w+)/gi;
  match = regex.exec(text);// Находим в ней все, что находится после знака #
  if (match)// Если нашел
  {
    $('.tab-pane').removeClass('in active');// Удаляем все активные табы
    $('#' + match[1]).addClass('in active');// Добавляем класс 'in active' к ид у которого название с ссылки совпадает с ид у таба
  }
});