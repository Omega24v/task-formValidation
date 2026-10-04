import { useRef, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { fieldsScheme } from "./validation";
import styles from "./App.module.css";

export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(fieldsScheme),
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: ''
		},
		mode: "onChange",
	})

	const onSubmit = (formData) => {
		console.log(formData);
	};

	const submitButtonRef = useRef(null);

	useEffect(() => {
		if(isValid) {
			submitButtonRef.current?.focus();
		}
	}, [isValid])

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{errors.email?.message && (
					<div className={styles.error}>{errors.email?.message}</div>
				)}
				<input
					className={styles.input}
					type="email"
					placeholder="Введите Ваш email"
					{...register("email")}
				/>
				{errors.password?.message && (
					<div className={styles.error}>{errors.password?.message}</div>
				)}
				<input
					className={styles.input}
					type="password"
					placeholder="Введите Ваш пароль"
					{...register("password")}
				/>
				{errors.repeatPassword?.message && (
					<div className={styles.error}>{errors.repeatPassword?.message}</div>
				)}
				<input
					className={styles.input}
					type="password"
					placeholder="Введите повторно Ваш пароль"
					{...register("repeatPassword")}
				/>
				<button className={styles.button} type="submit" ref={submitButtonRef} disabled={!isValid}>
					Зарегистрироваться
				</button>
			</form>
		</>
	);
};
