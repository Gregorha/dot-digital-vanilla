

const phoneMask = (e, field) => {
  let v = e.target.value;
  v = v.replace(/\D/g, '');
  v = v.replace(/^(\d\d)(\d)/g, '($1) $2');
  if (v.length < 14) {
    v = v.replace(/(\d{4})(\d)/, '$1-$2');
    field.value = v;
    return v;
  }
  v = v.replace(/(\d{5})(\d)/, '$1-$2');
  field.value = v;
  return v;
};

export default phoneMask;
