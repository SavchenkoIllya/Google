import React from 'react';
import {CREATE_HIST} from './redux/types';
import {store} from './index.js';

//Assets
import GoogleLogo from './imgs/google_logo.png';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/bi/search';
import keyboardIcon from '@iconify-icons/vaadin/keyboard';
import microphoneSolid from '@iconify-icons/clarity/microphone-solid';

// modules
import Modal from './Modal.js'

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.Enter = this.Enter.bind(this);
    }

    inputText () {
        const txtToPut = document.getElementById('input').value
        store.dispatch({type : CREATE_HIST, payload: txtToPut})
    }

    Enter (e){
        if(e.key === "Enter") {
            this.inputText();
        }
    }

    handleClick (e) {
        e.preventDefault ();
        this.inputText();
    } 

    componentDidMount (){
        let inputForm = document.getElementById('inputForm');
        let modalHistory = document.getElementById('modalHistory');
        let Background = document.getElementById('rood');
        let inpt = document.getElementById('input')

        Background.addEventListener('click', function (e){
            if(e.target !== modalHistory && e.target !== inputForm && e.target !== inpt){
                    modalHistory.classList.remove('modal-view')
                    inputForm.classList.remove('clicked')}
        })

        inpt.addEventListener('click', ()=>{
            modalHistory.classList.add('modal-view')
        })
    }

    render(){
        return(
            <div>
                <div className='center'>
                    <img src={GoogleLogo} className='google-logo' alt='Logo'/>
                </div>
                <div className='center-2'>
                    <div className='input-overlay'>
                        <div id="inputForm" className='search-form'>
                            <Icon icon={searchIcon} />
                            <input onKeyDown={this.Enter} autoComplete='off' type='text' id='input' className='inputio' />
                            <Icon icon={keyboardIcon} />
                            <Icon icon={microphoneSolid} className='micro' />
                        </div>
                        <Modal id='modalpopup' delete={this.deleteHist} customClick={this.handleClick}/>
                    </div>
                    <div className='buttons'>
                        <button onClick={this.handleClick} className='button1'>Поиск в Google</button>
                        <button onClick={this.handleClick} className='button1'>Мне повезёт!</button>
                    </div>
                    <div className='info'>
                        <span>Сервисы Google доступны на разных языках: </span><a className='country' href='#10'>русский</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;