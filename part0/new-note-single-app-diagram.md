```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: Requests the single-page app
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

     browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: Delivers the single-page app in the browser (HTML, JavaScript)
    deactivate server

    Note right of browser:  The browser only use HTML page fetched from the server, <br>and shows the contents of which are manipulated with JavaScript that executes in the browser.

    server->>browser: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    browser-->>server: Save a Note
    deactivate server

    Note right of browser: Create a new note, the browser sends only one request to the server.<br>  Sends new note data as JSON (POST request), the server responds with status code 201 created.<br> Not redirect, the browser stays on the same page.
```
