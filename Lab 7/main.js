function Task1() {
  let course = Number(document.querySelector('#course').value);
  let extramural = Number(document.querySelector('input[name="type"]:checked').value);
  let language = Number(document.querySelector('#language').value);
  let reporting = Number(document.querySelector('#reporting').value);

  document.querySelector('#prise').innerHTML = '<strong>Итоговая цена: </strong>' + (course + extramural + language + reporting) + '$';
};
