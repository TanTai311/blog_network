---
title: "Node.js + Express: API và middleware cơ bản"
date: 2024-11-30T11:30:00+07:00
slug: "node-express-api-middleware"
description: "Tổ chức router, middleware, JWT auth và logging request trong Express."
image: ''
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

## 1. Khởi tạo
```js
const express = require("express");
const app = express();
app.use(express.json());
```

## 2. Router và middleware
```js
app.use(require("./routes/posts"));
app.use((req, res, next) => { console.log(req.method, req.url); next(); });
```

## 3. Auth cơ bản bằng JWT
```js
const auth = (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Unauthenticated" });
  try {
    req.user = verify(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
```

## 4. Xử lý lỗi tập trung
```js
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Internal error" });
});
```

## 5. CORS và bảo mật nhỏ
- Chỉ allow origin cần thiết.
- Tắt X-Powered-By: `app.disable("x-powered-by")`.
- Giới hạn body size nếu cần.

## 6. Kiểm thử
- Postman/curl: kiểm tra 200/401/404/500.
- Viết test nhỏ với supertest để chắc tuyến API chạy đúng.
