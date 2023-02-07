import { Route, Routes} from 'react-router-dom'
// import './App.css';
import style from './app.module.css';
import classNames from 'classnames/bind'
const cs = classNames.bind(style);

function App() {


  console.log(123);

  return (
    <div className="App">
      {/* <Main></Main> */}
      {/* <S1></S1> */}

      {/* <Main></Main> */}
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/test' element={<S1/>} />
        </Routes>

    </div>
  );
}

function Main() {
  return (
    <>
      <S1></S1>
      <S2></S2>
      <S3></S3>
    </>
  )
}

function S1() {

  return (
    <>

      <div className={cs('s1')}>
        S1
      </div>

    </>
  )
}

function S2() {

  return (
    <>

      <div className='s2'>
        S2
      </div>

    </>
  )
}

function S3() {

  return (
    <>

      <div className='s3'>
        S3
      </div>

    </>
  )
}



export default App;
