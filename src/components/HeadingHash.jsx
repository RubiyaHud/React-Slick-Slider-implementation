import React from 'react'

const HeadingHash = (props) => {
    let pattern = /#([^#]+)#/g;
    let textWithSpans = props.text.replace(pattern,"<span class='one'>$1</span>");
    return <props.as className={props.className} dangerouslySetInnerHTML={{ __html: textWithSpans }} />;
}

export default HeadingHash