import React from 'react'
import { CTOCard } from '../CTOCard'

const CTOSection = () => {
    const ctoCardsData = [
        {
          title: 'Technical Roadmap',
          infoTitle: 'Steps to build your roadmap:',
          info: [
            'Identify business goals',
            'Define technical requirements',
            'Set milestones',
            'Allocate resources'
          ],
          decs: 'Creating a clear technical roadmap to align with your business goals.'
        },
        {
          title: 'MVP Development',
          infoTitle: 'Steps to develop your MVP:',
          info: [
            'Understand user needs',
            'Focus on core features',
            'Build a prototype',
            'Gather user feedback'
          ],
          decs: 'Developing a minimum viable product to quickly test and validate your idea.'
        },
        {
          title: 'Agile Best Practices',
          infoTitle: 'Steps to implement Agile:',
          info: [
            'Adopt iterative development',
            'Prioritize tasks in sprints',
            'Hold daily standups',
            'Continuous integration and delivery'
          ],
          decs: 'Implementing Agile methodologies to increase efficiency and adaptability.'
        },
      ];
  return (
    <section className='dark:bg-black bg-white w-full min-h-screen flex flex-col items-center justify-center '> 
    <div className='w-full flex-1 flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold'>CTO as a Service</h1>
        <p className='max-w-3xl text-center '>In just one year, Nara.ph has quickly become a leader in building and scaling startup technology operations. We craft technical roadmaps, develop MVPs, and implement Agile best practices, empowering startups with innovative, scalable solutions to succeed in the digital landscape.</p>
    </div>
    <div className='flex-1 flex gap-4'>
    {ctoCardsData.map((cardData, index) => (
          <CTOCard
            key={index}
            title={cardData.title}
            infoTitle={cardData.infoTitle}
            info={cardData.info}
            decs={cardData.decs}
          />
        ))}
    </div>
    </section>
  )
}

export default CTOSection
