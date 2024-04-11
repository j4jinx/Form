import React from "react";
import PropTypes from 'prop-types';


/**
 * Minimal Form Select React Component
 * 
 * @author [Amol Meshram](https://github.com/j4jinx)
 */
const Select = (props) => {
    const { showLabel = true, withGroup = true, options = [], style = {}, ...rest } = props;

    const [borderColor, setBorderColor] = React.useState('#cccccc');

    const onFocus = () => {
        setBorderColor('#212121');
    };

    const onBlur = () => {
        setBorderColor('#cccccc');
    };


    let label = props.label || props.name;
    let ariaLabelledby = `select_id_${props.name}`;

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
                    <label
                        htmlFor={ariaLabelledby}
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

            <select
                onFocus={onFocus}
                onBlur={onBlur}
                id={ariaLabelledby}
                style={{
                    ...inpStyle,
                    ...style
                }}
                {...rest}
            >
                {options.map((opt, i) => {
                    return (
                        <option key={`select_${props.name}_${i}_${opt.value}`} value={opt.value}>
                            {opt.label}
                        </option>
                    )
                })}
            </select>
        </div>
    );
};

Select.propTypes = {
    /**
   * Select field Name
   */
    name: PropTypes.string.isRequired,
    /**
     * Select field label
     */
    label: PropTypes.string,
    /**
    * Show label
    */
    showLabel: PropTypes.bool,
    /**
    * With Group Fieldset
    */
    withGroup: PropTypes.bool,
    /**
   * Select Options
   */
    options: PropTypes.arrayOf(PropTypes.exact({ label: PropTypes.any, value: PropTypes.any })),
};


Select.defaultProps = {
    name: 'selectfield1',
    showLabel: true,
    withGroup: true,
};

export default Select;