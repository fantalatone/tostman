
# Tostman
> API test etmek için CLI 🦾

Bunu diğer dillerde okuyun : [English](https://github.com/fantalatone/tostman/blob/main/README.md), [Türkçe](https://github.com/fantalatone/tostman/blob/main/README.tr.md)  

```
// localhost'a GET request yapıyoruz
.\tostman.exe GET localhost:8000/users/

// çıktı
Status : 200
Time : 27ms
Size : 252 B
```

## KULLANIM
Tostman'i kullanmak oldukça basittir.
### SÖZ DİZİMİ
Tostman basit bir söz dizimine sahip.

`.\tostman.exe <METHOD> <URL> <BODY>`

#### Method
Geçerli metodlar :
- GET
- POST
- PUT
- PATCH
- DELETE
#### URL
Tüm geçerli URL söz dizimleri : 
```
localhost/
localhost:8000/
http://localhost:8000/
https://example.com/
https://www.example.com/
https://example.com:80/
https://www.example.com:80/
```
