const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberRegex = /^(\()\d{2}(\))(\s)?(\d{4}|\d{5})?(-|\s)\d{4}$/;
const form = document.forms['form'];

const createRequiredSpan = (field, element) => {
  const s = document.createElement('span');
  s.className = 'required';
  s.innerHTML = `*O campo ${field} é obrigatório`;
  element.after(s);
  return s;
};

const validateForm = (e) => {
  e.preventDefault();
  for (let i = 0; i < form.length - 1; i++) {
    const value = form[i].value;
    const element = document.getElementsByClassName('form-info')[i];
    const elementSibling = element.nextElementSibling || 'empty';
    if (elementSibling.className === 'required') {
      elementSibling.remove();
    }
    let field = form[i].labels[0].innerHTML;
    field = field.replace(/:/, '').toLowerCase();
    if (value == '') {
      createRequiredSpan(field, element);
    } else {
      if (form[i].name == 'email' && !emailRegex.test(value)) {
        const s = document.createElement('span');
        s.className = 'required';
        s.innerHTML = '*O campo email está incorreto';
        element.after(s);
      }
      if (form[i].name == 'phone-number' && !numberRegex.test(value)) {
        const s = document.createElement('span');
        s.className = 'required';
        s.innerHTML = '*O campo telefone está incorreto';
        element.after(s);
      }
    }
  }
};

export default validateForm;
