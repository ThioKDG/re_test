import { useEffect, useState } from 'react';

function Resize1() {
   console.log("resize");
   const [width, setWidth] = useState(null);
   
   useEffect(() => {
      window.addEventListener('resize', () =>{
         setWidth(window.innerWidth)
      })

   }, []);
   useEffect(() => {
      console.log(width)
   }, [width]);

   return (
      <>

      </>
   );
}

export default Resize1;