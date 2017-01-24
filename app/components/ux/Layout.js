import React from 'react';

import Header from '../Header';
import Photo from '../photo/Photo';
import Objective from '../objective/Objective';
import Experience from '../work_experience/Experience';
import Education from '../education/Education';
import Skills from '../technical_skills/Skills';

export default class Layout extends React.Component {

  constructor() {
    super();

    this.experience = [
      {
        id: 1,
        year:'December 2016',
        text: 'Personal Projects responsive for different devices and crossbrowsing assembled using gulp. Was used preprocessor SASS.Pictures were loaded via ajax-request. Library jQuery was used in the project.',
        link: 'https://github.com/Dmitruchok/dmitruchok_final_exam.github.io'
      },
      {
        id: 2,
         year: 'July 2016-November 2016',
         text: 'GoIT educational course – projects',
         link:'https://github.com/Dmitruchok'
      }
    ];

    this.education = [
      {
        id: 1,
        year:'July 2016 – till present',
        text: 'Go Frontend Developer GoIT course'
      },
      {
        id: 2,
        year: '2008-2013',
        text: 'Master’s Degree in Finance and Credit Ukrainian State University of Finance and International Trade'
      }
    ];

    this.skills = [
      {
        id: 1,
        name:'Tools',
        tools: 'HTML5/CSS3, SASS/LESS, BEM, JavaScript, JQuery, Ajax, JSON, Grunt Automation, Gulp, React.JS, Wordpress, Git, GitHub, Sublime Text 2, Atom, Adobe Photoshop'
      },
    ];
  };

  render() {
    return(
    <div>
      <Header />
      <Photo />
      <Objective />
      <Experience experienceList={this.experience} />
      <Education educationList={this.education} />
      <Skills skillsList={this.skills}/>
    </div>
  )
  }
}
