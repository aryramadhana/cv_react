import React from 'react';

const listEdu = [
{
	'school': 'Taruna Pekanbaru Vocational High School',
	'information':'Computer and Network Engineering',
	'point': 'GPA: 3.23',
	'year': 'End 2017'
},
{
	'school': 'Telkom University',
	'information':'Multimedia engineering technology',
	'point': 'Last GPA: 3.56',
	'year': '2017 Present'
},
];

const Education = () => {
	return (
		<div class="">
			<h2>EDUCATION</h2>
			{listEdu.map((education)=>
				<div class="resume-section-content">
				<div class="resume">
					<div class="d-flex flex-column flex-md-row justify-content-between mb-5 card">
						<div class="flex-grow-1">
							<h3 class="mb-0 pad">{education.school}</h3>
							<div class="subheading mb-3 pad">{education.information}</div>
							<p class="pad">{education.point}</p>
						</div>
						<div class="flex-shrink-0 pad1"><span class="text-primary">{education.year}</span></div>
					</div>
				</div>
			</div>)}}
			</div>

			);
};

export default Education;
