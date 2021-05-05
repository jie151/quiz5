import React from 'react';
import Button from '@material-ui/core/Button';

class CounterButton extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            counter:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState({counter:this.state.counter + 1})
        console.log(this.state);
    }
    render() {
        var text = this.state.counter;
        return (
            <div>
                <Button variant = "outlined" color ="primary" onClick={changeText,this.handleClick}>
                    你點了 {text} 次
                </Button>
            </div> 
        );
    }
}

/*ReactDOM.render(
    <div>
        <CounterButton num='1'/>
        <CounterButton num='2'/>
        <CounterButton num='3'/>
        <CounterButton num='4'/>
        <CounterButton num='5'/>
        <CounterButton num='6'/>
        <CounterButton num='7'/>
        <CounterButton num='8'/>
        <CounterButton num='9'/>
        <CounterButton num='10'/>
    </div>,document.getElementById('root'))

export default CounterButton; */

const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText = event.target.innerText + "被點了"
}

const MultiButton=(num)=>{
    var output = [];
    for(let i = 1; i<num+1; i++)  
        output.push(<CounterButton />);
    return output;
}

export default MultiButton;
  