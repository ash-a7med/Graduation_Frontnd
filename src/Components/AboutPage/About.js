import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about">
            <div className="about-section">
                <h2 className="text-center">About Us</h2>
                <p className="about-text">
                        We are a team from the Faculty of Computers and Information, Menoufia
                    University, fourth year, Bio Department.
                    <br />
                        This site is our graduation project and it is based on the idea of
                    speech recognition,
                    <br />
                        but what distinguishes it is that it also recognizes the Arabic
                    language and the words of the Qur'an and identifies errors.
                    <br />
                        The site also provides some other additions that you can view on your
                        own. The site is an initial idea and subject to development.
                </p>
            </div>
            <div className="members pt-2 pb-2">
                <h2 className="text-center">
                    Our Team
                </h2>
                <div className="container">
                    <div className='row justify-content-between'>
                        <div className="member col-12 col-md-5">
                            <h4>Ashraqat Ahmed</h4>
                            <p className="Track">Front End developer</p>
                            <p>Front end :react: team member</p>
                            <p>ashraqat@example.com</p>
                            <button className="buttonHover"> Contact</button>
                        </div>
                        <div className="member col-12 col-md-5">
                            <h4>Mai Habib</h4>
                            <p className="Track">Front End developer</p>
                            <p>Front end :react: team member</p>
                            <p>mai@example.com</p>
                            <button className="buttonHover"> Contact</button>
                        </div>
                        <div className="member col-12 col-md-5">
                            <h4>Habeba Hossam</h4>
                            <p className="Track">Ml developer</p>
                            <p>machine learning developer</p>
                            <p>habeba@example.com</p>
                            <button className="buttonHover"> Contact</button>
                        </div>
                        <div className="member col-12 col-md-5">
                            <h4>Ahmed Sallam</h4>
                            <p className="Track">Full stack developer</p>
                            <p>react & nodejs developer</p>
                            <p>sallam@example.com</p>
                            <button className="buttonHover"> Contact</button>
                        </div>
                        <div className="member col-12 col-md-5">
                            <h4>Abdelrahman Arafa</h4>
                            <p className="Track">Ml developer</p>
                            <p>machine learning developer</p>
                            <p>abdo@example.com</p>
                            <button className="buttonHover"> Contact</button>
                        </div>
                        <div className="member col-12 col-md-5">
                            <h4>Tamer Medhat</h4>
                            <p className="Track">Back end</p>
                            <p>node js backend developer</p>
                            <p>tamer@example.com</p>
                            <button className="buttonHover"> Contact</button>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default About;
