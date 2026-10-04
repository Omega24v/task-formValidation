export const getErrors = ({ email, password, repeatPassword }) => {
	const passwordError = validatePassword(password);
	const repeatPasswordError = validatePassword(repeatPassword);

	return {
		email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
			? "Поле должно быть правильного email формата"
			: null,
		password: passwordError,
		repeatPassword:
			repeatPasswordError ??
			(password !== repeatPassword ? "Пароли не совпадают" : null),
	};
};

export const validatePassword = (value) => {
	if (!/^[a-zA-Z0-9@]*$/.test(value)) {
		return "Поле может включать буквы, цифры и символ @";
	} else if (value.length < 12 || value.length > 16) {
		return "Поле должно быть от 12 до 16 символов";
	}

	return null;
};
