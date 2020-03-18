import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Link } from 'react-router-dom';
const cardwithShadow ={ width: '20rem', height:'20rem',boxShadow:"0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)" }
const cardwithOutShadow ={ width: '20rem',height:'20rem' }
class CardComponent extends Component {
    constructor(props){
        super(props)
        this.state ={isMouseOver:false}
    }
    updateStateMouseOver =(isMouseOver)=>{
        this.setState({isMouseOver})
    }
    
    render(){
        const { isMouseOver } = this.state
        const { link } = this.props
        return(
            <Card 
            style={ isMouseOver ? cardwithShadow : cardwithOutShadow } 
            onMouseOver={(e)=> this.updateStateMouseOver(true)}
            onMouseLeave={(e)=> this.updateStateMouseOver(false)}
            >
              <Card.Body>
                <Card.Title style={{alignItems:'center',justifyContent:'center'}}>
                <div style={{width:30,display:'inline',float:'left'}}><MaterialIcon icon={this.props.icon.toString()}  color={colorPalette.blue._400} /></div>
                <div>{this.props.title}</div>
                </Card.Title>
                
                <Card.Text className=" text-muted" style={{fontSize:14}}>
                  {this.props.desc}
                </Card.Text>
                
                
                <ListGroup variant="flush" style={{ position:'absolute', bottom:5,width:'90%'}}>
                    {link.map((item,index)=>(
                            <ListGroup.Item  > 
                            <Link style={{textDecoration:'none',fontSize:18,color:'#777'}} to={item.link}>{item.title}
                            <div style={{float:'right'}}><MaterialIcon icon="keyboard_arrow_right" /></div>
                            </Link>
                            </ListGroup.Item>
                    ))}
               
                
              </ListGroup>
              </Card.Body>
            </Card>
            );
    }
  
}
export default CardComponent
