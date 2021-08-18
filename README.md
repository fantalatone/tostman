
# Tostman
> Simple CLI for testing API's 🦾

Read this in other languages : [English](https://github.com/fantalatone/tostman/blob/main/README.md), [Türkçe](https://github.com/fantalatone/tostman/blob/main/README.tr.md)  

```
// making a GET request to localhost
.\tostman.exe GET localhost:8000/users/

// output
Status : 200
Time : 27ms
Size : 252 B
```

## Usage
Using Tostman is quite simple.
### Syntax
Tostman has a really simple syntax.

`.\tostman.exe <METHOD> <URL> <BODY>`

#### Method
Valid methods :
- GET
- POST
- PUT
- PATCH
- DELETE
#### URL
All valid URL syntax : 
```
localhost/
localhost:8000/
http://localhost:8000/
https://example.com/
https://www.example.com/
https://example.com:80/
https://www.example.com:80/
```
