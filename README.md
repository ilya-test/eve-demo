eve-demo
========
This is a demo of a hypothetical product listing front-end. It is made up of two parts: a client package and a server
package. The client package is a React app and is served from `/`. The server package handles api requests from the
client on the `/api` endpoint.

This package is intended to be used with the `zed-demo` package as part of a deployment on the Humanitec Internal
Developer Platform. (humanitec.com.)

Configuration
-------------
The app accepts configuration via 2 enviornmental variables:
* `ZED_DEMO_SERVER` which is used to find the `zed-demo` backend. It defaults to `http://zed-demo:8080`.
* `PORT` which is the port number the server should be exposed on. It defaults to `8080`.
