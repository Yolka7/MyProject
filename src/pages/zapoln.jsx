import '../pages/auth/stylezapoln.css'

function Zapoln() {
    
    var str="nvbirne"
    return ( 
        <div class="vrop"> 
            <div class="content">
                <div class="qwerty"> <p><strong>QWERTY Solution </strong></p> <div class = "User"> <p>{str}</p>  <img src="car.jpg" class="Img"></img> </div> </div>
                <div class="auth">
                    <div class="window">
                    <p class="header">Заполнение заявки</p>
                        <div class="zapoln">
                            <div class="Vopros">
                            <p class="one">1. Тема</p>
                            <p class="podheader">Опишите свою проблему в размере нескольких слов.</p>
                            <input class="first" type="text" placeholder="Введите ответ"/> </div>
                            <div className="Vopros">
                            <p class="one">2. Категория</p>
                            <p class="podheader">Выберите категорию, которая лучше всего подходит под вашу проблему.</p>
                            <div class="circle">
                                
                                <label for="Бухгалтерия"> <input type="radio" id="Бухгалтерия" name="category" value="Бухгалтерия" checked /> Бухгалтерия</label>
                            
                                
                                <label for="Отдел кадров"> <input type="radio" id="Отдел кадров" name="category" value="Отдел кадров" /> Отдел кадров</label>
                        
                                
                                <label for="Отдел закупок"> <input type="radio" id="Отдел закупок" name="category" value="Отдел закупок" /> Отдел закупок</label>
                            </div> </div>
                            <div className="Vopros">
                            <p class="one">3. Описание</p>
                            <p class="podheader">Расскажите подробнее о причине вашего обращения.</p>
                            <input class= "three"type="text" placeholder="Введите ответ"/> </div>
                            <div className="Vopros">
                            <p class="one">4. Дополнительные материалы</p>
                            <p class="podheader">Загрузите дополнительные файлы, которые помогут нам лучше разобраться в ситуации.</p>
				            <input type="file" name="additionalFiles" multiple />
                            </div>
                            <div className="Knopki">
                            <input class="Cancel" type="reset" value="Отменить"/>
                            <input class="Send" type="submit" value="Отправить"/> </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
}
export default Zapoln;