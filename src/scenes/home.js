import React, { Component, Suspense } from 'react'
import Header from "../components/Header"

import { Container, Row,Col } from 'react-bootstrap'
const axios = require('axios');
const API_URL ="http://192.168.164.149:3000/localdata/localdata.json"
const CardComp = React.lazy(() => import("../components/CardComponent")) 
const  linkObj1=[{lTitle:"Developer's Guide",link:"/developer/en/api/dummy1/guide"},{lTitle:"API Reference",link:"/developer/en/api/dummy1/reference"}]
const  linkObj2=[{lTitle:"Intro",link:"/developer/en/api/dummy1/intro"},{lTitle:"Developer's Guide",link:"/developer/en/api/dummy1/guide"},{lTitle:"API Reference", link:"/developer/en/api/dummy1/reference"}]
let tempData=new Array()
class Home extends Component{
    constructor(props){
        super(props)
        this.state = { cardData:[] }
    }
   
    callApi = async () => {
        let response = await axios.get(API_URL, {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
            });
            let j=0;
            // for(let i=tempData.length;i<response.data.length;i++){
            //     tempData[i] = response.data[j];
            //     j++;
            // }
            for(j=0;j < response.data.length;j++ ){
                tempData.push(response.data[j])
            }
            this.setState({cardData:tempData})
    }
    componentDidMount(){ 
       
       setInterval(()=>{ this.callApi() }, 3000);
    }
    render(){
        const { cardData } = this.state
        console.log("CardData ",cardData)
        return(
            <Container fluid>
                <Header headerTitle="DOCUMENTATION" />
                <Container>
                    <Row>
                        <Col xs={12} md={12} sm={12} lg={12}><h2>API & Services</h2></Col>
                        <Col xs={12} md={12} sm={12} lg={12}><p>Access information on how to use Forge APIs and Services</p></Col>
                    </Row>
                    <Row>
                    <Col>
                    <Suspense fallback={<div>Loading...</div>}>
                        <CardComp title="Authentication" desc="Generate tokens based on the OAuth 2.0 standard to authenticate requests made to Forge APIs and SDKs."
                            icon="vpn_key" link={linkObj1}
                        />
                    </Suspense>
                     </Col>
                     <Col>
                     <Suspense fallback={<div>Loading...</div>}>
                     <CardComp title="BM 360" desc="Integrate with the Autodesk BIM 360 platform to extend its capabilities to reach segments of the construction ecosystem that don’t have direct access to BIM data."
                            icon="widgets" link={linkObj2}
                        />
                     </Suspense>
                        
                     </Col>
                     <Col>
                     <Suspense fallback={<div>Loading...</div>}>
                     <CardComp title="Data Management" desc="Access data across BIM 360 team, Fusion Team, BIM 360 Docs, and the Object Storage Service to build apps to display and extend your data in ways that add value to your users."
                            icon="cloud_circle" link={linkObj2}
                        />
                     </Suspense>
                       
                     </Col>
                </Row>
                 
                <Row style={{marginTop:20}}>
                     <Col>
                     <Suspense fallback={<div>Loading...</div>}>
                     <CardComp title="Design Automation" desc="GAutomate repetitive tasks by leveraging on the scale of the Forge Platform and running scripts on your design files in the cloud."
                            icon="ac_unit" link={linkObj2}
                        />
                     </Suspense>
                        
                     </Col>
                     <Col>
                     <Suspense fallback={<div>Loading...</div>}>
                     <CardComp title="Model Derrivative" desc="Derive outputs viewable by the Forge Viewer from more than 60 CAD file formats, and extract metadata about the models as well as the individual objects within the model."
                            icon="filter_vintage" link={linkObj2}
                        />
                     </Suspense>
                       
                     </Col>
                     <Col>
                     <Suspense fallback={<div>Loading...</div>}>
                     <CardComp title="Reality Capture" desc="Convert digital images into high resolution textured meshes, dense point clouds and orthophotos."
                            icon="movie_filter" link={linkObj2}
                        />
                     </Suspense>   
                     </Col>
                </Row>
                <Row>
                {
                    cardData.length > 0 ? cardData.map((item,index)=>(
                        <Col style={{marginTop:15}}>
                     <Suspense fallback={<div>Loading...</div>}>
                     <CardComp title={item.title} desc={item.desc}
                            icon={item.icon} link={item.links}
                        />
                     </Suspense>   
                     </Col>
                    )):<Col/>
                }
                </Row>
                </Container>
                
            </Container>
        )
    }
}
export default Home;