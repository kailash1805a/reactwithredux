import React, { Component } from "react";
import { connect } from "react-redux";

class PoliticianActive extends Component {
    render(){
        if(!this.props.activePolitician) {
            return (<p>Select Politician...</p>);
        }
        return (
            <div>
                <p>Name:{this.props.activePolitician.name}</p>
                <p>Likes: {this.props.activePolitician.like}</p>
                <p>Dislikes: {this.props.activePolitician.dislike}</p>
                <p>Comments: {this.props.activePolitician.comment}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        activePolitician: state.activePolitician
    }
}

export default connect(mapStateToProps)(PoliticianActive);