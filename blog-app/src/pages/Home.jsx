


import {Box} from "@chakra-ui/react"

import WithSubnavigation from "./Navbar"
import { useEffect } from "react"
function Hom(){

useEffect(()=>{
getData()
},[])

function getData(){

    fetch("https://famous-long-johns-bear.cyclic.app/reader/get?q=js").then((res)=>{
        res.json().then((res)=>{
            console.log(res)
        })
    })
}
    return(

        <Box>
<WithSubnavigation/>




        </Box>
    )
}
export default Hom