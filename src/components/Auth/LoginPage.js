import React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import styles from './login.module.css';

const LoginPage = ({ theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <ThemeProvider theme={createTheme(defaultTheme)}>
            <div className={styles.background}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>
            <form onSubmit={submit} className={styles.form}>
                <h3 className={styles.head}>Login Here</h3>
                <label className={styles.label}>Email Id</label>
                <input
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Email"
                    className={styles.input}
                    onChange={e => setEmail(e.target.value)}
                />

                <label className={styles.label}>Password</label>
                <input
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Password"
                    className={styles.input}
                    onChange={e => setPassword(e.target.value)}
                />
                <input 
                    type='submit' className={styles.button} value='Login'
                />
            </form>
            <Notification />
        </ThemeProvider>
    );
};

export default LoginPage;