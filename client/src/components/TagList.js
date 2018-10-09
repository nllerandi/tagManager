import React, {Component} from "react";
import {connect} from "react-redux";
import {getTags} from "../actions";
// import { Link } from "react-router-dom";

class TagList extends Component {
    componentDidMount() {
        this.props.getTags("wireless");
    }

    renderTagsList = () => {
        return this.props.tags.map((tag) => {
            const name = tag.name;
            const vendor = tag.vendor;
            const generalLocation = tag.generalLocation;
            const purpose = tag.purpose;
            const active = tag.active.toString();

            return (
                <tr key={tag._id}>
                    <td>{name}</td>
                    <td>{vendor}</td>
                    <td>{generalLocation}</td>
                    <td>{purpose}</td>
                    <td>{active}</td>
                </tr>
            )
        })
    };

    render() {
        return (
            <div className="col-md-8">
                <h1>Wireless Tags</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Vendor</th>
                            <th>Location</th>
                            <th>Purpose</th>
                            <th>isActive</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderTagsList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        test: state.test,
        tags: state.tags
    }
}

export default connect(mapStateToProps, {getTags})(TagList);