import Navbar from '../componets/Navbar';
import './PatientsStyles.css'

function Patient() {
    return(
        <>
        <Navbar/>
        <div id="allpatient-main">
        <h1>All patients form</h1>
        <h2 id='allpatient-form-head'>Medical examination report</h2>
        <form action="">
            <div id="allpatient-sec-one">
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name'/>
            </div>

            <div>
                <label htmlFor="age">Age:</label>
                <input type="text" id='age'/>
            </div>

            <div>
                <label htmlFor="height">Height:</label>
                <input type="text" id='height'/>
            </div>

            <div>
                <label htmlFor="weight">Weight:</label>
                <input type="text" id='weight'/>
            </div>
            </div>
            
            <div id="allpatient-sec-two">
            <h4>General Examination:</h4>
            <ol type='a'>
                <li>
                    <label htmlFor="skin">Skin  </label>
                    <input type="checkbox" name='skin[]' id='skin'/>
                </li>
                <li>
                    <label htmlFor="deformalties">Deformalties  </label>
                    <input type="checkbox" name='deformalties[]' id='deformalties'/>
                </li>
                <li>
                    <label htmlFor="lumps">Lumps  </label>
                    <input type="checkbox" name='lumps[]' id='lumps'/>
                </li>
                <li>
                    <label htmlFor="scars">Scars  </label>
                    <input type="checkbox" name='scars[]' id='scars'/>
                </li>
            </ol>
            </div>
            
            <h4>HISTORY</h4>

            <div id="allpatient-sec-three">
                <div>
                    <div>
                        <label htmlFor="">Mother</label>
                        <input type="text" id='Mother' />
                    </div>
                    <div>
                        <input type="radio" name='exitstance' id='rdbLive' value='live'/>Live
                        <input type="radio" name='exitstance' id='rdbDeath' value='dead'/>Death
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="">Father</label>
                        <input type="text" id='Father' />
                    </div>
                    <div>
                        <input type="radio" name='fexitstance' id='rdbLive' />Live
                        <input type="radio" name='fexitstance' id='rdbDeath' />Death
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="">Brother/Sister</label>
                        <input type="text" id='BroSis' />
                    </div>
                    <div>
                        <input type="radio" name='bsexitstance' id='rdbLive' />Live
                        <input type="radio" name='bsexitstance' id='rdbDeath' />Death
                    </div>
                </div>
                
            </div>
            

            <div>
                <label for="">If Death,Reason:</label>
                <input type="text" id="Death_Reason"/>
            </div>
            <p id='allpatient-mini-head'>Family H/O:</p>
            <div id='allpatient-sec-four'>
                <div>
                    <div>
                        <label for="">D.M:</label>
                        <input type="checkbox"  name='dm[]'  id="D.M"/>
                    </div>
                    <div>
                        <label for="">B.A:</label>
                        <input type="checkbox" name='ba[]' id="B.A"/>
                    </div>
                    <div>
                        <label for="">H.B.P:</label>
                        <input type="checkbox" name='hbp[]' id="H.B.P"/>
                    </div>
                </div>
            
                <div>
                    <div>
                        <label for="">T.B:</label>
                        <input type="checkbox" name='tb[]' id="T.B"/>
                    </div>
                    <div>
                        <label for="">Haemoriods</label>
                        <input type="checkbox" name='heamoriods[]' id="Haemoriods"/>
                    </div>
                    <div>
                        <label for="">Heart</label>
                        <input type="checkbox" name='heart[]' id="Heart"/>
                    </div>
                    <div>
                        <label for="">Mental Abnormodities</label>
                        <input type="checkbox" name='menabnomo[]' id="MentalAbnormodities"/>
                    </div>
                </div>
            </div>
            <div>
                <label for="">Person is suffering above illness:</label>
                <input type="text" id="SufferingIllness"/>
            </div>
            <div>
                <label for="">Person Under went for any Operation:</label>
                <input type="text" id="Operation"/>
            </div>

            <h4 id='allpatient-mini-head-two'>System Examination</h4>
            <div>
                <label for="">R.S:</label>
                <input type="text" id="R.S"/>
            </div>
            <div>
                <label for="">CVS:</label>
                <input type="text" id="CVS"/>
            </div>
            <div>
                <label for="">BP:</label>
                <input type="text" id="BP"/>
            </div>
            <div>
                <label for="">Pulse:</label>
                <input type="text" id="Pulse"/>
            </div>
            <div>
                <label for="">Ht:</label>
                <input type="text" id="Ht"/>
            </div>
            <div>
                <label for="">Abd:</label>
                <input type="text" id="Abd"/>
            </div>
            <div>
                <label for="">CNS:</label>
                <input type="text" id="CNS"/>
            </div>

            <h4 id='allpatient-mini-head-three'>Ears</h4>
            <div id="allpatient-sec-five">
                <div>
                    <label for="">Left</label><br/>

                    <label for="">Hearing</label>
                    <input type="checkbox" name='hearL[]' id="HearingLeft"/> <br/>

                    <label for="">Examination</label>
                    <input type="checkbox" name='examL[]' id="ExaminationLeft"/><br/>
                </div>
                <div>
                    <label for="">Right</label> <br/>

                    <label for="">Hearing:</label>
                    <input type="checkbox" name='hearR[]' id="HearingRight"/> <br/>

                    <label for="">Examination:</label>
                    <input type="checkbox" name='examR[]' id="ExaminationRight"/><br/>
                </div>
            </div>
            
            <h4 id='allpatient-mini-head-four'>Eyes</h4>
            <div id="allpatient-sec-six">
                <div>
                    <label for="">Left</label><br/>

                    <label for="">vision:</label>
                    <input type="text" id="VisionLeft"/><br/>

                    <label for="">Colour Blindness:</label>
                    <input type="text" id="ClrBlindLeft"/><br/>
                </div>
                <div>
                    <label for="">Right</label><br/>

                    <label for="">vision:</label>
                    <input type="text" id="VisionRight"/><br/>

                    <label for="">Colour Blindness:</label>
                    <input type="text" id="ClrBlindRight"/><br/>
                </div>
            </div>
            
        </form>
        </div>
        
        </>
    )
}

export default Patient;