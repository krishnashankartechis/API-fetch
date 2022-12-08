import React from "react";
import { useState, useEffect } from "react";
import Content from "./Content";


  // const [data , setData]  = useState("");

  // var dats = fetch('https://api.nasa.gov/planetary/apod?api_key=7xR446bsgJshXaFicoPLhYg0UWNCN4b9bUJPG0dH')
  // .then((response)=> response.json())
  // .then((datas) => console.log(datas));

  

  // const photosApiIndexConst = {
  //     id: 0,
  //     image: 100,
  // }

  

// export default function Sample() {
//   const [posts, setPosts] = useState([]);
//   const fetchPost = async () => {
//     const response = await fetch(
//       "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=7xR446bsgJshXaFicoPLhYg0UWNCN4b9bUJPG0dH"
//     );
//     const data = await response.json();
//     setPosts(data.photos);
//     // console.log(data.photos[0]);
//   };

//   useEffect(() => {
//     fetchPost();
//   }, []);
//   console.log(posts[0])
//   return (
//     <div className="App">
//       {posts.map((post) => (
//         <div>
//         <img style={{
//             width:"50%" , 
//             height:"40vh",
//         }} key={post.id} src={post.img_src} alt="" />
//         <p>{post.id}</p>
//         </div>
//       ))}
     
//     </div>
//   );



// export default function App() {
//    const [posts, setPosts] =  useState([])
//    const fetchPost = async () => {
//     const response = await fetch(
//       "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=7xR446bsgJshXaFicoPLhYg0UWNCN4b9bUJPG0dH"
//     );
//     const data = await response.json();
//     setPosts(data.photos);
//     console.log(data.photos)
//    }
//    useEffect(() => {
//     fetchPost()
//   }, []);
//   return (
//     <div>
//     {
//         posts.map((post)=>{
//             return(
//                 <div>
//                 <p>{post.id}</p>
//                 <img src={post.img_src
// } alt="" />
//                 </div>
//             )
//         })
//     }
//     </div>
//   );
// }


export default function App ()
{
  const [posts , setPosts] = useState([])

  const fetchPost = async () => {
  const response = await fetch(
    "https://all-the-weather.herokuapp.com/cities"
  );
  const data = await response.json();
  
  setPosts(data.items)
  //console.log(data.items)

  
  }

  console.log(posts[0]);

  useEffect(() => {
    fetchPost()
  } , []);


  return(
    <>
    <button className="head" >Region</button>
    <button className="head">Country</button>
    <button className="head">City</button> <br/> 

    {
      (posts).map(item => 
        <Content regionCode={item.regionCode} countryCode={item.countryCode} name={item.name} />
      //   <li key={item.id} > <p> Region Code : {item.regionCode} </p>
      //  <p>Country Code :-  {item.countryCode}</p>
      //  <p> Country Name :- {item.name} </p>
        // </li>
        )
    }
    </>
  );

}