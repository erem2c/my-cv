import ReactDOM from 'react-dom/client'
import './index.css'
import { Fragment } from 'react/jsx-runtime'

const persons = [
  {
    id: '1',
    photo: './src/assets/er.jpg',
    name: 'eR',
    lastName: 'Em',
    position: 'CTO',
    experience:[
      {id: '1', description: 'now', year: '2024' },
      {id: '2', description: 'now', year: '2024' },
    ],
    education:[
      {id: '1', institution: 'high', year: '2024', title: 'mgr'}
    ]
  }
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='main'>
    {persons.map(me => (
      <Fragment key={me.id}>
        <div className='left'>
          <div className='photo'><img src={me.photo} alt="My photo" /></div>
          <div className='name'>{me.name}</div>
          <div className='name'>{me.lastName}</div>
          <div className='position'>{me.position}</div>
        </div>
        <div className='right'>
          <div className='experience'>
            <div>Experience</div>
            {me.experience.map(exp => (
              <Fragment key={exp.id}>
                <span className='description'>{exp.description}</span>
                <span className='year'>{exp.year}</span>
              </Fragment>
            ))}
          </div>
          <div className='education'>
          <div>Education</div>
            {me.education.map(edu => (
              <Fragment key={edu.id}>
                <span className='institution'>{edu.institution}</span>
                <span className='year'>{edu.year}</span>
                <span className='title'>{edu.title}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </Fragment>
    ))}
  </div>
)
