import * as yup from "yup"

export const fieldsScheme = yup.object()
	.shape({
		email: yup.string()
			.email('Введите корректный email')
			.required('Введите email'),
		password: yup.string()
			.matches(/^[a-zA-Z0-9@]*$/, 'Пароль может содержать только латинские буквы, цифры и @')
			.max(16, 'Поле должно быть от 12 до 16 символов')
			.min(12, 'Поле должно быть от 12 до 16 символов')
			.required('Введите пароль'),
			repeatPassword: yup.string()
			.matches(/^[a-zA-Z0-9@]*$/, 'Пароль может содержать только латинские буквы, цифры и @')
			.max(16, 'Поле должно быть от 12 до 16 символов')
			.min(12, 'Поле должно быть от 12 до 16 символов')
			.oneOf([yup.ref('password')], 'Пароли не совпадают')
			.required('Повторите пароль'),
	})
