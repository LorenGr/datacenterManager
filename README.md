# datacenterManager

This project is a test application that simulates the allocation and partitioning of various servers and the various application instances distributed on the clusters.

# Demo
https://datacentermanager.herokuapp.com

# Starting the project


##### install dependencies
`npm install`

##### Webpack the project
`npm build`

##### Start webpack-server on localhost port 3001
`npm start`

# Performance and scalability

The amount of application instances and servers could potentially increase drammatically, therefore a pattern that avoids constant loops over the list of server and application instances was adopted. The pattern is a form of indexing where objects with keys as uniqueId's were created and paired with values containing all data belonging to that particular server. This in turn allows to point directly to the server id without searching the other servers, and same logic applied to a list of application instances. This pattern also made other features very easy to implement, such as outputting a counter for the amount of application instances on the left side panel.
