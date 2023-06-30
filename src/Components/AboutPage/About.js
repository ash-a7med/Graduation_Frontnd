import React from "react";
import "./About.css";

function About() {
    return (
        <div>
        <div className="about-section">
            <h1>About Us</h1>
            <h2>
            We are a team from the Faculty of Computers and Information, Menoufia
            University, fourth year, Bio Department.
            </h2>
            <h2>
            This site is our graduation project and it is based on the idea of
            speech recognition,
            </h2>
            <h2>
            but what distinguishes it is that it also recognizes the Arabic
            language and the words of the Qur'an and identifies errors.
            </h2>
            <h2>
            The site also provides some other additions that you can view on your
            own. The site is an initial idea and subject to development
            </h2>
        </div>
        <div>
            <h2 style={{ textAlign: "center" }}>Our Team</h2>
            <div className="row">
            <div className="column">
                <div className="card">
                <div className="container">
                    <h2>Ashrqat Ahmed</h2>
                    <p className="title">Front End developer</p>
                    <p>Front end :react: team member</p>
                    <p>ashraqat@example.com</p>
                    <p>
                    <button className="button">Contact</button>
                    </p>
                </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                <div class="container">
                    <h2>Mai Habib</h2>
                    <p class="title">Front End developer</p>
                    <p>Front end :react: team member</p>
                    <p>mai@example.com</p>
                    <p>
                    <button class="button">Contact</button>
                    </p>
                </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                <div class="container">
                    <h2>Habeba Hossam</h2>
                    <p class="title">Ml developer</p>
                    <p>machine learning developer</p>
                    <p>habeba@example.com</p>
                    <p>
                    <button class="button">Contact</button>
                    </p>
                </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                <div class="container">
                    <h2>Ahmed Sallam</h2>
                    <p class="title">Full stack developer</p>
                    <p>react & nodejs developer</p>
                    <p>sallam@example.com</p>
                    <p>
                    <button class="button">Contact</button>
                    </p>
                </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                <div class="container">
                    <h2>Abdelrahman Arafa</h2>
                    <p class="title">Ml developer</p>
                    <p>machine learning developer</p>
                    <p>abdo@example.com</p>
                    <p>
                    <button class="button">Contact</button>
                    </p>
                </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                <div class="container">
                    <h2>Tamer Medhat</h2>
                    <p class="title">Back end</p>
                    <p>node js backend developer</p>
                    <p>tamer@example.com</p>
                    <p>
                    <button class="button">Contact</button>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default About;
