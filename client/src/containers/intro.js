import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardHeader, CardFooter, CardText, CardBody,
  CardTitle, Button, Form, InputGroup, InputGroupAddon, Input, Container, Row, Col} from 'reactstrap';
import { greetUser } from '../actions/index';
import { changeNavbarColor } from '../actions/index';
import { toggleNavbarText } from '../actions/index';

const colorNames = ["ALICEBLUE", "DARKOLIVEGREEN", "INDIGO", "MEDIUMPURPLE", "PURPLE", "ANTIQUEWHITE", "DARKORANGE", "IVORY", "MEDIUMSEAGREEN", "RED", "AQUA", "DARKORCHID", "KHAKI", "MEDIUMSLATEBLUE", "ROSYBROWN", "AQUAMARINE", "DARKRED", "LAVENDER", "MEDIUMSPRINGGREEN", "ROYALBLUE", "AZURE", "DARKSALMON", "LAVENDERBLUSH", "MEDIUMTURQUOISE", "SADDLEBROWN", "BEIGE", "DARKSEAGREEN	LAWNGREEN", "MEDIUMVIOLETRED", "SALMON", "BISQUE", "DARKSLATEBLUE", "LEMONCHIFFON", "MIDNIGHTBLUE", "SANDYBROWN", "BLACK", "DARKSLATEGRAY", "LIGHTBLUE", "MINTCREAM", "SEAGREEN", "BLANCHEDALMOND", "DARKTURQUOISE", "LIGHTCORAL", "MISTYROSE", "SEASHELL", "BLUE", "DARKVIOLET", "LIGHTCYAN", "MOCCASIN", "SIENNA", "BLUEVIOLET", "DEEPPINK", "LIGHTGOLDENRODYELLOW", 	"NAVAJOWHITE", "SILVER", "BROWN", "DEEPSKYBLUE", "LIGHTGRAY", "NAVY", "SKYBLUE", "BURLYWOOD", "DIMGRAY", "LIGHTGREEN", "OLDLACE", "SLATEBLUE", "CADETBLUE", "DODGERBLUE", "LIGHTPINK", "OLIVE", "SLATEGRAY", "CHARTREUSE", "FIREBRICK", "LIGHTSALMON", "OLIVEDRAB", "SNOW", "CHOCOLATE", "FLORALWHITE", "LIGHTSEAGREEN", "ORANGE", "SPRINGGREEN", "CORAL", "FORESTGREEN", "LIGHTSKYBLUE", "ORANGERED	STEELBLUE", "CORNFLOWERBLUE", "FUCHSIA", "LIGHTSLATEGRAY", "ORCHID", "TAN", "CORNSILK", "GAINSBORO", "LIGHTSTEELBLUE", "PALEGOLDENROD", "TEAL", "CRIMSON", "GHOSTWHITE", "LIGHTYELLOW", "PALEGREEN", "THISTLE", "CYAN", "GOLD", "LIME", "PALETURQUOISE", "TOMATO", "DARKBLUE", "GOLDENROD", "LIMEGREEN", "PALEVIOLETRED", "TURQUOISE", "DARKCYAN", "GRAY", "LINEN", "PAPAYAWHIP", "VIOLET", "DARKGOLDENROD", "GREEN", "MAGENTA", "PEACHPUFF", "WHEAT", "DARKGRAY", "GREENYELLOW", "MAROON", "PERU", "WHITE", "DARKGREEN", "HONEYDEW", "MEDIUMAQUAMARINE", "PINK", "WHITESMOKE", "DARKKHAKI", "HOTPINK", "MEDIUMBLUE", "PLUM", "YELLOW", "DARKMAGENTA", "INDIANRED", "MEDIUMORCHID", "POWDERBLUE", "YELLOWGREEN"]

class Intro extends Component {
    constructor(props) {
        super(props)
        
        this.state = { term: '',
                       colorSearchTerm: '',
                        cardText: "I'm excited to tell you about the kinds of  websites we can build for you, but first let's introduce ourselves. My name is Richard and this is Filbert, the  company cat. What's your name?",
                        nameInputDisplay: 'visible',
                        inputPlaceholder: 'Your name',
                        colorQuestionDisplay: 'none',
                        colorInputPlaceholder: 'Favorite color?',
                        darkenTextDisplay: 'none',
                        changeColorToggleValue: 2,
                        ourServicesDisplay: 'visible',
                        servicesButtonDisplay: 'none',
                        nameTagDisplayClass: 'name-tag-visible',
                        rightDivImageDisplay: 'right-div-invisible',
                        rightDivImageSource: ''}
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onColorInputChange = this.onColorInputChange.bind(this);
        this.onColorFormSubmit = this.onColorFormSubmit.bind(this);
        this.toggleNavbarText = this.toggleNavbarText.bind(this);
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value})
    }
    
    onColorInputChange(event) {
        this.setState({ colorSearchTerm: event.target.value})
    }
    
    toggleNavbarText(event) {
        event.preventDefault();
        this.setState({changeColorToggleValue: this.state.changeColorToggleValue + 1})
        
        this.props.toggleNavbarText(this.state.changeColorToggleValue);
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        
        this.props.greetUser(this.state.term);
        this.setState({ cardText: `Hello, ${this.state.term}, it's nice to meet you! I've added your name in the navigation bar so I'll be sure to remember it (expand the menu if you're on a mobile device). I know this is kind of a corny question, but what's your favorite color?`,
                        term: '',
                        colorQuestionDisplay: 'block',
                        nameTagDisplayClass: 'name-tag-invisible',
                        ourServicesDisplay: 'none',
                        rightDivImageDisplay: 'right-div-visible',
                        inputPlaceholder: "Edit name?",
                        rightDivImageSource: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Crayons-metal.png'
                      })
    }
    
    onColorFormSubmit(event) {
        event.preventDefault();
        window.scrollTo(0, 0);
        
        const colorCheck = this.state.colorSearchTerm.toUpperCase().replace(/ +/g, "");
        
        if (colorNames.includes(colorCheck)) {
        this.props.changeNavbarColor(colorCheck);
        this.setState({ cardText: `Okay, I changed the color scheme of the site to ${this.state.colorSearchTerm.toLowerCase()}. Go ahead and try a fun color, like Honeydew or Papaya Whip!`,
                        colorSearchTerm: '',
                        nameInputDisplay: 'none',
                        colorInputPlaceholder: "Switch color?",
                        darkenTextDisplay: "block",
                        servicesButtonDisplay: 'block',
                        rightDivImageSource: 'https://images.unsplash.com/photo-1514580426463-fd77dc4d0672?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=802c875bf67a4dcaf275e11b1fa48d24&auto=format&fit=crop&w=500&q=60'
                      })
        } else {
            this.setState({ cardText: "I'm sorry, I'm not familiar with that color. Do you have another you'd like to try?",
                           colorSearchTerm: ''
        });
    }
}
    
    render() {
        return(
            <Container className='mt-4'>
                <Row>

                  <Col xs={{ size: 10, offset: 1 }} sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 0 }} lg={{ size: 5, offset: 0 }} xl={{ size: 4, offset: 1 }}>
                      <Card>
                        <CardImg top width="100%" src="https://image.ibb.co/hxx14T/ic_2962.png" alt="Card cap" />
                        <CardBody>
                          <CardTitle style={{ display: `${this.state.ourServicesDisplay}`}}>Our services</CardTitle>
                          <CardText>{this.state.cardText}</CardText>
                          <CardText style={{ display: `${this.state.darkenTextDisplay}`}}>If the new color washed out the navigation bar text, click <a href='#' onClick={this.toggleNavbarText}>here</a> to make it visible again.</CardText>
                          <CardText style={{ display: `${this.state.servicesButtonDisplay}`}}>Ready to learn more about what type of services we offer? Click <Link to='/services'>here</Link>.</CardText>

                          <Form style={{ display: `${this.state.colorQuestionDisplay}`}} onSubmit={this.onColorFormSubmit} className='mb-2'>
                              <InputGroup >
                                  <Input value={this.state.colorSearchTerm} placeholder={this.state.colorInputPlaceholder} onChange={this.onColorInputChange}/>
                                  <InputGroupAddon addonType="append">
                                    <Button outline color="primary">Submit</Button>
                                  </InputGroupAddon>
                              </InputGroup>
                          </Form>

                          <Form style={{ display: `${this.state.nameInputDisplay}`}} onSubmit={this.onFormSubmit}>
                              <InputGroup >
                                  <Input value={this.state.term} placeholder={this.state.inputPlaceholder} onChange={this.onInputChange}/>
                                  <InputGroupAddon addonType="append">
                                    <Button outline color="primary">Submit</Button>
                                  </InputGroupAddon>
                              </InputGroup>
                          </Form>
                        </CardBody>
                      </Card>    
                  </Col>
                
                  <Col md={{ size: 6, offset: 0 }} lg={{ size: 6, offset: 1 }} xl={{ size: 5, offset: 2 }}>
                      <div className={this.state.nameTagDisplayClass}>
                      <Card>
                        <CardHeader className='text-center' id='nameTagTop'>
                            <h2>Hello</h2>
                            <h5>My name is</h5>
                        </CardHeader>
                        <CardBody>
                          <div className='text-center' id='nameTagMiddle'><h1>{this.state.term}</h1></div>
                        </CardBody>
                        <CardFooter id='nameTagBottom' className="text-muted"></CardFooter>
                      </Card>
                      </div>

                      <div className={this.state.rightDivImageDisplay}>
                                <img className=
    'img-fluid img-thumbnail right-div-image' src={this.state.rightDivImageSource} alt='right div'/>
                      </div>
                  </Col>

                </Row> 
            </Container> 
        
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ greetUser: greetUser,
                                changeNavbarColor: changeNavbarColor,
                                toggleNavbarText: toggleNavbarText
                              }, dispatch)
}

export default connect(null, mapDispatchToProps)(Intro);