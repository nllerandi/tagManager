import React from "react";

const TagDetail = (props) => {
    let active = props.selectedTag.active;
    let code = props.selectedTag.code;
    let date = props.selectedTag.date;
    let generalLocation = props.selectedTag.generalLocation;
    let isFloodlight = props.selectedTag.isFloodlight;
    let lob = props.selectedTag.lob;
    let purpose = props.selectedTag.purpose;
    let specificURLs = props.selectedTag.specificURLs;
    let vendor = props.selectedTag.vendor;

    return (
        <div>
            <h2>Tag Detail</h2>
            <ul className="list-group">
                <li className="list-group-item">Active: {active}</li>
                <li className="list-group-item">Code: {code}</li>
                <li className="list-group-item">Date: {date}</li>
                <li className="list-group-item">Location: {generalLocation}</li>
                <li className="list-group-item">isFloodlight: {isFloodlight}</li>
                <li className="list-group-item">LOB: {lob}</li>
                <li className="list-group-item">Purpose: {purpose}</li>
                <li className="list-group-item">Specific URLs: {specificURLs}</li>
                <li className="list-group-item">Vendor: {vendor}</li>
            </ul>
        </div>
    )
};

export default TagDetail;