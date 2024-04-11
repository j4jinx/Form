import React from "react";
import PropTypes from 'prop-types';


/**
 * Minimal Form Input React Component
 * 
 * @author [Amol Meshram](https://github.com/j4jinx)
 */
const Input = (props) => {
    const { showLabel = true, withGroup = true, style = {}, ...rest } = props;

    let label = props.label || props.name;
    let iType = props.type || "text";
    let ariaLabelledby = `${iType}_id_${props.name}`;

    const [borderColor, setBorderColor] = React.useState('#cccccc');

    const onFocus = () => {
        setBorderColor('#212121');
    };

    const onBlur = () => {
        setBorderColor('#cccccc');
    };

    let inpStyle = {
        fontFamily: `inherit`,
        fontSize: `inherit`,
        lineHeight: `inherit`,
        margin: 0,
        fontWeight: 400,
        display: `block`,
        width: `100%`,
        padding: `5px 10px`,
        boxSizing: `border-box`,
        border: `1.5px solid ${borderColor}`,
        WebkitTransition: `0.5s`,
        transition: `0.5s`,
        outline: `none`,
        backgroundColor: `transparent`,
    };



    return (
        <div style={{ marginBottom: withGroup ? '.85rem' : 0, fontFamily: `inherit`, fontSize: `0.95rem` }}>
            {
                showLabel
                    ?
                    <label htmlFor={ariaLabelledby}
                        style={{
                            display: `block`,
                            padding: `0.2rem 0`,
                            fontWeight: 500,
                            textTransform: `capitalize`
                        }}
                    >
                        {label}
                    </label>
                    :
                    null
            }

            {
                iType === 'textarea'
                    ?
                    <textarea
                        onFocus={onFocus}
                        onBlur={onBlur}
                        id={ariaLabelledby}
                        placeholder={label}
                        style={{
                            ...inpStyle,
                            ...style
                        }}
                        {...rest}
                    />
                    :
                    <input
                        onFocus={onFocus}
                        onBlur={onBlur}
                        type={iType}
                        id={ariaLabelledby}
                        style={{
                            ...inpStyle,
                            overflow: `visible`,
                            ...style
                        }}
                        {...rest}
                    />
            }
        </div>
    );
};

Input.propTypes = {
    /**
   * Input field Name
   */
    name: PropTypes.string.isRequired,
    /**
    * Input field type
   */
    type: PropTypes.string,
    /**
     * Input field label
     */
    label: PropTypes.string,
    /**
    * Show label
    */
    showLabel: PropTypes.bool,
    /**
    * With Group Fieldset
    */
    withGroup: PropTypes.bool
};


Input.defaultProps = {
    type: 'text',
    name: 'field1',
    showLabel: true,
    withGroup: true,
};

export default Input;