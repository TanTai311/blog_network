---
title: "Fetch API trong JavaScript: gọi REST và xử lý lỗi"
date: 2024-11-15T09:20:00+07:00
slug: "fetch-api-javascript-rest"
description: "Cách dùng fetch/async-await, kiểm tra res.ok, retry và timeout bằng AbortController."
image: ''
categories:
  - javascript
tags:
  - javascript
  - http
  - fetch
  - async
draft: false
---

## 1. Mẫu GET cơ bản
```js
const res = await fetch("/api/posts");
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const data = await res.json();
```

## 2. Timeout với AbortController
```js
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 5000);
const res = await fetch(url, { signal: controller.signal });
clearTimeout(timeout);
```

## 3. Retry có kiểm soát
- Chỉ retry lỗi tạm thời (408, 429, 502, 503, 504, abort).
- Exponential backoff: 200ms, 400ms, 800ms...
- Giới hạn số lần (ví dụ 3) để tránh flood server.

## 4. Xử lý lỗi hiển thị
- Nếu `res.ok === false`: đọc `res.text()` để hiển thị message rõ ràng.
- Luôn catch lỗi mạng: hiển thị trạng thái offline, gợi ý thử lại.

## 5. POST JSON mẫu
```js
const res = await fetch("/api/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Hello", content: "World" }),
});
```

## 6. Checklist frontend
- Show loading state.
- Disable nút khi đang gửi để tránh double-submit.
- Log lỗi cho dev, thông báo gọn cho user.
- Cân nhắc cache và ETag nếu cần.
