---
title: "Java HTTP Client: HttpURLConnection và xử lý JSON"
date: 2024-09-23T09:15:00+07:00
slug: "java-http-client-httpurlconnection-xu-ly-json"
description: "Cách gửi GET/POST với HttpURLConnection, thiết lập timeout, header và parse JSON trong Java."
image: 'images/Java HTTP client HttpURLConnection và xử lý JSON.png'
categories:
  - java
tags:
  - java
  - http
  - json
  - backend
  - api
draft: false
---

## 1. Giới thiệu

Trong các ứng dụng Java backend hiện đại, việc giao tiếp với API bên ngoài là nhu cầu phổ biến, từ gọi dịch vụ REST, tích hợp hệ thống, đến trao đổi dữ liệu giữa các microservices. Trước khi các HTTP client hiện đại như HttpClient (Java 11+) hay thư viện bên thứ ba ra đời, HttpURLConnection là API chuẩn và nền tảng nhất để thực hiện HTTP request trong Java.

Bài viết này trình bày cách sử dụng HttpURLConnection để gửi request HTTP và xử lý dữ liệu JSON, giúp người học nắm được nguyên lý cốt lõi của giao tiếp HTTP trong Java.

## 2. Tổng quan về HttpURLConnection

### 2.1. HttpURLConnection là gì?

HttpURLConnection là lớp chuẩn trong Java (java.net) dùng để:

- Gửi HTTP request (GET, POST, PUT, DELETE)
- Nhận HTTP response từ server
- Thiết lập header, timeout, method

Đây là HTTP client cấp thấp, giúp hiểu rõ cách HTTP hoạt động.

### 2.2. Khi nào nên dùng HttpURLConnection?

- Học và hiểu nguyên lý HTTP
- Ứng dụng Java nhỏ, ít phụ thuộc
- Môi trường hạn chế thư viện ngoài

Không phù hợp cho:

- Ứng dụng lớn
- Xử lý API phức tạp
- Code yêu cầu ngắn gọn, dễ bảo trì

## 3. Cấu trúc một HTTP request trong Java

Một request với HttpURLConnection thường gồm các bước:

- Tạo URL
- Mở kết nối
- Thiết lập method, header
- Gửi dữ liệu (nếu có)
- Đọc response
- Đóng kết nối

## 4. Gửi HTTP GET request với HttpURLConnection

### 4.1. Ví dụ GET request cơ bản

```java
URL url = new URL("https://api.example.com/users");
HttpURLConnection conn = (HttpURLConnection) url.openConnection();

conn.setRequestMethod("GET");
conn.setConnectTimeout(5000);
conn.setReadTimeout(5000);

int status = conn.getResponseCode();
```

### 4.2. Đọc response từ server

```java
BufferedReader reader = new BufferedReader(
        new InputStreamReader(conn.getInputStream())
);

StringBuilder response = new StringBuilder();
String line;

while ((line = reader.readLine()) != null) {
    response.append(line);
}

reader.close();
conn.disconnect();
```

Response thường là chuỗi JSON.

## 5. Gửi HTTP POST request

### 5.1. Chuẩn bị dữ liệu gửi đi

```java
String jsonInput = "{\"name\":\"John\",\"age\":30}";
```

### 5.2. Gửi POST request

```java
URL url = new URL("https://api.example.com/users");
HttpURLConnection conn = (HttpURLConnection) url.openConnection();

conn.setRequestMethod("POST");
conn.setRequestProperty("Content-Type", "application/json");
conn.setDoOutput(true);

try(OutputStream os = conn.getOutputStream()) {
    os.write(jsonInput.getBytes("UTF-8"));
}
```

`setDoOutput(true)` là bắt buộc với request có body.

## 6. Xử lý JSON trong Java

{{< img src="images/xu-ly-json-trong-java.png" alt="Xử lý JSON trong Java" >}}

### 6.1. JSON là gì?

JSON (JavaScript Object Notation) là định dạng dữ liệu phổ biến trong REST API nhờ:

- Nhẹ
- Dễ đọc
- Dễ phân tích cú pháp

### 6.2. Phân tích JSON bằng thư viện

Java không có parser JSON mặc định, thường dùng:

- Gson
- Jackson
- org.json

Ví dụ với Gson:

```java
JsonObject jsonObject = JsonParser.parseString(response.toString())
                                  .getAsJsonObject();

String name = jsonObject.get("name").getAsString();
int age = jsonObject.get("age").getAsInt();
```

## 7. Mapping JSON sang Object Java

### 7.1. Tạo class Java

```java
class User {
    private String name;
    private int age;
}
```

### 7.2. Chuyển JSON sang Object

```java
Gson gson = new Gson();
User user = gson.fromJson(response.toString(), User.class);
```

Đây là cách phổ biến trong các ứng dụng REST API.

## 8. Xử lý lỗi khi gọi HTTP API

### 8.1. Kiểm tra mã trạng thái HTTP

```java
if (status >= 200 && status < 300) {
    // success
} else {
    // error handling
}
```

### 8.2. Phân biệt InputStream và ErrorStream

```java
InputStream is = status < 400 
        ? conn.getInputStream() 
        : conn.getErrorStream();
```

Giúp đọc thông báo lỗi từ server.

## 9. Hạn chế của HttpURLConnection

- Code dài, nhiều boilerplate
- Khó mở rộng
- Không hỗ trợ async
- Khó test

Vì vậy, trong thực tế thường dùng:

- HttpClient (Java 11+)
- RestTemplate / WebClient (Spring)
- OkHttp, Retrofit

## 10. Kết luận

HttpURLConnection là nền tảng quan trọng giúp lập trình viên Java hiểu rõ cơ chế HTTP request/response. Kết hợp với xử lý JSON, đây là kiến thức cơ bản trước khi tiếp cận các HTTP client hiện đại và framework backend như Spring Boot. Nắm vững nguyên lý này giúp việc debug, tối ưu và thiết kế API trở nên hiệu quả.
