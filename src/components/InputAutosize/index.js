import React from 'react';
import * as PropTypes from 'prop-types';

const InputAutosize = (props) => {
  const bufferRef = React.useRef(null);
  const inputRef = React.useRef(null);

  const [inputWidth, setInputWidth] = React.useState(props.style.width || '1px');
  const [bufferText, setBufferText] = React.useState(props.value || props.defaultValue);

  const inputStyle = {
    width: `${inputWidth}px`,
    boxSizing: 'content-box',
    ...props.style,
  };
  const { ...inputProps } = props;
  inputProps.style = inputStyle;

  const bufferStyle = {
    position: 'absolute',
    visibility: 'hidden',
    whiteSpace: 'nowrap',
    top: '-1000px',
    left: '-1000px',
  };

  React.useEffect((e) => {
    calculateWidth();
  });

  const calculateWidth = (event) => {
    setBufferText(inputRef.current.value);
    setTimeout(() => {
      setInputWidth(bufferRef.current.clientWidth);
      inputProps.style = inputStyle;
    })
  };

  return (
    <div className="input-autosize-wrapper" style={{display: 'inline-block'}}>
      <style dangerouslySetInnerHTML={{
        __html: `.input-autosize-wrapper::-ms-clear {display: none;}`,
      }} />
      <div ref={bufferRef} className="input-autosize-buffer" style={bufferStyle}>{bufferText}</div>
      <input ref={inputRef} {...inputProps} onInput={calculateWidth} />
    </div>
  );
}

InputAutosize.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'number', 'search', 'email', 'tel', 'url']),
  style: PropTypes.object,
  name: PropTypes.string,
  className: PropTypes.string,
}

InputAutosize.defaultProps = {
  type: 'text',
  defaultValue: '',
  style: {},
};

export default InputAutosize;
