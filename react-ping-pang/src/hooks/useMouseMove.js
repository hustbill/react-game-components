import { useEffect } from 'react'

 const useMouseMove = () => {

  useEffect(() => {
    console.log("render");
    const onMouseMove = e => {
      console.log(e);
    }
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      //  console.log('cleanup');
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);

    console.log('useMouseMove hook');
}

export default useMouseMove;