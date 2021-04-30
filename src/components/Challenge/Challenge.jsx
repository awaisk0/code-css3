import React, { useEffect, useState } from 'react';

import Editor from '../Editor/Editor';

import './Challenge.scss';

const Challenge = () => {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [srcDoc, setSrcDoc] = useState('');


    useEffect(() => {
        setSrcDoc(`
            <style>${css}</style>
            <html>
                <body>${html}</body>
            </html>
        `);
    }, [html, css]);
    
    return (
        <section className='challenge-container'>
            {/* Using 'Code Mirror' for a live code editor */}
            <div className='pane top-pane'>
                {/* HTML Editor */}
                <Editor 
                    language='xml' 
                    name='HTML' 
                    value={html} 
                    onChange={setHtml} 
                />
                {/* CSS Editor */}
                <Editor 
                    language='css' 
                    name='CSS' 
                    value={css} 
                    onChange={setCss} 
                />
            </div>
            <div className='pane'>
                {/* Renders the HTML and CSS on the page */}
                <iframe 
                    srcDoc={srcDoc}
                    title='output'
                    sandbox='allow-scripts'
                    frameBorder='0'
                    width='100%'
                    height='100%'
                />
            </div>
            <br />
        </section>
    );
};

export default Challenge;