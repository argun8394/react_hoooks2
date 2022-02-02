import React from 'react';

const ListItem=({student,add})=>{
    console.log("Rendering : ListItem Comp!");
    return(
        <div className="listItem" onClick={()=> add(student)}>
            <img
            src={`https://avatar.dicebar.com/v2/avataaars/${student.id}.svg`}
            alt="" />
            {student?.name}
        </div>
    )
}

export default ListItem;
