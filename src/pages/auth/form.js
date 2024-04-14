import React from "react";

class Form extends React.Component {
    render() {
       return (
        <form>
            <input tipe="text" name="login" placeholder="Логин"/>
            <button>Введи логин</button>
        </form>
       )
    }
}
export default Form;