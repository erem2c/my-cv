import ReactDOM from 'react-dom/client'
import './index.css'
import { Fragment } from 'react/jsx-runtime'

const persons = [
  {
    id: 1,
    photo: 'link',
    name: 'eR',
    lastName: 'Em',
    position: 'CTO',
    experience:[
      {description: 'now', year: '2024' },
      {description: 'now', year: '2024' },
    ],
    education:[
      {institution: 'high', year: '2024', title: 'mgr'}
    ]
  }
]

ReactDOM.createRoot(document.getElementById('root')!).render(<div>
  {persons.map(me => (
    <Fragment key={me.id}>
    <header></header>
    <div className='left'>
      <div><img src="" alt="My photo" /></div>
      <div>{me.name}</div>
      <div>{me.lastName}</div>
      <div>{me.position}</div>
    </div>
    <div>
      <div className='right'></div>
      <div></div>
      <div></div>
    </div>
    <footer></footer>
    </Fragment>))}
</div>)
