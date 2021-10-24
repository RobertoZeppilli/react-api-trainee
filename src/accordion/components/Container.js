import React from 'react'
import Question from '../components/Question'

const Container = ({questions }) => {
    return (
        <div className="container">
            <aside className="aside">
                <h1>Q&amp;A about Login</h1>
            </aside>
            <section className="faq">
                {questions.map( question => <Question key={question.id} {...question}/>)}
            </section>
        </div>
    )
}

export default Container
