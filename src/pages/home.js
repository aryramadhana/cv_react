import React from 'react';
import pdf from '../asset/CV_NEWSR.pdf';

const logo = [
{
	'name': 'github',
	'link': 'fa fa-instagram'
}
];

const Home = () => {

return (
<div>
	<div class="content">
		<div class="image">
		</div>

	</div>
	<div class="text">
		Hy welcome to my web CV thanks for visiting and have a nice day
	</div>
	<p class="content">Contact me at &nbsp;<b>ary98ramadhan@gmail.com</b></p>
	
	<div class="button">
		<a href={pdf} download="CV_NEWSR.pdf" class="btn first"> 
		Download_CV </a>
	</div>
</div>
);
};

export default Home;