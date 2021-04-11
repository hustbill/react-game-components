import {useEffect} from 'react'

const Hello = () => {
    console.log('show hello');


  useEffect(() => {
    console.log("render");
    

    return () => {
       console.log('cleanup');
    }
  }, []);

  return 'hello';
}


export default Hello;