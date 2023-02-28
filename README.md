# Map-service

How to start server
`nodemon server.js`

## Choices

### Structure:
- Model–view–controller (MVC) software architectural pattern
- Rest API (seperation of concerns)

#### Frontend
- Mapbox
- Turf
- React
- node.js server
- fetch() is not backward compatibility. Axios uses the XMLHttpRequest behind the scene to make the HTTP request. This makes Axios compatible with some older web browsers like IE11 (fetch() doesn’t work on IE11)

#### Backend
- mongoose/mongoDb
- development server nodemon
- express to make API

##### More about database
- In-memory: I looked at local.storage (not saved if you clear cache). Good for fast retrival, but can experience loss.
- LowDb saves in JSON-file and easy to use
- IndexDb complex to use
...

## Possible expansions
- Adding last enpoints
- Splitting into components
- Add layers
- Add markers
- Add users

## Improvements
- Input validation from user
- Unit tests and e2e tests
- Type validation
- Fix css
- Authentication/authorization

## Security
- Add access keys to .env and make sure they don't get uploaded to remote repo

## Scalability
- Map: Use "ReuseMap" to minimize Cost from Frequent Re-mounting
- Map: Performance with Many Markers is better with useMemo. This prevents React from rerendering the markers unless they have changed.



