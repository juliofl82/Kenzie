import { StudentCard } from "./components/StudentCard"

function App() {

  return (
    <>
    <StudentCard name="Lucas" age={6} country="Italia" />
    <StudentCard name="Isabela" age={10} country="Alemanha"/>
    <StudentCard name="Vanessa" age={40} country="Brasil"/>

    </>
  )
}

export default App
