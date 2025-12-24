---
title: "Node.js + Express: API và middleware cơ bản"
date: 2024-11-30T11:30:00+07:00
slug: "node-express-api-middleware"
description: "Tổ chức router, middleware, JWT auth và logging request trong Express."
image: 'images/Node.js + Express API và middleware cơ bản.png'
categories:
  - javascript
tags:
  - javascript
  - nodejs
  - express
  - http
  - security
draft: false
---

## 1. Giới thiệu

Trong phát triển ứng dụng web hiện đại, API (Application Programming Interface) đóng vai trò trung tâm trong việc kết nối frontend, mobile app và các dịch vụ backend. Node.js kết hợp với Express.js là một trong những lựa chọn phổ biến nhất để xây dựng RESTful API nhờ tính đơn giản, hiệu năng tốt và hệ sinh thái phong phú.

Bài viết này giới thiệu cách xây dựng API cơ bản với Express và cơ chế middleware - khái niệm cốt lõi giúp Express linh hoạt và mở rộng.

## 2. Tổng quan về Node.js và Express

{{< img src="images/tong-quan-ve-note-js.png" alt="Tổng quan về Node.js" >}}

### 2.1. Node.js là gì?

Node.js là môi trường runtime cho JavaScript chạy trên server, sử dụng mô hình bất đồng bộ, non-blocking I/O, phù hợp với các ứng dụng xử lý nhiều request đồng thời như API server.

### 2.2. Express.js là gì?

Express.js là framework web nhẹ cho Node.js, cung cấp:

- Routing (định tuyến)
- Middleware
- Xử lý request/response
- Cấu trúc rõ ràng cho API

Express giúp giảm đáng kể boilerplate khi xây dựng server.

## 3. Khởi tạo API cơ bản với Express

### 3.1. Cài đặt và khởi tạo project

```bash
npm init -y
npm install express
```

### 3.2. Tạo server Express đơn giản

```js
const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello API" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Khi truy cập http://localhost:3000/api/hello, server trả về JSON.

## 4. API và Routing trong Express

### 4.1. RESTful API cơ bản

Express hỗ trợ các HTTP method phổ biến:

- GET - Lấy dữ liệu
- POST - Tạo mới
- PUT / PATCH - Cập nhật
- DELETE - Xóa

```js
app.post("/api/users", (req, res) => {
  res.status(201).json({ message: "User created" });
});
```

### 4.2. Tách router để quản lý API

```js
const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ users: [] });
});

module.exports = router;

app.use("/api/users", require("./routes/users"));
```

Giúp code rõ ràng, dễ mở rộng.

## 5. Middleware - Trái tim của Express

### 5.1. Middleware là gì?

Middleware là các hàm nằm giữa request và response, có thể:

- Xử lý dữ liệu request
- Kiểm tra quyền truy cập
- Ghi log
- Chặn hoặc cho phép request tiếp tục

Cú pháp:

```js
(req, res, next) => { ... }
```

### 5.2. Middleware cơ bản

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

`next()` cho phép request đi tiếp; nếu không gọi, request sẽ bị dừng.

### 5.3. Middleware xử lý JSON

```js
app.use(express.json());
```

Bắt buộc khi xử lý body dạng JSON từ client.

## 6. Custom Middleware

### 6.1. Middleware xác thực đơn giản

```js
const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

app.get("/api/private", authMiddleware, (req, res) => {
  res.json({ message: "Private data" });
});
```

Đây là nền tảng để triển khai JWT authentication sau này.

## 7. Error Handling Middleware

### 7.1. Middleware xử lý lỗi

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});
```

Error-handling middleware luôn có 4 tham số.

## 8. Luồng xử lý request trong Express

{{< img src="images/luong-xu-ly-request-trong-express.png" alt="Luồng xử lý request trong Express" >}}

Luồng chuẩn:

- Request từ client
- Global middleware
- Route middleware
- Controller
- Error middleware
- Response trả về client

## 9. Best Practices khi viết API với Express

- Tách router, controller, service
- Không viết logic phức tạp trong route
- Luôn validate input
- Xử lý lỗi tập trung
- Ghi log request/response
- Không để middleware treo `next()`

## 10. Kết luận

Node.js + Express là nền tảng mạnh mẽ và linh hoạt để xây dựng API backend. Việc hiểu rõ routing và middleware giúp lập trình viên:

- Kiểm soát luồng request hiệu quả
- Dễ mở rộng hệ thống
- Xây dựng API rõ ràng, bảo trì tốt

Đây là kiến thức nền tảng trước khi tiếp cận các chủ đề nâng cao như JWT authentication, microservices và scalable backend.
