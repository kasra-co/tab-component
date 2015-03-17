# FEMbot

A seed project for front end modules, with automated build.

## Tooling


**jshint** [sublime module](https://github.com/victorporof/Sublime-JSHint) - Flag common JS errors.

**jscs** [sublime module](https://github.com/SublimeLinter/SublimeLinter-jscs/) - Editor support for code style conventions. (Not currently working with JSX, do not use)

## Demo

From `demo/dist`, run `gulp watch` to start the build. It will rebuild whenever there are changes.

Start a simple webserver in the demo dir to view the demo:

```
$ pythom -m SimpleHTTPServer
Serving HTTP on 0.0.0.0 port 8000 ...
```

Open a browser at localhost:8000.
