import './stylereg.css'

function Reg() {


    
    return ( 
        <div class="vrop"> 
            <div class="content">
                <div class="reg">
                    <div class="window">
                        <div class="ots">
                            <p class="header">Регистрация</p>
                            <p class="podheader">Пожалуйста, введите данные вашего будущего профиля в полях</p>
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