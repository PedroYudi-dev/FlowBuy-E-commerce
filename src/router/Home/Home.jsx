// imports
import './Home.css'
import CarouselImg from '../../components/Carousel/CarouselImg';
import Category from '../../components/Category/Category';
import SelectionProducts from '../../components/SelectionProducts/SelectionProducts';

// states
import { useEffect } from 'react';


export default function Home(){

  useEffect(() =>{
    document.documentElement.classList.add("container-home");
    return () => document.documentElement.classList.remove("container-home");
  }, [])
   

    return (
        <div className="container-home">
          <div id='teste'>
            <CarouselImg/>
            <Category/>
            <SelectionProducts/>
          </div>
        </div>
    );
}