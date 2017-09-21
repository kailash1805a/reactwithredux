import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectPolitician } from "../actions/PoliticianActions";

class PoliticianList extends Component {

    constructor(props) {
        super();
        console.log(props);
        console.log("Constructor");
    }

    componentWillMount(){
        console.log("component will mount");
    }

    componentDidMount(){
        console.log("component did mount!");
    }

    componentWillReceiveProps(nextProps){
        console.log("component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Should component update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("component did update", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("component will unmount!");
    }


    createList() {
        return this.props.politicians.map((politician) => {
            return (
                <li key={politician.name} onClick={() => this.props.selectPolitician(politician)}>{politician.name}</li>
            )
        });
    }

    render() {
        console.log("render calling");
        return (
            <div>
                {this.createList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        politicians: state.politicianList
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectPolitician: selectPolitician }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PoliticianList);