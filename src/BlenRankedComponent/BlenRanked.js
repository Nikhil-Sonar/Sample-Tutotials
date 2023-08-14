import React,{useEffect, useState} from 'react'
import smileImg from '../asset/icon.png'
import './BlenRanked.css'

function BlenRankedComp(){

    const [count, setCount] = useState(0);
    const [Quescount, QuestionssetCount] = useState(0);
    const [TestQCount, setTestQCount] = useState(0);
    const [Assignment, setAssignmentCount] = useState(0);
    const [Viewed, setViewedCount] = useState(0);
    const GradeCount = 90; // Set your target count here
    const QuestionsCount = 8559; // Set your target count here
    const TestsCount = 6349; // Set your target count here
    const AssignmentCount = 7000; // Set your target count here
    const ViewedCount = 7550; // Set your target count here

  
    // Use useEffect to handle the animation
    useEffect(() => {
      let animationFrameId;
      let animationFrameIdQuestion;
      let animationFrameIdTest;
      let animationFrameIdAssignment;
      let animationFrameIdViewed;
  
    // dynamic count Value of Number
      const GradeupdateCount = () => {
        const step = Math.ceil((GradeCount - count) / 30); // Adjust the step size as needed
        if (count < GradeCount) {
          setCount((prevCount) => prevCount + step);
          animationFrameId = requestAnimationFrame(GradeupdateCount);
        }
      };

      const QuestionsupdateCount = () => {
        const step = Math.ceil((QuestionsCount - Quescount) / 30); // Adjust the step size as needed
        if (Quescount <= QuestionsCount) {
            QuestionssetCount((prevCount) => prevCount + step);
          animationFrameIdQuestion = requestAnimationFrame(QuestionsupdateCount);
        }
      };

      const TestsupdateCount = () => {
        const step = Math.ceil((TestsCount - TestQCount) / 30); // Adjust the step size as needed
        if (TestQCount <= TestsCount) {
            setTestQCount((prevCount) => prevCount + step);
            animationFrameIdTest = requestAnimationFrame(TestsupdateCount);
        }
      };
      
      const AssignmentupdateCount = () => {
        const step = Math.ceil((AssignmentCount - Assignment) / 30); // Adjust the step size as needed
        if (Assignment <= AssignmentCount) {
            setAssignmentCount((prevCount) => prevCount + step);
            animationFrameIdAssignment = requestAnimationFrame(AssignmentupdateCount);
        }
      };

      const ViewedupdateCount = () => {
        const step = Math.ceil((ViewedCount - Viewed) / 30); // Adjust the step size as needed
        if (Viewed <= ViewedCount) {
            setViewedCount((prevCount) => prevCount + step);
            animationFrameIdViewed = requestAnimationFrame(ViewedupdateCount);
        }
      };

      animationFrameId = requestAnimationFrame(GradeupdateCount);
      animationFrameIdQuestion = requestAnimationFrame(QuestionsupdateCount);
      animationFrameIdTest = requestAnimationFrame(TestsupdateCount);
      animationFrameIdAssignment = requestAnimationFrame(AssignmentupdateCount);
      animationFrameIdViewed = requestAnimationFrame(ViewedupdateCount);
  
      return () => {
        cancelAnimationFrame(animationFrameId);
        cancelAnimationFrame(animationFrameIdQuestion);
        cancelAnimationFrame(animationFrameIdTest);
        cancelAnimationFrame(animationFrameIdAssignment);
        cancelAnimationFrame(animationFrameIdViewed);
      };
    },[Quescount, QuestionsCount], [Assignment, AssignmentCount], [Viewed, ViewedCount], [TestQCount, TestsCount], [count, GradeCount], setTimeout(() => 2000));



        return (
            <div className='section-6'>
                <div className='Blen-ranked'>
                    <div className='Blen-ranked-card'>
                        <div className='Blen-ranked-card-flx'>
                            <div className='Blen-ranked-card-flx-free-trial'>
                                <div className='Blen-ranked-card-flx-free-trial-heading'>
                                    <h1>Ranked <span className="IBDP-text">#1 MindSetters</span> Aligned Resource in 2022 <img src={smileImg}></img></h1>
                                    <p className='Blen-ranked-card-flx-free-trial-txt'>Trusted by MindSetters  Students, Teachers and Examiners globally</p>
                                </div>
                            </div>
                            <div className='subs-card-align'>
                            <div className='Blen-ranked-card-flx-1month'>
                                <div className='Blen-ranked-card-flx-1month-amuont'>
                                    <p className='Blen-ranked-card-flx-1month-amuont-prnt ftsize-dollor-height '><span className='Blen-ranked-card-flx-1month-amuont-icon'></span><span className='ftsize-dollor'>{count}%</span></p>
                                    <p className='ftsize-below-txt-commn'><span className='Blen-ranked-card-flx-1month-amuont-bill ftsize-below-txt'><span className="IBDP-text text-Count-colr">Grade Increase</span></span></p>
                                </div>
                            </div>
                            <div className='Blen-ranked-card-flx-3month'>
                                <div className='Blen-ranked-card-flx-3month-amuont'>
                                    <p className='Blen-ranked-card-flx-3month-amuont-prnt ftsize-dollor-height '><span className='Blen-ranked-card-flx-3month-amuont-icon'></span> <span className='ftsize-dollor'>{Quescount}+</span><br /></p>
                                    <p className='ftsize-below-txt-commn'><span className='Blen-ranked-card-flx-1month-amuont-bill ftsize-below-txt'><span className="IBDP-text text-Count-colr">Questions Practiced</span></span></p>
                                </div>
                            </div>
                            <div className='Blen-ranked-card-flx-unlimited'>
                                <div className='Blen-ranked-card-flx-unlimited-amuont'>
                                    <p className='Blen-ranked-card-flx-unlimited-amuont-prnt ftsize-dollor-height '><span className='Blen-ranked-card-flx-unlimited-amuont-icon'></span> <span className='ftsize-dollor'>{TestQCount}+</span><br /></p>
                                    <p className='ftsize-below-txt-commn'><span className='Blen-ranked-card-flx-1month-amuont-bill ftsize-below-txt'><span className="IBDP-text text-Count-colr">Tests Taken</span></span></p>
                                </div>
                            </div>
                            <div className='Blen-ranked-card-flx-unlimited'>
                                <div className='Blen-ranked-card-flx-unlimited-amuont'>
                                    <p className='Blen-ranked-card-flx-unlimited-amuont-prnt ftsize-dollor-height '><span className='Blen-ranked-card-flx-unlimited-amuont-icon'></span> <span className='ftsize-dollor'>{Assignment}+</span><br /></p>
                                    <p className='ftsize-below-txt-commn'><span className='Blen-ranked-card-flx-1month-amuont-bill ftsize-below-txt'><span className="IBDP-text text-Count-colr">Assignment Completed</span></span></p>
                                </div>
                            </div>
                            <div className='Blen-ranked-card-flx-12month'>
                                <div className='Blen-ranked-card-flx-12month-amuont'>
                                    <h1 className='Blen-ranked-card-flx-12month-amuont-prnt ftsize-dollor ftsize-dollor-height '>{Viewed}+</h1>
                                    <p className='ftsize-below-txt-commn'><span className='Blen-ranked-card-flx-1month-amuont-bill ftsize-below-txt'><span className="IBDP-text text-Count-colr">Key Concepts Viewed</span></span></p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default BlenRankedComp;