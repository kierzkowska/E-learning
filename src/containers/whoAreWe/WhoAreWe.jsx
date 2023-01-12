import React from 'react'
import { Feature } from '../../components'
import './whoAreWe.css'

const WhoAreWe = () => {
  return (
    <div className='learn3__whoarewe section__margin' id="waw">
    <div className='learn3__whoarewe-feature'>
      <Feature title="Who are we?" text='We believe that everyone can learn anything. All it takes is a bit of perseverance, the right direction and the right tools to succeed. We know that students today are under more pressure than ever before. This can overwhelm them, cause anxiety and contribute to their rapid burnout. Our job is to give each student the tools to become confident and successful, whatever their motivation and goals.'/>
    </div>
    <div className='learn3__whoarewe-heading'>
      <h1 className='gradient__text'>We make every student unstoppable</h1>
      <p>Explore The Library</p>
    </div>
    <div className='learn3__whoarewe-container'>
    <Feature title="Flashcards" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ."/>
    <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ."/>
    <Feature title="Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ."/>

    </div>
    </div>
  )
}

export default WhoAreWe