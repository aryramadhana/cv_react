import React from 'react';

const listExp = [
{
	'position': 'Laboratory Assistant',
	'company': 'Multimedia Research Laboratory Telkom University',
	'information':'Learn new things with selected students to jointly learn various things about multimedia and its development.',
	'year': '2018 - Present',
},
{
	'position': 'FrontEnd Web Developer (Internship)',
	'company': 'Techno Infinity',
	'information':'For the first time being a web developer, where I was involved in a project. And working on the appearance of the website.',
	'year': 'July 2019 - August 2019',
},
{
	'position': 'Junior Web Developer (INTERNSHIP)',
	'company': 'Smart Interprise',
	'information':'Using laravel to development new learning website.',
	'year': 'July 2020 - October 2020',
}
];

const Experience = () => {
	return (
		<div class="">
			<h2>EXPERIENCE</h2>
			{listExp.map((experience)=>
				<div class="resume-section-content">
					<div class="resume">
						<div class="d-flex flex-column flex-md-row justify-content-between mb-5 card">
							<div class="flex-grow-1">
								<h3 class="mb-0 pad">{experience.position}</h3>
								<div class="subheading mb-3 pad">{experience.company}</div>
								<p class="pad">{experience.information}</p>
							</div>
							<div class="flex-shrink-0 pad1"><span class="text-primary">{experience.year}</span></div>
						</div>
					</div>
					</div>
					)
			}
			
			</div>

			);
};

export default Experience;
