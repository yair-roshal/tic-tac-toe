import React from 'react'
import classes from './Board.module.css'
import BoardItem from './BoardItem/BoardItem'
import {connect} from 'react-redux'


const Board = (props) => {




    const items = []

    for (let index = 0 , row =-1; index < 9; index++) {

        if(index%3===0){
            row++;
        }
        
        items.push(<BoardItem col={index%3==0 ? 0 : index%3} row={row} onClickItem={props.onClickItem} value={props.board[row][index%3==0]} key={`item${index}`} index={index}/>);
    }

    return (
        <div className={classes.Board}>
            {items}
        </div>
    )

}



const mapStateToProps = state =>{
    return {
        board:state.board
    }
}

const mapDispatchToProps = dispatch =>{

    return {
        onClickItem : (col , row) => dispatch({type:"CLICKITEM" , payload:{col:col , row:row}})

    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Board)