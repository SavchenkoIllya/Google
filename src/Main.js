import React from 'react';
import GoogleLogo from './imgs/google_logo.png';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/bi/search';
import keyboardIcon from '@iconify-icons/vaadin/keyboard';
import microphoneSolid from '@iconify-icons/clarity/microphone-solid';
import Modal from './Modal.js';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.Enter = this.Enter.bind(this);
    }

    state = {
        browserHistory : []
    }

    inputText () {
        let arr = this.state.browserHistory
        const txtToPut = document.getElementById('input').value
        if(!(arr && arr[0] && arr[0] === txtToPut) &&  txtToPut !== '') {
            arr.unshift(txtToPut)
            arr = arr.slice(0,10)
        }
        this.setState({ browserHistory : arr})
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

    deleteHist = (index) => {
        let arr_2 = this.state.browserHistory
        arr_2.splice(index, 1);
        this.setState({browserHistory : arr_2})
    }

    componentDidMount (){
        let inputForm = document.getElementById('inputForm');
        let modalHistory = document.getElementById('modalHistory');
        let Background = document.getElementById('rood');
        let amount = this.state.browserHistory;

        inputForm.addEventListener('click', function(){
            if(amount > ''){
                modalHistory.classList.add('modal-view')
                inputForm.classList.add('clicked')
                }
            });

        Background.addEventListener('click', function (e){
            if(e.target.classList.contains('input-overlay')){
                    modalHistory.classList.remove('modal-view')
                    inputForm.classList.remove('clicked')}
        })

        // Background.addEventListener('click', function(e){
        //     if(!e.target.closest('input-overlay') && e.target.closest('cross-icon')){
        //     modalHistory.classList.remove('modal-view')
        //     inputForm.classList.remove('clicked')
        //     }
        // });
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
                        <Modal delete={this.deleteHist} customClick={this.handleClick} history={this.state.browserHistory}/>
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