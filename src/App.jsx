import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import TotalUnits from './components/TotalUnits.jsx'

const App = () => {
  const course = 'BS in Information Technology'
  const part1 = 'Industry Elective 1'
  const exercises1 = 3
  const part2 = 'Project Management'
  const exercises2 = 3
  const part3 = 'Data Analytics'
  const exercises3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <TotalUnits
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

export default App