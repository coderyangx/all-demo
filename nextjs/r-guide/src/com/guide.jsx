import React, { useEffect, useRef, useState } from 'react';
import './guide.css';
import './popover.css'
import './step.css'

const Step = (props) => {
  const { content, id, currentStep, onClick } = props
  const isActive = id === currentStep;
  return (
    <div className={`step ${isActive ? 'active' : ''}`} onClick={() => onClick(id)}>
      {id}-{content}
    </div>
  );
}

const Popover =  React.forwardRef((props, ref) => {
  // console.log('popover', props);
  return (
    <>
      <div className="popover-content">
          {props.currentStepData.content}<br></br>
          <div style={{marginTop: '50px'}}>{props.children}</div>
        </div>
      <div className="popover-arrow" />
    </>
  )
}) 

const Guide = () => {
  window.scrollTo({top:0,left:0,behavior:'smooth'})
  const steps = [
    {
      id: 1,
      target: '.target-1',
      content: '这是第一步的内容。',
    },
    {
      id: 2,
      target: '.target-2',
      content: '这是第二步的内容。',
    },
    {
      id: 3,
      target: '.target-3',
      content: '这是第三步的内容。',
    },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const popRef = useRef(null)
  let targetList = useRef([])
  // useEffect(() => {
  //   targetList = document.querySelectorAll('.target')
  // }, [])
  targetList = document.querySelectorAll('.target')
  console.log(targetList);

  const showPopover = (e) => {
    // 这里拿到当前的 step 对象
    // console.log('target', e);
    const target = document.querySelector(`${e.target}`)
    target.classList.add('mask') 
    // target.style.position = 'relative'
    const popover = document.querySelector('.popover')
    target.appendChild(popover)

    const rect = target.getBoundingClientRect()
    // 滚动到视口
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const targetTop = rect.top + window.pageYOffset - (viewportHeight - rect.height) / 2;
    const targetLeft = rect.left + window.pageXOffset - (viewportWidth - rect.width) / 2;
    window.scrollTo({ top: targetTop, left: targetLeft, behavior: 'smooth', });
    // 设置 popover
    popover.style.width = '200px'
    popover.style.height = '100px'
    popover.style.position = 'absolute'
    popover.style.top = 0
    popover.style.left = rect.width + 20 + 'px'
    popover.style.display = 'block'
    popover.style.backgroundColor = '#cccccc'
  }

  const currentStepData = steps.find((step) => step.id === currentStep);
  useEffect(() => {
    // 清空之前的 mask
    targetList.forEach(ele => {
      if(ele !== targetList[currentStepData.id]) {
        ele.classList.remove('mask')
      }
    })
    // 传入当前 step
    showPopover(currentStepData)
  }, [currentStepData, targetList])

  const handleNextStep = () => {
    console.log(currentStep, targetList);
    setCurrentStep(currentStep + 1);
  };
  const handlePrevStep = (e) => {
    // 清除上其他target的mask
    if (currentStep>1) {
      console.log(currentStep, targetList);
      // const targetArray =  Array.from(targetList)
      targetList.forEach(ele => {
        if(ele !== targetList[currentStep]) {
          ele.classList.remove('mask')
        }
      })
      // targetList[currentStep-1].classList.remove('mask')
    }
    setCurrentStep(currentStep - 1);
  };
  const handleOk = () => {
    targetList.forEach(ele => ele.classList.remove('mask'))
    document.querySelector('.popover').style.display = 'none'
  };

  return (
    <div className="guide">
      {/* <div className="content"> */}
        <h1>新手指引</h1>
        <div className='target target-1'>第一步</div>
        <div className='target target-2' style={{margin: '300px 0 0 100px'}}>第二步</div>
        <div className='target target-3' style={{margin: '300px 0 0 600px'}}>第三步</div>
        
        <div style={{position: 'relative'}}>
          {/* {steps.map((step) => (
            <Step content={step.content} key={step.id} id={step.id} currentStep={currentStep} onClick={handleStepClick} />
          ))} */}
          {currentStep > 0 && (
            <div className='popover'>
              <Popover ref={popRef} currentStepData={currentStepData}>
                <button onClick={e => handlePrevStep(e)}>
                  上一步
                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                {currentStep < steps.length && <button onClick={handleNextStep}>
                  下一步
                </button> }
                {currentStep >= steps.length && <button onClick={handleOk}>完成</button>}
              </Popover>
            </div>
            
          )}
          {/* {currentStep < steps.length ? (
            <button onClick={handleNextStep}>
              下一步
            </button>
          ) : (
            <button onClick={handleSuccess}>
              完成
            </button>
          )} */}
        </div>
      {/* </div> */}
    </div>
  );
};

export default Guide;

