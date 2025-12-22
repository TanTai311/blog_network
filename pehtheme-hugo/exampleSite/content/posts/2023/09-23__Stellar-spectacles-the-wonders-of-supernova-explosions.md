---
title: "Java HTTP client: HttpURLConnection và xử lý JSON"
date: 2024-11-20T10:30:00+07:00
slug: "java-httpurlconnection-json"
description: "Cách gửi GET/POST với HttpURLConnection, thiết lập timeout, header và parse JSON bằng Gson."
image: ''
categories:
  - java
tags:
  - java
  - http
  - json
  - networking
draft: false
---

## 1. Khi nào dùng HttpURLConnection
- Dự án nhỏ, không muốn thêm dependency.
- Cần kiểm soát header, timeout chi tiết.
- Muốn hiểu tầng HTTP nền tảng trước khi dùng WebClient/OkHttp.

## 2. Cấu hình kết nối
```java
URL url = new URL("https://api.example.com/users");
HttpURLConnection conn = (HttpURLConnection) url.openConnection();
conn.setRequestMethod("GET");
conn.setConnectTimeout(5000);
conn.setReadTimeout(7000);
```

## 3. Đọc phản hồi và parse JSON
```java
try (InputStream in = conn.getInputStream()) {
  String body = new String(in.readAllBytes(), StandardCharsets.UTF_8);
  User[] users = new Gson().fromJson(body, User[].class);
}
```

## 4. Gửi POST JSON
```java
conn.setRequestMethod("POST");
conn.setDoOutput(true);
conn.setRequestProperty("Content-Type", "application/json");
String payload = "{\"name\":\"Tai\"}";
try (OutputStream os = conn.getOutputStream()) {
  os.write(payload.getBytes(StandardCharsets.UTF_8));
}
```

## 5. Xử lý lỗi
- Kiểm tra `conn.getResponseCode()` (200/400/500).
- Nếu mã lỗi, đọc `conn.getErrorStream()` để log chi tiết.
- Bọc try-with-resources để đóng stream.

## 6. Checklist
- Timeout rõ ràng.
- Header `Content-Type`/`Accept` phù hợp.
- Log URL, method, status, thời gian đáp ứng.
- Parse JSON bằng Gson/Jackson; validate dữ liệu trước khi dùng.

## 7. Khi nên nâng cấp
- Nếu cần HTTP/2, reactive, pooling: chuyển sang `HttpClient` (Java 11) hoặc thư viện khác (WebClient/OkHttp).
