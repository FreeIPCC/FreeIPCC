import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markup'
import './prism-light.css'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import React from "react";

export const LightCodeEditor = ({ value, placeholder, disabled = false, type, style, onValueChange, onMouseUp, onBlur }) => {
    const theme = useTheme()

    return (
        <Editor
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            highlight={(code) => highlight(code, type === 'json' ? languages.json : languages.js)}
            padding={10}
            onValueChange={onValueChange}
            onMouseUp={onMouseUp}
            onBlur={onBlur}
            tabSize={4}
            style={{
                ...style,
                background: theme.palette.card.main
            }}
            textareaClassName='editor__textarea'
        />
    )
}

LightCodeEditor.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    style: PropTypes.object,
    onValueChange: PropTypes.func,
    onMouseUp: PropTypes.func,
    onBlur: PropTypes.func
}
