import React from 'react';

// import './index.css'

export default function Tailwind(props) {
  console.log('tailwind');
  console.log(React.Children.toArray(props.children), props);

  const renderChildren = () => {
    return React.Children.toArray(props.children).map((child, index) => {
      return (
        <div key={index}>
          <div>{child}</div>
        </div>
      );
    });
  };

  // 策略模式
  const strategies = {
    high: function (workHours) {
      return workHours * 25;
    },
    middle: function (workHours) {
      return workHours * 20;
    },
    low: function (workHours) {
      return workHours * 15;
    },
  };
  const calculateSalary = function (workerLevel, workHours) {
    return strategies[workerLevel](workHours);
  };
  console.log(calculateSalary('high', 10)); // 250
  console.log(calculateSalary('middle', 10)); // 200

  return (
    <>
      {renderChildren()}
      <div className='flex bg-gray-500 items-center rounded-lg w-100 h-10 shadow-lg py-0'>
        <div className='w-20'>
          <p className=''>left</p>
        </div>
        <div className=' hover:-translate-x-8 transform transition flex-1 w-auto bg-red-200 h-full rounded-lg flex justify-center items-center text-justify'>
          <p className=''>right</p>
        </div>
      </div>
      <div className='group hover:bg-[#ccdafe]'>
        <button className=' group-hover:bg-pink-400 rounded hover:shadow-lg hover:bg-blue-500 w-20 h-10 bg-blue-400 mx-10 my-10 '>
          tw
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          tw
        </button>
      </div>
    </>
  );
}
