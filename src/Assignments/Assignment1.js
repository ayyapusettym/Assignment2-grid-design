import React from 'react';
import './Assignment1.css';
import img1 from './IMG/img1.jpg';
import img2 from './IMG/img2.jpg';
import img3 from './IMG/img3.jpg';
import img4 from './IMG/img4.jpg';
import img5 from './IMG/img5.jpg';
import img6 from './IMG/img6.jpg';
import { FaFilter } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";




function Grid(){
    return(
        <>
                    {/* header */}
        <header>
            <div className="main_div">
                <div className="head">
                    <div className="head_part">
                        <h1>EDYODA</h1>
                        <p className="stories">Stories</p>
                    </div>
                    <p className="demo1">Explore Categories<i><FaAngleDown/></i></p>
                </div>
                <p className="para">EdYoda is a learning and knowledge <br></br>
                    sharing platform for techies</p>
                <div id="btn_div">
                    <button className="btn">Go To Main Website</button>
                </div>
            </div>
        </header>
                         {/* header */}  
        <section className="main_div1">
            <h2>Latest Posts</h2>
            <section>
                <div className="head_div">
                    <p><i><FaFilter/></i>Filter by Category</p>
                </div>
                <button className="btn_class" id="all">All</button>
                <button className="btn_class">Machine Learning</button>
                <button className="btn_class">Lampstack vs mean stack</button>
                <button className="btn_class">Cloud Computing</button>
                <button className="btn_class">Big Data Analytics</button>
                <button className="btn_class">Cyber Secutiry</button>
                <button className="btn_class">Data Backup&Recovery</button>
                <button className="btn_class">DevOps</button>
                <button className="btn_class">Artificial Intelligence</button>
                <button className="btn_class">Programming Languages</button>
                <button className="btn_class">Mobile Application Development</button>
                <button className="btn_class">Others</button>
            </section>
        </section> 
        <main className="main_box">
            <section className="inner_box">
                <img src={img1} alt="" class="img_style"/>
                <div className="heading_div">
                    <h3>Introduction To A Machine Learning Online Course</h3>
                    <div>
                        <span>Edyoda</span>
                        <span id="calendar">| 23 Aug 2019</span>
                    </div>
                    <p>Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and...</p>
                </div>
            </section>
            <section className="inner_box">
                <img src={img2} alt="" class="img_style"/>
                <div className="heading_div">
                    <h3>LAMP Stack Vs MEAN stack: Choosing the right...</h3>
                    <div>
                        <span>Edyoda</span>
                        <span id="calendar">| 24 Aug 2019</span>
                    </div>
                    <p>In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations..</p>
                </div>
            </section>
            <section className="inner_box">
                <img src={img3} alt="" class="img_style"/>
                <div className="heading_div">
                    <h3>Impact of Cloud Computing in various industries</h3>
                    <div>
                        <span>Edyoda</span>
                        <span id="calendar">| 24 Aug 2019</span>
                    </div>
                    <p>A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency plan..</p>
                </div>
            </section>
            <section className="inner_box">
                <img src={img4} alt="" class="img_style"/>
                <div className="heading_div">
                    <h3>Challenges of Machine Learning in Big Data ...</h3>
                    <div>
                        <span>Edyoda</span>
                        <span id="calendar">| 24 Aug 2019</span>
                    </div>
                    <p>Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and..</p>
                </div>
            </section>
            <section className="inner_box">
                <img src={img5} alt="" class="img_style"/>
                <div className="heading_div">
                    <h3>Breaking the Myths around Cybersecurity</h3>
                    <div>
                        <span>Edyoda</span>
                        <span id="calendar">| 26 Aug 2019</span>
                    </div>
                    <p>Cybersecurity plays an integral role in the process of good business models. But even cybersecurity programs built with good intentions can fall short in front of advanced cyber...</p>
                </div>
            </section>
            <section className="inner_box">
                <img src={img6} alt="" class="img_style"/>
                <div className="heading_div">
                    <h3>Importance of Data Backup and Recovery in ...</h3>
                    <div>
                        <span>Edyoda</span>
                        <span id="calendar">| 26 Aug 2019</span>
                    </div>
                    <p>A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency plan...</p>
                </div>
            </section>
        </main>     
        <footer className="footer">
            <p className="footer1">Edyoda Developer Programs</p>
            <a href="www.edyoda.com" className="footer2">WWW.edyoda.com</a>
        </footer>             
        </>
    )

}

export default Grid;