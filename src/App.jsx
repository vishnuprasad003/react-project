import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer"
import Header from "./component/Header"
import Home from "./pages/Home"
// import HomeCarousels from './component/HomeCarousels';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetails from './pages/ProductDetails';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import {ToastContainer} from "react-toastify"
import AddProduct from './admin/AddProduct';


function App() {
// const products=[
//   {_id:1,
//     productName:"sample01",
//     productDetails:"sample01 product details",
//     poductImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/a/c/-original-imahjzf6gw6zwskp.jpeg?q=70",
//     productPrice:100
//   },
//   {_id:2,
//     productName:"sample02",
//     productDetails:"sample02 product details",
//     poductImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/2/g/-original-imahbr2cz5apcwze.jpeg?q=70",
//     productPrice:200
//   },
//   {_id:3,
//     productName:"sample03",
//     productDetails:"sample03 product details",
//     poductImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/k/r/-original-imahhqjwsngwkksu.jpeg?q=70",
//     productPrice:300
//   },
//   {_id:4,
//     productName:"sample04",
//     productDetails:"sample04 product details",
//     poductImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/c/n/-original-imahfteyz3sqjytm.jpeg?q=70",
//     productPrice:400
//   },
//   {_id:5,
//     productName:"sample05",
//     productDetails:"sample05 product details",
//     poductImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/r/p/-original-imahdsbnk9ya4e3z.jpeg?q=70",
//     productPrice:500
//   },
//   {_id:6,
//     productName:"sample06",
//     productDetails:"sample06 product details",
//     poductImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/j/6/super-zx-5g-super-zx-5g-acer-original-imahcv6ezgnhng28.jpeg?q=70",
//     productPrice:600
//   },
//    {_id:7,
//     productName:"sample07",
//     productDetails:"sample07 product details",
//     poductImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/v/c/g35-5g-pb3h0001in-motorola-original-imah7c6xqfsptyzx.jpeg?q=70",
//     productPrice:700
//   },
//    {_id:8,
//     productName:"sample08",
//     productDetails:"sample08 product details",
//     poductImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/3/i/-original-imahfkvffkd4qhma.jpeg?q=70",
//     productPrice:800
//   },
//    {_id:9,
//     productName:"sample09",
//     productDetails:"sample09 product details",
//     poductImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/t/v/-original-imahavdv28z4nrkn.jpeg?q=70",
//     productPrice:900
//   },
//    {_id:10,
//     productName:"sample10",
//     productDetails:"sample10 product details",
//     poductImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/o/d/-original-imahfvrmfkwybeyc.jpeg?q=70",
//     productPrice:1000
//   },
// ]
const [products,setproducts]=useState([])
useEffect(()=>{
   async function fetchProdect(){
  try{
    const res = await axios.get("https://fakestoreapi.com/products")
    // console.log("mouting");
    setproducts(res.data);
    
  }
  catch(error){
    console.log(error.message);
    
  }
}
fetchProdect();

},[]);



  return (
    <BrowserRouter>
      <Header />
      <ToastContainer position='top-center' autoClose={2000}/>
      <Routes>
        <Route path='/' element={<Home products={products}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<ProductDetails products={products} />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/admin/add-product' element={<AddProduct />}/>


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
