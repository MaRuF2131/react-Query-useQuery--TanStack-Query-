import './App.css'
import BasicRactQuery from './components/basic use of query/BasicRactQuery.jsx'
import FormUsingUseMutation from './components/adduser/FormUsingUseMutation.jsx'

function App() {

  return (
    <>
    <div className='w-10/12 h-96 bg-white mx-auto rounded-lg shadow-lg shadow-black'>
      <h1 className='text-center text-3xl font-bold text-[#8fa3d0]'>useQuery Example</h1>
      <BasicRactQuery />
      <FormUsingUseMutation />
    </div>
   </>
  )
}

export default App
