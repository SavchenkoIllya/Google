import React from 'react';
import { useSelector } from 'react-redux';
import {store} from './index.js';
import {DELETE_HIST} from './redux/types';

//Icons
import { Icon } from '@iconify/react';
import clockCircleOutlined from '@iconify-icons/ant-design/clock-circle-outlined';
import crossIcon from '@iconify-icons/akar-icons/cross';

function Modal(props){
    const history = useSelector(state => state.browserHistory)

        return (
                <div id='modalHistory' className='modal'>
                        <div className='modal-content-wrapper'>
                            {history.map((x, index)  => 
                                    <div className='modal-element' key={x+Date.now()}>
                                        <Icon icon={clockCircleOutlined} className='clock-icon'/>
                                        <div className='modal-content'>{x}</div>
                                        <Icon 
                                        onClick= {() => store.dispatch ({type: DELETE_HIST, payload: index})}
                                        icon={crossIcon} className='cross-icon'/>
                                    </div>).reverse()}
                        </div>
                        <div className='buttons-modal'>
                            <button onClick={props.customClick}  className='button1' type='submit'>Поиск в Google</button>
                            <button onClick={props.customClick} className='button1' type='submit'>Мне повезёт!</button>
                        </div>
                    </div>           
        )
    }

export default Modal;