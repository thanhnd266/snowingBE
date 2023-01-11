
const removeSpecialCharacter = (str) => {
    const special_chars = /[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/;
    return str.replace(special_chars, '');
}

const removeAccent = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

const isValidEmail = (email) => {
    return !!email && typeof email === 'string' && email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}

module.exports = {
    removeSpecialCharacter, removeAccent, isValidEmail
}