import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
    return (
        <>
            <Router>
                <div className='justify-content-center'>
                    <Header />
                    <Container>
                        <Row>
                            <Col>
                                <Routes>
                                    <Route path='/' element={<Dashboard />} />
                                    <Route path='/login' element={<Login />} />
                                    <Route path='/register' element={<Register />} />
                                </Routes>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Router>
            <ToastContainer />
        </>
    );
}

export default App;