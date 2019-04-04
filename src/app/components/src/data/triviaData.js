exports.DATA = {
  date: [{
    '11/01/2018': [
      {
        category: 'HTML',
        questions: [
          {
            points: 100,
            question: '<p>What are the new features provided in HTML5?</p>',
            answer: '<div class="text-left"><h3>Some of the new features provided in HTML5 are:</h3>1. It provides support for local storage<br>2. New form controls, like calendar, date, time, email, url, search<br>3. &lt;canvas&gt; element is provided to facilitate 2D drawing<br>4. The &lt;video&gt; and &lt;audio&gt; elements are provided for media playback<br>5. New content-specific elements are provided. <b>For e.g.</b> &lt;article&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, &lt;section&gt;</div>',
          },
          {
            points: 200,
            question: '_____ is the correct syntax for Doctype in HTML5?',
            answer: '&lt;! DOCTYPE&gt;',
          },
          {
            points: 300,
            question: 'Name 2 non-semantic elements',
            answer: '&lt;div&gt;, &lt;span&gt;',
          },
          {
            points: 400,
            question: 'Name 6 Block-level Elements',
            answer: '<div>, <hr>, <table>, <li>, <ul>, <p>, <form>, <h1>-<h6>, <ol> ...',
          },
        ],
      },
      {
        category: 'CSS',
        questions: [
          {
            points: 100,
            question: 'How block elements can be centered with CSS?',
            answer: 'With margin properties.',
          },
          {
            points: 200,
            question: 'Using npm, which package should you require/import in addition to "react" to render a React component in an existing DOM element of your HTML file?',
            answer: 'react-dom',
          },
          {
            points: 300,
            question: '<p>Which lifecycle function should you use to set default property values?</p><ol><li>getInitialState</li><li>getInitialProps</li><li>getDefaultProps</li></ol>',
            answer: 'C. getDefaultProps',
          },
          {
            points: 400,
            question: 'Name 3 limitations of CSS ',
            answer: '<div class="text-left">1.Ascending by selectors is not possible <br>2.Limitations of vertical control <br>3.No expressions <br>4.No column declaration <br>5.Pseudo-class not controlled by dynamic behavior <br>6.Rules, styles, targeting specific text not possible.</div> ',
          },
        ],
      },
      {
        category: 'JavaScript',
        questions: [
          {
            points: 100,
            question: 'What is the use of isNaN function?',
            answer: 'isNan function returns true if the argument is not a number otherwise it is false.',
          },
          {
            points: 200,
            question: 'What is negative infinity?',
            answer: 'Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.',
          },
          {
            points: 300,
            question: 'How can submit a form using JavaScript?',
            answer: 'document.form[0].submit();',
          },
          {
            points: 400,
            question: 'What is the function of delete operator?',
            answer: 'The functionality of delete operator is used to delete all variables and objects in a program but it cannot delete variables declared with VAR keyword.',
          },
        ],
      },
      {
        category: 'ES6',
        questions: [
          {
            points: 100,
            question: '<p>Constants (const) are:</p><ol><li>Block scoped</li><li>Function scoped</li><li>Global</li></ol>',
            answer: 'A. Block scoped',
          },
          {
            points: 200,
            question: 'Name 3 new collection classes in ES2015',
            answer: '<ul><li>Map</li><li>WeakMap</li><li>Set</li><li>WeakSet</li></ul>',
          },
          {
            points: 300,
            question: "<p>What's being logged and how is this new ES6 feature called?</p><code>var colors = ['red', 'blue', 'green'];<br/>var [primary, secondary, tertiary] = colors;<br/>console.log(secondary);</code>",
            answer: '<ul><li>blue</li><li>Array destructuring</li></ul>',
          },
          {
            points: 400,
            question: "<p>What's being logged and name 4 new features of ES6 used in this code snippet?</p><code>let greeting = (name, msg='Hello') => `${msg}, ${name}`;<br/>console.log(greeting('Christophe');</code>",
            answer: '<p>Hello, Christophe</p><ul><li>let variables</li><li>Arrow functions</li><li>Default parameters</li><li>Template strings</li></ul>',
          },
        ],
      },
    ],
    '14/01/2018': [
      {
        category: 'HTML',
        questions: [
          {
            points: 100,
            question: '<p>What are the new features provided in HTML5?</p>',
            answer: '<div class="text-left"><h3>Some of the new features provided in HTML5 are:</h3>1. It provides support for local storage<br>2. New form controls, like calendar, date, time, email, url, search<br>3. &lt;canvas&gt; element is provided to facilitate 2D drawing<br>4. The &lt;video&gt; and &lt;audio&gt; elements are provided for media playback<br>5. New content-specific elements are provided. <b>For e.g.</b> &lt;article&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, &lt;section&gt;</div>',
          },
          {
            points: 200,
            question: '_____ is the correct syntax for Doctype in HTML5?',
            answer: '&lt;! DOCTYPE&gt;',
          },
          {
            points: 300,
            question: 'Name 2 non-semantic elements',
            answer: '&lt;div&gt;, &lt;span&gt;',
          },
          {
            points: 400,
            question: 'Name 6 Block-level Elements',
            answer: '&lt;div&gt;, &lt;hr&gt;, &lt;table&gt;, &lt;li&gt;, &lt;ul&gt;, &lt;p&gt;, &lt;form&gt;, &lt;h1&gt;-&lt;h6&gt;, &lt;ol&gt; ...',
          },
        ],
      },
      {
        category: 'CSS',
        questions: [
          {
            points: 100,
            question: 'How block elements can be centered with CSS?',
            answer: 'With margin properties.',
          },
          {
            points: 200,
            question: ' Explain 2 the advantages of CSS?',
            answer: '<ul><li>Accessibility</li><li>Multiple Device Compatibility</li><li>Page will load fast</li><li>Maintenance is Easy</li><li>Offline Browsing</li></ul>',
          },
          {
            points: 300,
            question: 'What are the components of CSS style?',
            answer: '<ul><li>Property&nbsp;</li><li>Selector</li><li>Value</li></ul>',
          },
          {
            points: 400,
            question: 'Name 3 limitations of CSS ',
            answer: '<div class="text-left">1.Ascending by selectors is not possible <br>2.Limitations of vertical control <br>3.No expressions <br>4.No column declaration <br>5.Pseudo-class not controlled by dynamic behavior <br>6.Rules, styles, targeting specific text not possible.</div> ',
          },
        ],
      },
      {
        category: 'JavaScript',
        questions: [
          {
            points: 100,
            question: 'What is the use of isNaN function?',
            answer: 'isNan function returns true if the argument is not a number otherwise it is false.',
          },
          {
            points: 200,
            question: 'What is negative infinity?',
            answer: 'Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.',
          },
          {
            points: 300,
            question: 'How can submit a form using JavaScript?',
            answer: 'document.form[0].submit();',
          },
          {
            points: 400,
            question: 'What is the function of delete operator?',
            answer: 'The functionality of delete operator is used to delete all variables and objects in a program but it cannot delete variables declared with VAR keyword.',
          },
        ],
      },
      {
        category: 'ES6',
        questions: [
          {
            points: 100,
            question: '<p>Constants (const) are:</p><ol><li>Block scoped</li><li>Function scoped</li><li>Global</li></ol>',
            answer: 'A. Block scoped',
          },
          {
            points: 200,
            question: 'Name 3 new collection classes in ES2015',
            answer: '<ul><li>Map</li><li>WeakMap</li><li>Set</li><li>WeakSet</li></ul>',
          },
          {
            points: 300,
            question: "<p>What's being logged and how is this new ES6 feature called?</p><code>var colors = ['red', 'blue', 'green'];<br/>var [primary, secondary, tertiary] = colors;<br/>console.log(secondary);</code>",
            answer: '<ul><li>blue</li><li>Array destructuring</li></ul>',
          },
          {
            points: 400,
            question: "<p>What's being logged and name 4 new features of ES6 used in this code snippet?</p><code>let greeting = (name, msg='Hello') => `${msg}, ${name}`;<br/>console.log(greeting('Christophe');</code>",
            answer: '<p>Hello, Christophe</p><ul><li>let variables</li><li>Arrow functions</li><li>Default parameters</li><li>Template strings</li></ul>',
          },
        ],
      },
    ],
  }],
};
