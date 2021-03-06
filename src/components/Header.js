import React, {memo} from 'react';
import cw from "../assets/cw_logo.png";

const Header =({img})=>{
    console.log("Rendering : Header Comp!");
    return(
        <div className="header">
            <img src={img ? img : cw}
            alt={"cw_logo"}
            style={{margin:"1rem", maxHeight: "200px"}}
            />
        </div>
    )
};

export default memo(Header);//Header componentinin fuzuli render olmasını önlemek için React.memo kullandık

// const Header =({img})=>{
//     console.log("Rendering : Header Comp!");
//     return(
//         <div className="header">
//             <img src={img ? img : cw}
//             alt={"cw_logo"}
//             style={{margin:"1rem", maxHeight: "200px"}}
//             />
//         </div>
//     )
// };

// export default React.memo(Header);//Header componentinin fuzuli render olmasını önlemek için React.memo kullandık

// const Header =React.memo(({img})=>{//Header componentinin fuzuli render olmasını önlemek için React.memo kullandık
//     console.log("Rendering : Header Comp!");
//     return(
//         <div className="header">
//             <img src={img ? img : cw}
//             alt={"cw_logo"}
//             style={{margin:"1rem", maxHeight: "200px"}}
//             />
//         </div>
//     )
// });

// export default Header;