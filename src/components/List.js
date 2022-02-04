import React from 'react';
import ListItem from './ListItem';

const List=React.memo(({students, add})=>{
    console.log("Rendering : List Comp!");

    return (
        <div className="list">
            {students?.map((student)=>{// ?--> ile optinal chaining kullanımı yaptık veri geç gelirse hata vermesini önleriz 
                return <ListItem key={student.id} student={student} add={add} />
            })}
        </div>
    )
});

export default List;