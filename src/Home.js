//click events in react
//what if we want to pass an argument  if we use paranthesis it will invoke the function
//so we are gonna anonymouse function insid e that we have to a pass a argument
// next we are wannna change a value of variable and make it an react value using react hook use state
// lets add some blogs to our app
//passing function as a props
// we are going to crate a json server
//lodaing message using conditional template
//error handling in react js

import BlockList from "./BlockList";
import useFetch from "./useFetch";


const Home = () => {
// // let name = 'esakki' instead  of doing this
// const [name,setName] =useState('Esakki')
// const explode = ()=>{
//     if(name === 'Esakki'){
//         setName('Muthu')
//     }else setName('Esakki')
//     console.log(name)//i t does'nt change on renders
// }

//for blog

//giving Dependencies to Use Effect
// const [name,Setname]=useState('Esakki')

//lets do custom hook

  const{datas:blogs ,ispending,error} = useFetch(' http://localhost:5000/blogs')


    return ( 
        
    <div className="home">
    {ispending &&  <h1> Loading...</h1>}
    {error && <h1>{error.message}</h1>}
    { blogs && <BlockList blogs={blogs} title='All Blogs!'  />}

    {/* <BlockList blogs={blogs.filter((blog)=>blog.author==='Muthu')} title='Muthu Blogs'/> */}

  
        </div>
    );
}
 
export default Home;