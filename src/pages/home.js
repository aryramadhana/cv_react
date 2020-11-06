import React, {useEffect, useState} from 'react';
import pdf from '../asset/CV_NEWSR.pdf';
import useTitle from '../utility/costumHook';

const Home = () => {
const [count,setCount] = useTitle();
const [myNumber,setNumber] = useState(0);



return (
<div>
	<div class="content">
		<div class="image">
		</div>

	</div>
	<div class="text">
		Hy welcome to my web CV thanks for visiting and have a nice day
	</div>
	<button type="button" onClick={() => {
		setCount(count+1)
		}}>click me!</button>

	<button type="button" onClick={() => {
		setNumber(myNumber+1)
		}}>click number!</button>
		<p>{myNumber}</p>
	<p class="content">Contact me at &nbsp;<b>ary98ramadhan@gmail.com</b></p>
	
	<div class="button">
		<a href={pdf} download="CV_NEWSR.pdf" class="btn first"> 
		Download_CV </a>
	</div>
</div>
);
};

export default Home;