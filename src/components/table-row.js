import React from 'react';

const TableRow = (props) =>{
let embedUser=`https://www.freecodecamp.com/${props.leader.username}`;
return(
            
            <tr>
            <td>{props.count}</td>
            <td><img src={props.leader.img} className="img-rounded" width="40px" height="40px"></img>
            <a  href={embedUser} target="_blank">{props.leader.username}</a></td>
            <td>{props.leader.recent}</td>
            <td>{props.leader.alltime}</td>
            </tr>
            
);

}

export default TableRow;
