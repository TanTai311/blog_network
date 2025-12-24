---
title: "Fetch API trong JavaScript: Gọi REST và xử lý lỗi"
date: 2024-10-24T10:00:00+07:00
slug: "fetch-api-goi-rest-va-xu-ly-loi"
description: "Cách gọi REST API với Fetch, xử lý JSON, lỗi HTTP và timeout trong ứng dụng frontend."
image: 'images/Fetch API trong JavaScript gọi REST và xử lý lỗi.png'
categories:
  - javascript
tags:
  - javascript
  - fetch
  - rest
  - api
  - frontend
draft: false
---

## 1. Giới thiệu

Trong các ứng dụng web hiện đại, frontend thường xuyên phải giao tiếp với backend thông qua REST API để lấy dữ liệu, gửi form hoặc cập nhật trạng thái hệ thống. JavaScript cung cấp Fetch API - một chuẩn web hiện đại, gọn nhẹ và dễ sử dụng - để thực hiện các HTTP request bất đồng bộ.

Bài viết này trình bày cách sử dụng Fetch API để gọi REST API, cách xử lý dữ liệu JSON, cũng như chiến lược xử lý lỗi đúng chuẩn trong thực tế.

## 2. Fetch API là gì?

Fetch API là một Web API chuẩn, cho phép JavaScript:

- Gửi HTTP request (GET, POST, PUT, DELETE)
- Nhận response từ server
- Làm việc theo mô hình Promise

Cú pháp cơ bản:

```js
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data));
```

Fetch API thay thế dần cho XMLHttpRequest nhờ:

- Cú pháp rõ ràng
- Hỗ trợ Promise
- Dễ kết hợp với async/await

## 3. Tổng quan luồng gọi REST API

{{< img src="images/tong-quan-luong-goi-rest-api.png" alt="Tổng quan luồng gọi REST API" >}}

Luồng cơ bản:

- Frontend gửi request bằng Fetch
- Server xử lý và trả về response
- Frontend parse dữ liệu (thường là JSON)
- Hiển thị hoặc xử lý kết quả

## 4. Gọi REST API với Fetch

### 4.1. GET request cơ bản

```js
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

`fetch()` mặc định sử dụng phương thức GET.

### 4.2. POST request gửi JSON

```js
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John",
    email: "john@example.com"
  })
});
```

Luôn `JSON.stringify()` dữ liệu trước khi gửi.

## 5. Sử dụng async/await với Fetch

Cách viết hiện đại và dễ đọc hơn:

```js
async function fetchUsers() {
  const response = await fetch("https://api.example.com/users");
  const data = await response.json();
  console.log(data);
}
```

Giúp code:

- Dễ hiểu
- Dễ debug
- Gần với tư duy đồng bộ

## 6. Xử lý response và JSON

### 6.1. Kiểm tra trạng thái response

Fetch không tự reject Promise khi HTTP status là 4xx hoặc 5xx.

```js
if (!response.ok) {
  throw new Error("HTTP error: " + response.status);
}
```

Đây là điểm rất dễ gây bug nếu bỏ qua.

### 6.2. Parse JSON

```js
const data = await response.json();
```

Nếu response không phải JSON, lệnh này sẽ throw error.

## 7. Xử lý lỗi với Fetch API

### 7.1. Phân loại lỗi

- Network error: mất mạng, CORS
- HTTP error: 404, 500
- Parse error: JSON không hợp lệ

### 7.2. Ví dụ xử lý lỗi chuẩn

```js
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}
```

Đây là pattern khuyến nghị khi dùng Fetch.

## 8. Timeout và Fetch

Fetch không có timeout mặc định, cần dùng AbortController.

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000);

fetch(url, { signal: controller.signal })
  .catch(err => console.log("Request timeout"));
```

Quan trọng khi gọi API bên thứ ba.

## 9. Gửi header và token (JWT)

```js
fetch("/api/private", {
  headers: {
    "Authorization": "Bearer token_here"
  }
});
```

Thường dùng trong:

- API có xác thực
- SPA (React, Vue)

## 10. Những sai lầm phổ biến khi dùng Fetch

- Không kiểm tra response.ok
- Không xử lý lỗi HTTP
- Không set Content-Type
- Gửi object mà quên JSON.stringify()
- Không xử lý timeout

## 11. So sánh Fetch và Axios (ngắn gọn)

| Tiêu chí | Fetch | Axios |
| --- | --- | --- |
| Có sẵn | ✅ | ❌ |
| Hỗ trợ timeout | ❌ | ✅ |
| Interceptor | ❌ | ✅ |
| Xử lý JSON | Thủ công | Tự động |

Fetch phù hợp cho hiểu bản chất, Axios phù hợp cho project lớn.

## 12. Kết luận

Fetch API là công cụ chuẩn và quan trọng để giao tiếp REST API trong JavaScript. Việc hiểu rõ cách Fetch xử lý request, response và lỗi giúp lập trình viên:

- Tránh bug khó phát hiện
- Xây dựng frontend ổn định
- Dễ mở rộng sang các framework hiện đại

Đây là kiến thức nền tảng trước khi tiếp cận Axios, GraphQL hoặc advanced frontend architecture.
