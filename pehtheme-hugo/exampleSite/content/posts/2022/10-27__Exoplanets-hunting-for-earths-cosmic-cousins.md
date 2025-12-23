---
title: "Async/Await và xử lý bất đồng bộ trong JavaScript"
date: 2024-11-15T11:20:00+07:00
slug: "async-await-pattern-javascript"
description: "So sánh Callback vs Promise vs Async/Await và cách xử lý lỗi mạng bất đồng bộ."
image: 'images/AsyncAwait và xử lý bất đồng bộ trong JavaScript.png'
categories:
  - javascript
tags:
  - javascript
  - async
  - promise
  - networking
draft: false
---

## 1. Vì sao dùng Async/Await
- Code gần với synchronous, dễ đọc.
- Dễ try/catch, không bị callback hell.
- Thích hợp khi gọi nhiều API tuần tự hoặc song song có kiểm soát.

## 2. So sánh ngắn
- Callback: dễ rối, khó bắt lỗi tập trung.
- Promise: chain được nhưng dài nếu nhiều bước.
- Async/Await: ngắn gọn, nhưng cần `try/catch` và `Promise.all` khi chạy song song.

## 3. Mẫu song song có giới hạn
```js
async function loadData() {
  const [users, posts] = await Promise.all([
    fetchJson("/api/users"),
    fetchJson("/api/posts"),
  ]);
  return { users, posts };
}
```

## 4. Bắt lỗi mạng
```js
async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

try {
  const data = await fetchJson("/api/profile");
} catch (e) {
  console.error("Fetch failed", e);
}
```

## 5. Timeout và retry
- Dùng `AbortController` để cắt sau X giây.
- Retry với backoff cho lỗi 429/502/503/504.

## 6. Checklist
- `await` đúng chỗ, tránh quên `return` Promise.
- Luôn bắt lỗi: `try/catch` hoặc `.catch` cuối chain.
- Dùng `Promise.allSettled` khi cần thu kết quả kể cả bị lỗi.

