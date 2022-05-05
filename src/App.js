import './App.css';
import './responsive.css'
import { useState } from 'react';
import arrowIcon from './images/icon-arrow-down.svg'
import box from './images/illustration-box-desktop.svg'
import woman from './images/illustration-woman-online-desktop.svg'

function App() {

  const [openAnswer, setOpenAnswer] = useState({
    'How many team members can I invite?': false,
    'What is the maximum file upload size?': false,
    'How do I reset my password?': false,
    'Can I cancel my subscription?': false,
    'Do you provide additional support?': false
  })

  const qAndA = [
    { question: 'How many team members can I invite?', answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.' },
    { question: 'What is the maximum file upload size?', answer: 'No more than 2GB. All files in your account must fit your allotted storage space.' },
    { question: 'How do I reset my password?', answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.' },
    { question: 'Can I cancel my subscription?', answer: 'Yes! Send us a message and we’ll process your request no questions asked.' },
    { question: 'Do you provide additional support?', answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.' }
  ]

  return (
    <div className="App">

      <main>
        <section>
          <div className='woman'>
            <img src={box} className='box' />
          </div>
          <div className='woman-mobile-version'>
            <img src={woman} className='woman-mobile-version-img' />
            <img src={box} className='box' />
          </div>
        </section>

        <section>
          <h1>FAQ</h1>

          <div>
            {qAndA.map(({ question, answer }) => (
              <div key={question} className='questionAndAnswerWrapper'>
                <div onClick={() => setOpenAnswer({ ...openAnswer, [question]: !openAnswer[question] })} className='questionWrapper'>
                  <h3 className={openAnswer[question] ? 'h3bold' : null}>{question}</h3>
                  <img src={arrowIcon} className={openAnswer[question] ? 'flipArrow' : 'flipBack'} />
                </div>
                {/* {openAnswer[question] ? <p>{answer}</p> : null} */}

                <p className={openAnswer[question] ? 'open' : 'close'}>{answer}</p>
              </div>
            ))
            }
          </div>

        </section>
      </main>

      <h4 className="attribution">
        Challenge by <a href="https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/anne-mfl">Anne</a>.
      </h4>
    </div >
  );
}

export default App;
