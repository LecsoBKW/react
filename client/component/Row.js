import React, {Component} from 'react';

class Row extends Component {


    render() {
        return (
          <div className="row">
            <div className="col-xs-4">{this.props.todoText}
            </div>
            <div className="col-xs-4">
              <button className="btn btn-primary" onClick={()=>this.props.modifyLine(this.props.keyVal)}>Modify</button>
              <button className="btn btn-danger" onClick={()=>this.props.deleteLine(this.props.keyVal)}>Delete</button>
              <br/><br/>
            </div>
            <div className="col-xs-4"/>
          </div>
        )
    }
}

export default Row
