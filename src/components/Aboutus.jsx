import React from "react";
import "./Aboutus.css";
import flag1 from '../assets/flag1.jpg';
import {Link, useParams} from 'react-router-dom'


const Aboutus = () => {
    return (
        <>
        <main>
            <section className="btn-placement">
                    <Link to ="/" className="btn">Back To Home Page
                    </Link>
                  </section>

            <div class="container">
                <div class="title">ABOUT US</div>
                <div class="content">
                    <div class="flag">
                        <img src={flag1} alt="Flag" />
                    </div>
                    <div class="info">
                        <p>Country Name: Wakanda Land </p>
                        <p>Date of birth: 29 Februari 1230 </p>
                        <p>Leader of the country: Black Panther</p>
                        <p>Description: </p>
                        <p>A big and strong country. Beautiful scenery and also has abundant natural resources. Its people are prosperous and peaceful</p>
                    </div>
                </div>
                <div class="reason">
                    <p class = "titleR">The reason Why This Country Is Number One</p>
                    
                </div>
                <div class = "reasonDesc">
                    <div class = "reason1">
                        <ul class="reason-list">
                            <li>Second largest country</li>
                        </ul>
                        <p>The country of Wakanda is one of the two largest countries in the world. </p>
                        <p>This country has an area of ​​around 16,098,242 square kilometers, making it the second largest country after Russia.</p>
                        <p>This causes Wakanda to have a large population too.</p>
                    </div>
                    <div class = "reason2">
                        <ul class = "reason-list">
                            <li>One Of The Top 3 Most Advanced Countries In The World</li>
                        </ul>
                    <p>Apart from being the second largest country in the world, Wakanda is also one of the top 3 most advanced countries in the world.</p>
                    <p>With advanced technology in the fields of defense and security as well as transportation, this country is feared and respected by many countries.</p>
                    </div>
                    
                    <div class = "reason3">
                        <ul class = "reason-list">
                            <li>A country with abundant natural wealth</li>
                        </ul>
                        <p>The country of Wakanda has very abundant natural resources, especially vibranium</p>
                        <p>Wakanda is known as a country that produces vibranium in the world and no other country has these natural resources.</p>
                    </div>
                    
                </div>
            </div>
        </main>
        </>
    )
}

export default Aboutus