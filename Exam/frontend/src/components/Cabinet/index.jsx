import "./style.scss"
import { useState } from "react";
import { Modal } from "./ModalWindow/Modal";

function Kabinet() {
    const [modalInfoIsOpen, setmodalInfoIsOpen] = useState(false)

    return (
        <div className="cabinet-wrapper">
            <div className="cab-wraper">
                <h1>Личный Кабинет</h1>
                <h3>Хочешь зарегистрироватся?</h3>
                <button
                onClick={() => setmodalInfoIsOpen(true)}
                >Регистрация/Логин</button>
                
                <Modal 
                isOpen ={modalInfoIsOpen}
                onClose={() => setmodalInfoIsOpen(false)}
                >
                    <div className="reg-form">
                        <form>
                            <input name="email" type="text" placeholder="Введите свой email.." />
                            <input name="password" type="password" placeholder="Введите свой пароль.." />
                            <button>Региcтрация</button>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Kabinet;