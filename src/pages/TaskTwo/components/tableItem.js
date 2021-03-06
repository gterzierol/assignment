import React from 'react'
import {FiEdit3} from 'react-icons/fi'
import {AiFillDelete} from 'react-icons/ai'

function tableItem(props) {
    
    const handleEditClick= (e) => {
        props.setId(e.target.id)
    }
    const handleDeleteClick = (e) => {
        const newArr = props.list.slice(0,e.target.id);
        const lastArr = props.list.slice(e.target.id+1);
        const restArr = newArr.concat(lastArr)
        props.setList(restArr);
    }
    return (
            <div className='items'>
                <div className='item'>
                    {props.name}
                </div>
                <div className='item'>
                    {props.surname}
                </div>
                <div className='item'>
                    {props.phone}
                </div>
                <div className='item'>
                    <div id={props.index} onClick={handleEditClick}>
                        <FiEdit3 id={props.index} className='icon'/>
                    </div>
                    <div id={props.index} onClick={handleDeleteClick}>
                        <AiFillDelete id={props.index} className='icon'/>
                    </div>
                </div>
            </div>
        
    )
}

export default tableItem
