import './stylereg.css'
import Button from '../../components/button';
import Input from '../../components/input';
import api from '../../lib/api'
import cookie from 'js-cookie'
import {Link} from "react-router-dom";
import MiniInput from '../../components/MiniImput';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";




function Reg() {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

	async function registerUser(event) {
		
        event.preventDefault()

		const response = await fetch('http://localhost:3000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
				lastName,
                email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate.push('/')
		}
	}


    return ( 
        <div class="vrop"> 
            <div class="content">
                <div class="reg">
                    <div class="window">
                        <div class="ots">
                            <p class="header">Регистрация</p>
                            <p class="podheader">Пожалуйста, введите данные вашего будущего профиля в полях</p>

                            <Input
                                disabled={false}
                                id="email"
                                label="Email"
                                onChange={(value) => setEmail(value)}
                                placeholder="Email"
                                value={email}
                                type="email"
                            />

                            <MiniInput
                                disabled={false}
                                id="firstName"
                                label="First Name"
                                onChange={(value) => setFirstName(value)}
                                placeholder="First Name"
                                value={firstName}
                                type="firstName"
                            />

                            <MiniInput
                                disabled={false}
                                id="lastName"
                                label="Last Name"
                                onChange={(value) => setLastName(value)}
                                placeholder="Last Name"
                                value={lastName}
                                type="lastName"
                            />

                            <Input
                                disabled={false}
                                id="password"
                                label="Password"
                                onChange={(value) => setPassword(value)}
                                placeholder="Password"
                                value={password}
                                type="password"
                            />
                            <Input
                                disabled={false}
                                id="password"
                                label="Repeat the password"
                                onChange={(value) => setPassword(value)}
                                placeholder="Repeat the password"
                                value={password}
                                type="password"
                            />

                            <p class="pocht">Почта</p>
                            <input type="text" placeholder="Email"/>
                            <p class="login">Логин</p>
                            <input type="text" placeholder="Login"/>
                            <div class="dir">
                                <div class="Name">
                                    <p class="name">Имя</p>
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div class="fam">
                                    <p class="firstn">Фамилия</p>
                                    <input type="text" placeholder="Last name"/>
                                </div>
                            </div>
                            <p class="parol">Пароль</p>
                            <input type="password" placeholder="Password"/>
                            <p class="podtparol">Подтвердите пароль</p>
                            <input type="password" placeholder="Repeat password"/>
                            <p class="akk">Создать аккаунт</p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );

}
export default Reg;

//     return ( 

//         <div className="auth">
//             <div className="window">
//                 <div className="ots">
//                     <p className="header">Авторизация</p>
//                     <p className="podheader">Пожалуйста, введите данные вашего профиля в полях</p>

//                     <Input
//                         disabled={false}
//                         id="name"
//                         label="Почта"
//                         onChange={(value) => setLogin(value)}
//                         placeholder="Почта"
//                         value={login}
//                         type="text"
//                     />

//                     <Input
//                         disabled={false}
//                         id="name1"
//                         label="Пароль"
//                         onChange={(value) => setPassword(value)}
//                         placeholder="Пароль"
//                         value={password}
//                         type="password"
//                     />
//                     <div>
//                         <p>       
//                         <a href='/kod' className="btn-forget">Забыли пароль?</a>
//                         </p>
//                     </div>
//                     <Button onClick={handleClick}>
//                         Войти
//                     </Button>
                    
//                     <div style={{ marginTop: "2em" }}>
                        
//                     </div>

//                     <div className="recovery_text">
//                             <span className="regi">У вас еще не создана учетная запись? </span>
//                             <Link className="reg-a" to="/reg">Регистрация</Link>
//                     </div>         
//                 </div>
//             </div>    
//         </div>
//     );
// }
// export default Reg;