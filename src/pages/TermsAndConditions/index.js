import React, { useEffect } from 'react'
import {Typography } from '@material-ui/core';
import { Footer, TopBar } from "../../components";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {

    // const classes = useStyles();
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    return (
        <>
        
        <TopBar barColor="#3751FF" fontColor="#fff" />
        <div style={{marginTop:20, padding:30}} className="container">
        <Typography style={{fontWeight:'700',lineHeight:'60px', fontFamily:'Montserrat',fontSize:20, color:'#3751FF'}} >Terms & Conditions</Typography>
        <div style={{ backgroundColor: '#3751FF', padding: 5, width: 'fit-content', borderRadius: 3 }}>
                    <Typography style={{ color: '#fff', fontFamily:'Montserrat'  }}>Last update: 12th March 2021</Typography>
                </div>
        {/* <Typography style={{textAlign:'center',width:'40%',margin:'auto',marginBottom:50, fontFamily:'Montserrat', color:'#fff'}} >A new messenger built to communicate, organize, and reward your communities and friends.</Typography>    */}
       <div style={{marginTop:30}}>
        <Typography style={{ lineHeight:'60px', color: '#1E2022',fontWeight:'600', fontFamily:'Montserrat', fontSize:20  }}>Welcome to Project</Typography>
        <Typography style={{ color: '#77838F', fontFamily:'Montserrat', fontSize:15  }}>Quisque est nisi, eleifend tristique congue non, sagittis quis justo. In blandit hendrerit magna, sit amet ullamcorper sapien. Suspendisse potenti. Vivamus eu lacus ut nulla dapibus malesuada nec et libero. Ut ultrices risus id eleifend sagittis.</Typography>
        </div>
        <div style={{marginTop:30}}>
        <Typography style={{ lineHeight:'60px', color: '#1E2022',fontWeight:'600', fontFamily:'Montserrat', fontSize:20  }}>1. What are Terms and Conditions</Typography>
        <Typography style={{ color: '#77838F', fontFamily:'Montserrat', fontSize:15  }}>Sed non dui aliquam, ullamcorper est non, aliquet mauris. Quisque lacus ligula, dapibus nec dignissim non, tincidunt vel quam. Etiam porttitor iaculis odio. </Typography>
        <Typography style={{ color: '#77838F',marginTop:10, fontFamily:'Montserrat', fontSize:15  }}>Cras sagittis nunc lectus, in condimentum ligula ornare at. Etiam sagittis malesuada nisl. Duis volutpat ligula ante. Sed cursus, tortor a pellentesque pulvinar, lorem ipsum gravida elit, id posuere elit neque in est. Mauris ex justo, tincidunt at suscipit quis, pretium a mi. </Typography>
        
        </div>
        <div style={{marginTop:30}}>
        <Typography style={{ lineHeight:'60px', color: '#1E2022',fontWeight:'600', fontFamily:'Montserrat', fontSize:20  }}>A. What to include in a Terms and Conditions</Typography>
        <Typography style={{ color: '#77838F', fontFamily:'Montserrat', fontSize:15  }}>tiam rhoncus quis eros eget fringilla. Etiam malesuada enim laoreet nibh euismod, eu finibus elit finibus. Duis ornare tempus purus. Nam at leo quis tortor congue dignissim.</Typography>
        <Typography style={{ color: '#77838F',marginTop:10, fontFamily:'Montserrat', fontSize:15  }}>Sed non varius erat. Nulla vel nibh eu risus cursus vulputate nec ac elit.</Typography>
        </div>
        <div style={{marginTop:30}}>
        <Typography style={{ lineHeight:'60px', color: '#1E2022',fontWeight:'600', fontFamily:'Montserrat', fontSize:20  }}>B. Is a Terms and Conditions required?</Typography>
        <Typography style={{ color: '#77838F', fontFamily:'Montserrat', fontSize:15  }}>Quisque est nisi, eleifend tristique congue non, sagittis quis justo. In blandit hendrerit magna, sit amet ullamcorper sapien. Suspendisse potenti. Vivamus eu lacus ut nulla dapibus malesuada nec et libero. Ut ultrices risus id eleifend sagittis.</Typography>
        <Typography style={{ color: '#77838F',marginTop:10, fontFamily:'Montserrat', fontSize:15  }}>Sed non varius erat. Nulla vel nibh eu risus cursus vulputate nec ac elit.</Typography>
        </div>
        <div style={{marginTop:30}}>
        <Typography style={{ lineHeight:'60px', color: '#1E2022',fontWeight:'600', fontFamily:'Montserrat', fontSize:20  }}>2. Examples of Terms and Conditions</Typography>
        <Typography style={{ color: '#77838F', fontFamily:'Montserrat', fontSize:15  }}>roin efficitur vestibulum molestie. Nam urna justo, ornare commodo sem eget, pretium lobortis nisi. Curabitur ac felis pharetra nunc molestie semper quis eu mauris. Aliquam mollis, arcu in blandit cursus, lacus est aliquam dui, vitae suscipit orci massa suscipit metus. </Typography>
        <Typography style={{ color: '#77838F',marginTop:10, fontFamily:'Montserrat', fontSize:15  }}>Duis faucibus, lorem eget rutrum dictum, arcu erat elementum metus, id rutrum mauris mi ut sapien. Mauris in facilisis ante. Integer sed ante tristique augue eleifend eleifend sed tristique tellus. Vestibulum vehicula nisi eget ipsum sollicitudin porttitor. </Typography>
        </div>
        <div style={{marginTop:30}}>
        <Typography style={{ lineHeight:'60px', color: '#1E2022',fontWeight:'600', fontFamily:'Montserrat', fontSize:20  }}>3. Your content in our services</Typography>
        <Typography style={{ color: '#77838F', fontFamily:'Montserrat', fontSize:15  }}>Quisque est nisi, eleifend tristique congue non, sagittis quis justo. In blandit hendrerit magna, sit amet ullamcorper sapien. Suspendisse potenti. Vivamus eu lacus ut nulla dapibus malesuada nec et libero. Ut ultrices risus id eleifend sagittis.</Typography>
        <Typography style={{ color: '#77838F',marginTop:10, fontFamily:'Montserrat', fontSize:15  }}>Quisque consequat nisl nulla, dignissim gravida ipsum ultrices et. Morbi pharetra non massa at cursus. Vivamus convallis dui eu nisl blandit, vel convallis nisi dapibus.</Typography>
        </div>
        </div>
        <Footer />        
      </>                  
    );
}

export default TermsAndConditions;
