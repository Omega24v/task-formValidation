import { useState, useRef, useEffect } from "react";
import styles from "./App.module.css";
import { getErrors } from "./validation";

export const App = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		repeatPassword: "",
	});

	const submitButtonRef = useRef(null);

	const onSubmit = (event) => {
		event.preventDefault();

		if (!isFormValid) return;

		console.log({
			email,
			password,
			repeatPassword,
		});
	};

	const { email, password, repeatPassword } = formData;
	const validationErrors = getErrors(formData);
	const isFormValid = Object.values(validationErrors).every(
		(error) => error === null,
	);

	useEffect(() => {
		if(isFormValid) {
			submitButtonRef.current?.focus();
		}
	}, [isFormValid])

	return (
		<>
			<form className={styles.form} onSubmit={onSubmit}>
				{email && validationErrors.email && (
					<div className={styles.error}>{validationErrors.email}</div>
				)}
				<input
					className={styles.input}
					type="email"
					name="email"
					value={email}
					placeholder="Введите Ваш email"
					onChange={({ target }) =>
						setFormData({
							...formData,
							email: target.value,
						})
					}
				/>
				{password && validationErrors.password && (
					<div className={styles.error}>
						{validationErrors.password}
					</div>
				)}
				<input
					className={styles.input}
					type="password"
					name="password"
					value={password}
					placeholder="Введите Ваш пароль"
					onChange={({ target }) =>
						setFormData({
							...formData,
							password: target.value,
						})
					}
				/>
				{repeatPassword && validationErrors.repeatPassword && (
					<div className={styles.error}>
						{validationErrors.repeatPassword}
					</div>
				)}
				<input
					className={styles.input}
					type="password"
					name="repeatPassword"
					value={repeatPassword}
					placeholder="Введите повторно Ваш пароль"
					onChange={({ target }) =>
						setFormData({
							...formData,
							repeatPassword: target.value,
						})
					}
				/>
				<button className={styles.button} type="submit" ref={submitButtonRef} disabled={!isFormValid}>
					Зарегистрироваться
				</button>
			</form>
		</>
	);
};
