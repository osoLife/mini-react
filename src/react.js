const createElement = (element, props, ...children) => {
    const virtualDOM = {
        $$typeof: Symbol('react.element'),
        key: null,
        ref: null,
        type: null,
        props: {}
    }
    virtualDOM.type = element
    if (props !== null) {
        virtualDOM.props = {
            ...props
        }
    }
    if (children.length === 1) {
        virtualDOM.props.children = children[0]
    }
    if (children.length > 1) {
        virtualDOM.props.children = children
    }

    return virtualDOM
}

const React = {
    createElement
}

export default React