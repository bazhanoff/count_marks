import React from 'react';

import './styles.css';

const Login = props => {
    const { username, password, onButtonClick } = props;

    return (
        <main className="container login">
            <div className="login__content">
                <h2>Вход</h2>
                <label className="login__field">
                    <span className="login__hint">Логин</span>
                    <input className="login__input" defaultValue={ username } />
                </label>
                <label className="login__field">
                    <span className="login__hint">Пароль</span>
                    <input className="login__input" defaultValue={ password }/>
                </label>
                <button className="login__button" onClick={ onButtonClick }>Войти</button>
            </div>
        </main>
    )
}

export default Login;