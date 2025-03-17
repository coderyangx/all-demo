import React, { useContext } from "react";

import { useNavigate, useSearchParams, useParams, Outlet } from "react-router-dom";

import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import newSteps from './steps'

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    }
  },
  useModalOverlay: true
};
function Button() {
  const tour = useContext(ShepherdTourContext);
  tour.addStep({
    id: 'example-step',
    text: '****',
    attachTo: {
      element: '.example-css-selector',
      on: 'bottom'
    },
    classes: 'example-step-extra-class',
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });
  return (
    <button className="button dark" id="example-step" onClick={tour.start}>
      Start Tour
    </button>
  );
}
export default function About() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()  // 返回数组  更推荐
  const pars = useParams() // 返回对象  适合参数只有一个的情况

  const queryParams = searchParams.get('searchParams')
  const id = pars.id

  const goLogin = () => {
    navigate('/login', {
      replace: true  // 跳转时不加历史记录
    })
  }
  
  return (
    <div>
      About
      <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
        <Button />
      </ShepherdTour>
      <button onClick={goLogin}>跳转Login</button>
      <div>searchParams参数：{queryParams} -- {id}</div>
      <Outlet></Outlet>
    </div>
  )
}
