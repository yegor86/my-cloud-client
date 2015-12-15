## Prerequisites
1. Make sure you have [node.js](https://nodejs.org/en/download/) installed
2. Install bower

    ```bash
         $ npm install -g bower
    ```
3. Install all dependences
    
    ```bash
         $ cd my-cloud-client/
         $ npm install
    ```
4. Run gulp default tasks to "compile" the code, that is, minify, run postcss and so on

    ```bash
         $ gulp default
    ```

   If you want to debug the code, you just need to inject all files of application using an inject command with "--dev" flag:

   ```bash
        $ gulp inject --dev
    ```

5. Install nodemon tool that will keep the node server from having to be restarted each time the code is changed:

    ```bash
         $ npm install -g nodemon
    ```
6. Run a development version of the application(starting node.js server available on http://localhost:3000)

    ```bash
         $ npm start
    ```
7. Run tests
    
    ```bash
         $ gulp unit
         $ gulp e2e
    ```