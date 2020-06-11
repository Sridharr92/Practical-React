import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Icons from './Component/Icons/icons';
import ToastNo from './Component/ToastNo/ToastNo';
import Modal from './Component/Modal/Modal';
import Tooltip from './Component/Tooltip/Tooltip';
import CountUp from './Component/CountUp/CountUp';
import IdleTimer from './Component/IdleTimer/IdleTimer';
import ColorPicker from './Component/ColorPicker/ColorPicker'
import CreditCards from './Component/CreditCards/CreditCards'

function App() {
  return (
    <div className="App">
     	<Icons />
		<ToastNo />
		<Modal />
		<Tooltip />
		<CountUp />
		<IdleTimer />
		<ColorPicker />
		<CreditCards />
    </div>
  );
}

export default App;
