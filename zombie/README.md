The project reads input from 'input.json', and populate the input and output on the html page.

Once the data has been processed, the output will be shown, with the zombie score and their final positions.

Error will be shown on the html page, if there is any error. (Can't read the file, wrong input, etc)

To run the project, you can download a http-server package on npm, with
`npm install -g http-server`, then go to zombie directory, run the command `http-server`,
once the server is up, you can browse the HTML by going to the url:
http://127.0.0.1:8080/zombie.html
