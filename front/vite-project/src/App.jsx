import AppStyle from "./AppStyles"
import Home from "./components/views/HomePage"
import { Route, Routes } from "react-router-dom"
import MisTurnos from "./components/views/MisTurnosPage"
import RegisterPage from "./components/views/RegisterPage"
import LoginPage from "./components/views/LoginPage"
import NavBar from "./components/NavBar/NavBar"
import { Provider } from "react-redux"
import  store  from "./redux/store"
import Newappointment from "./components/MyAppointment/Newappointment"
import ProfilePage from "./components/views/ProfilePage"
import DetailPage from "./components/views/DetailPage"
function App() {
 
  return (
    <>
      <Provider store={store}>
        <AppStyle>
          <NavBar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/apointments" element={<MisTurnos />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users/register" element={<RegisterPage />} />
            <Route path="/users/:id" element={<DetailPage />} />
            <Route path="/miProfile" element={<ProfilePage />} />
            <Route path="/users/register" element={<RegisterPage />} />
            <Route path="appointments/schedule" element={<Newappointment />} />
          </Routes>
        </AppStyle>
      </Provider>
    </>
  )
}

export default App