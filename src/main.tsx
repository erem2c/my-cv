import ReactDOM from 'react-dom/client'
import './index.css'
import { Fragment } from 'react/jsx-runtime'

const persons = [
  {
    id: '1',
    photo: 'link',
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
  <div>
    {persons.map(me => (
      <Fragment key={me.id}>
        <header></header>
        <div className='left'>
          <div><img src="" alt="My photo" /></div>
          <div>{me.name}</div>
          <div>{me.lastName}</div>
          <div>{me.position}</div>
        </div>
        <div className='right'>
          <div>
            {me.experience.map(exp => (
              <Fragment key={exp.id}>
                <span>{exp.description}</span>
                <span>{exp.year}</span>
              </Fragment>
            ))}
          </div>
          <div>
            {me.education.map(edu => (
              <Fragment key={edu.id}>
                <span>{edu.institution}</span>
                <span>{edu.year}</span>
                <span>{edu.title}</span>
              </Fragment>
            ))}
          </div>
        </div>
        <footer></footer>
      </Fragment>
    ))}
  </div>
)
