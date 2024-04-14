import './stylekod.css'

function Kod() {
    return ( 
        <div class="vrop"> 
            <div class="content">
                <div class="kod">
                    <div class="window">
                            <p class="header">Код доступа</p>
                            <p class="podheader">Пожалуйста, введите данные код доступа к регистрации в поле</p>
                            <p class="koddos">Код доступа</p>
                            <input type="number" placeholder="Number"/>
                            <p class="podtv">Подтвердить</p>
                    </div>    
                </div>
            </div>
        </div>
    );
}
export default Kod;