import React, { useState } from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

import './Editor.scss';

const Editor = ({ name, language, value, onChange }) => {

  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  }

  return (
    // add the collapsed class if the collapse button is clicked on the editor (isOpen is false)
    <section className={`editor-container ${!isOpen ? 'collapsed' : ''}`}>
      <div className='editor-title'>
        {name}
        <button
          className='btn-expand-collapse'
          type='button'
          // when the button is clicked, change isOpen to false if it was true or to true if it was false
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineNumbers: true,
          lineWrapping: true,
          mode: language,
          lint: true,
          theme: 'material-palenight'
        }}
      />
    </section>
  );
}

export default Editor;