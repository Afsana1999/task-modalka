// import React, { useState } from "react";
// import useOutsideClick from "../hooks/useOutsideClick";
// function DropDown() {
//   const [isClick, setIsClick] = useState(false);
//   const close = () => setIsClick(false);
//   const { ref } = useOutsideClick(close);
//   return (
//     <div ref={ref}>
//       <button onClick={setIsClick(true)}>dropu ac </button>
//       {isClick && (
//         <div>
//           <ul>
//             <li>a</li>
//             <li>b</li>
//             <li>c</li>
//           </ul>
//           <button onClick={close}>dropu bagla</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DropDown;
