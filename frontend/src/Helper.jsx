import { useEffect,useState } from "react";
export const Helper=()=>{
    const [food_categories,setCat]=useState([]);
    const [food_items,setFood]=useState([]);
    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:5001/api/food",{
                method:"POST",
            headers:{
                'Content-Type':'application/json'
            }
            });
            const data = await response.json();
            setCat(data[1]);
            setFood(data[0]); 
            
           // console.log(data[0]);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); 
      }, []);
      return [food_categories,food_items];
};  
