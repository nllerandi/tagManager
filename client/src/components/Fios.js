import React, {Component} from "react";
import {connect} from "react-redux";
import {getTags} from "../actions";

class Wireless extends Component {
    componentDidMount() {
        this.props.getTags("fios");
    }

    renderTagsList = () => {
        return this.props.tags.map((tag) => {
            const name = tag.name;
            const vendor = tag.vendor;
            const generalLocation = tag.generalLocation.join(", ");
            const specificURLs = tag.specificURLs;
            const src = tag.src;
            const type = tag.type;
            const cat = tag.cat;

            return (
                <tr key={tag._id}>
                    <td>{name}</td>
                    <td>{vendor}</td>
                    <td>{generalLocation}</td>
                    <td>{specificURLs}</td>
                    <td>{src}</td>
                    <td>{type}</td>
                    <td>{cat}</td>
                </tr>
            )
        })
    };

    render() {
        return (
            <div className="container">
                <h1>Wireless Tags</h1>

                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Vendor</th>
                        <th>generalLocation</th>
                        <th>specificURLs</th>
                        <th>src</th>
                        <th>type</th>
                        <th>cat</th>
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

export default connect(mapStateToProps, {getTags})(Wireless);