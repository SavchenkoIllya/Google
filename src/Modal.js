import React from 'react';
import { Icon } from '@iconify/react';
import clockCircleOutlined from '@iconify-icons/ant-design/clock-circle-outlined';
import crossIcon from '@iconify-icons/akar-icons/cross';
import {connect} from "react-redux"
import {DELETE_HIST} from './redux/types';
import { store } from './index.js';

const Modal = function Modal(props){

        return (
                <div id='modalHistory' className='modal'>
                        <div className='modal-content-wrapper'>
                            {
                                props.history.map(
                                    (x, index)  => 
                                    <div className='modal-element' key={x+'deletekey'}>
                                        <Icon icon={clockCircleOutlined} className='clock-icon'/>
                                        <div className='modal-content'>{x}</div>
                                        <Icon 
                                        onClick={
                                            () => {
                                                props.delete(index)
                                                store.dispatch ({type: DELETE_HIST})}
                                        }
                                        icon={crossIcon} className='cross-icon'/>
                                    </div>
                                    )
                            }
                        </div>
                        <div className='buttons-modal'>
                            <button onClick={props.customClick} className='button1' type='submit'>Поиск в Google</button>
                            <button onClick={props.customClick} className='button1' type='submit'>Мне повезёт!</button>
                        </div>
                    </div>           
        )
    }

export default connect(null, null)(Modal);