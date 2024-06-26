import './style.css'
import Button from '../../components/button';
import Input from '../../components/input';
import api from '../../lib/api'
import cookie from 'js-cookie'
import {Link} from "react-router-dom";


import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Authpage() {
    const navigate = useNavigate();

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const handleClick = async (e) => {
        if (!login || !password) return;
        api.post('/login', { email: login, password}).then((res) => {
            const token = res.data.token
            if (!token ) console.log("error") 
            cookie.set('token', `Bearer ${token}`, {
                expires: 30,
                httpOnly: false
            })
            navigate("/");
        }).catch((e)=> {
            console.log(e);
        })
    }
    return ( 

        <div className="auth">
            <div className="window">
                <div className="ots">
                    <p className="header">Авторизация</p>
                    <p className="podheader">Пожалуйста, введите данные вашего профиля в полях</p>

                    <Input
                        disabled={false}
                        id="name"
                        label="Почта"
                        onChange={(value) => setLogin(value)}
                        placeholder="Почта"
                        value={login}
                        type="text"
                    />

                    <Input
                        disabled={false}
                        id="name1"
                        label="Пароль"
                        onChange={(value) => setPassword(value)}
                        placeholder="Пароль"
                        value={password}
                        type="password"
                    />
                    <div>
                        <p>       
                        <a href='/kod' className="btn-forget">Забыли пароль?</a>
                        </p>
                    </div>
                    <Button onClick={handleClick}>
                        Войти
                    </Button>
                    
                    <div style={{ marginTop: "2em" }}>
                        
                    </div>

                    <div className="recovery_text">
                            <span className="regi">У вас еще не создана учетная запись? </span>
                            <Link className="reg-a" to="/reg">Регистрация</Link>
                    </div>         
                </div>
            </div>    
        </div>
    );
}
export default Authpage;