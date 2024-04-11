import React from "react";
import PropTypes from 'prop-types';


/**
 * Minimal Form React Component
 * 
 * @author [Amol Meshram](https://github.com/j4jinx)
 */
const Form = (props) => {
    let formRef = React.useRef(null);

    const { onDone = () => { }, children, onSubmit, ...rest } = props;

    const handleSubmit = e => {
        e.preventDefault();
        const form = formRef.current;
        if (__ValidateForm(form)) {
            onDone(form);
        }
    };


    return (
        <form ref={formRef} onSubmit={handleSubmit} noValidate {...rest} >
            {children}
        </form>
    );
};

Form.propTypes = {
    /**
      * Callback fired when Form gets validated and submitted (returns form current Ref)
      */
    onDone: PropTypes.func,
    /**
     * Form children (input, radio, select, checkbox)
     */
    children: PropTypes.node
};



function __ValidateForm(form) {
    let firstInvalid = false;

    for (let el, i = 0;
        (el = form.elements[i]), i < form.elements.length; i++) {
        if (el.checkValidity()) {
            el.removeAttribute("aria-invalid");
        } else {
            if (!firstInvalid) {
                // announce error message
                if (el.nextElementSibling) {
                    //this.fire('announce', el.nextElementSibling.getAttribute('error-message'));
                }
                if (el.scrollIntoViewIfNeeded) {
                    // safari, chrome
                    el.scrollIntoViewIfNeeded();
                } else {
                    // firefox, edge, ie
                    el.scrollIntoView(false);
                }
                el.focus();
                firstInvalid = true;
            }
            el.setAttribute("aria-invalid", "true");
        }
    }
    return !firstInvalid;
}


Form.defaultProps = {
    onDone: () => { },
};

export default Form;