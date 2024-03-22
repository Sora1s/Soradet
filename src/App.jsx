import { useState , useEffect } from 'react'
import './App.css'
import ImageProfile from './components/ImageProfile';
import Title from './components/Title';
import axios from 'axios';
import moment from 'moment';
import Titleleft from './components/Titleleft';

function App() {
  const enpoint = 'https://sheetdb.io/api/v1/rjnu11gpps65s';

  
    const [hide, setHide] = useState(false);
    const [data, setdata] = useState([]);
  
    const callAPi = async () =>{
      return axios.get(enpoint).then((response) => {
        const data = response.data
        setdata(data)
      })
    }
    console.log(data)
  
    useEffect( () =>{
      callAPi()
    }, [])
    
    return (
      <>
        <div className="main">
          <div className="leftPort">
            <ImageProfile images="public\432353671_406735578733570_4727534663042374938_n.jpg" />
  
            <Title title="SORADET KLOMKLIEW">
              <p style={{textTransform: 'capitalize'}}>graphic design</p>
            </Title>
  
            <Title title="Contract">
              <p>{moment("2003/01/03").format("DD/MM/YYYY")}</p>
              <p style={{ display: hide ? 'none' : 'block' }}>tel: 0642137985</p>
              <button onClick={() => setHide(!hide)}>{hide ? 'show' : 'hide'}</button>
              <p>Email: Soradej2546@gmail.com</p>
            </Title>

            <Title style={{margin:' -28px'}} title="Skill">
                <p>TeamWork</p>
                <p>Adaptability</p>
                <p>Problem-Solving</p>
                <p>Critical Thinkking</p>
            </Title>
          </div>
  
  
          <div className="rightPort">

            <Titleleft titleleft="Profile">
              <p>I'm currently studying in the 3rd year of the School of Infomation Technology. 
                I want to have some work experience. I like to have a scout in the use of program cuts and designs to use them to work better.
              </p>
            </Titleleft>

            <Titleleft titleleft="Work Experience">
              <p>part time job</p>
              <p>sf chinema terminal 21 rama 3</p>
            </Titleleft>

  
            <Titleleft titleleft="eduction">
            <li>2014 - 2019</li>
              <p style={{paddingLeft:'87px'}}>nonsi witthaya  school</p>
              <p style={{paddingLeft:'50px'}}>mathenatics and japanes language</p>
              <p style={{paddingLeft:'140px'}}>GPA 3.13</p>

              <li>2020 - Present</li>
              <p style={{paddingLeft:'50px'}}>suan sunandha rajabhat university</p>
              <p style={{paddingLeft:'76px'}}>science and technology</p>
              <p style={{paddingLeft:'135px'}}>GPA 3.39</p>
            </Titleleft>
            
  
            
  
  
          </div>
        </div>
  
        <div className="tables">
          <h2>ข้อมูลคนในห้อง</h2>
            {data.map((record) => 
            <div key={record.code}>
               {record.code}
                {record.name}
             </div>
             )}
        </div>
      </>
    )
  }
  
export default App
