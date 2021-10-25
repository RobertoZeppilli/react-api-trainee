import React, { useState, useEffect } from 'react'
import { BiChevronsRight } from "react-icons/bi";
import './App.css';

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
    const [jobs, setJobs] = useState([])
    let [index, setIndex] = useState(0)



    const fetchTabs = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setJobs(data)
    }

    useEffect(() => {
        fetchTabs()
    }, [])

    return (
        <div className="App">
            <h1 className="title">Experience</h1>
            <div className="container">
                <div className="companies">
                    {jobs.map((job, i) => {
                        return (<button onClick={() => setIndex(i)} className={`company ${i === index && 'active'}`} key={job.id}>
                            {job.company}
                        </button>)
                    })}
                </div>
                <div className="job">
                    {jobs.map((job, i) => i === index ? <div key={job.id}>
                        <h2 className="job-title">{job.title}</h2>
                        <h5 className="badge">{job.company}</h5>
                        <p className="dates">{job.dates}</p>
                        <div className="duties">
                            {job.duties.map((duty, index) => {
                                return (
                                    <div className="duty" key={index}>
                                        <div>
                                            <BiChevronsRight className="arrow" />
                                        </div>
                                        <div>
                                            <p className="duty-text">{duty}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div> : '')}
                </div>
            </div>
        </div>
    )
}

export default App
