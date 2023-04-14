    // const heading = React.createElement('h1', {},'Namaste Everyone');
    //     const heading = React.createElement('h1', {
    //         className : 'heading',
    //         id : 'heading1',
    //         style : {color: 'red'}
    //     },
    //     'Namaste Everyone', 
    //     ' this is the second children');
    //     // react element is a object
    //     console.log(heading);

    //    //    creating an html div as a react root element
    //     const root = ReactDOM.createRoot(document.getElementById('root'));
    //     // const root = ReactDOM.createRoot(document.getElementById('root12131'));
    //     console.log(root);
    //      // passing the react Element inside the root element
    //     root.render(heading);
    //     // render method takes an react element and modify our DOM

    const heading1 = React.createElement(
        'h1', 
        {
            id : 'title1'
        },
        'heading 1'
    );

    const heading2 = React.createElement(
        'h2', 
        {
            id : 'title2'
        },
        'heading 2'
    );

    const container = React.createElement(
        'div',
        {
            id : 'container'
        },
        [heading1, heading2]
    );

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(container);
