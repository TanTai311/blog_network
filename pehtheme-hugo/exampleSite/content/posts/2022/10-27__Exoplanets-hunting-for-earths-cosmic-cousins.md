---
title: "Async/Await và xử lý bất đồng bộ trong JavaScript"
date: 2024-10-27T09:00:00+07:00
slug: "async-await-va-xu-ly-bat-dong-bo-trong-javascript"
description: "Giải thích bất đồng bộ, callback, Promise và async/await kèm best practices và lỗi thường gặp."
image: 'images/AsyncAwait và xử lý bất đồng bộ trong JavaScript.png'
categories:
  - javascript
tags:
  - javascript
  - async
  - promise
  - frontend
  - web
  - nodejs
draft: false
---

## 1. Giới thiệu

JavaScript là ngôn ngữ đơn luồng (single-threaded), nhưng lại được sử dụng rộng rãi trong các ứng dụng web cần xử lý nhiều tác vụ I/O như gọi API, đọc dữ liệu, xử lý sự kiện người dùng. Để giải quyết bài toán này, JavaScript cung cấp cơ chế bất đồng bộ (asynchronous).

Trong đó, async/await là cú pháp hiện đại giúp viết code bất đồng bộ dễ đọc, dễ hiểu và dễ bảo trì hơn so với callback hay Promise thuần.

## 2. Bất đồng bộ là gì?

Xử lý bất đồng bộ cho phép chương trình:

- Không bị “đứng” khi chờ tác vụ tốn thời gian
- Tiếp tục xử lý các công việc khác
- Nhận kết quả sau khi tác vụ hoàn thành

Ví dụ tác vụ bất đồng bộ:

- Gọi REST API
- Đọc file
- Truy vấn database
- Set timeout, interval

## 3. Cách JavaScript xử lý bất đồng bộ

JavaScript xử lý bất đồng bộ thông qua:

- Call Stack
- Web APIs
- Callback Queue / Microtask Queue
- Event Loop

Event Loop đảm bảo JavaScript không bị block, dù chỉ có một luồng.

## 4. Callback - Cách tiếp cận ban đầu

### 4.1. Callback là gì?

Callback là hàm được truyền vào hàm khác và được gọi khi tác vụ hoàn thành.

```js
setTimeout(() => {
  console.log("Done");
}, 1000);
```

### 4.2. Callback Hell

Khi callback lồng nhau nhiều tầng:

```js
doA(() => {
  doB(() => {
    doC(() => {
      console.log("Finished");
    });
  });
});
```

Nhược điểm:

- Khó đọc
- Khó debug
- Khó xử lý lỗi

## 5. Promise - Giải pháp cải tiến

### 5.1. Promise là gì?

Promise đại diện cho một giá trị sẽ có trong tương lai, có 3 trạng thái:

- pending
- fulfilled
- rejected

```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### 5.2. Hạn chế của Promise thuần

- Dùng nhiều .then() vẫn khó đọc
- Logic phức tạp dễ rối

## 6. Async/Await - Cú pháp hiện đại

### 6.1. async/await là gì?

- async: khai báo hàm bất đồng bộ
- await: chờ Promise resolve

```js
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

Code nhìn giống đồng bộ, nhưng chạy bất đồng bộ.

### 6.2. So sánh Promise vs Async/Await

| Promise | Async/Await |
| --- | --- |
| .then() | Cú pháp tuần tự |
| Dễ lồng | Dễ đọc |
| Khó debug | Dễ try/catch |

## 7. Xử lý lỗi với async/await

### 7.1. try/catch

```js
async function loadData() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("HTTP error");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}
```

Đây là pattern chuẩn khi dùng async/await.

## 8. Chạy song song với Promise.all

### 8.1. Vấn đề

```js
await fetch(a);
await fetch(b);
```

Chạy tuần tự, tốn thời gian.

### 8.2. Giải pháp

```js
const [resA, resB] = await Promise.all([
  fetch(a),
  fetch(b)
]);
```

Các Promise chạy song song, nhanh hơn đáng kể.

## 9. Async/Await và vòng lặp

### 9.1. Không nên dùng forEach

```js
array.forEach(async item => {
  await doSomething(item); // không chờ
});
```

### 9.2. Cách đúng

```js
for (const item of array) {
  await doSomething(item);
}
```

## 10. Những sai lầm phổ biến

- Quên await
- Không xử lý lỗi
- Dùng async trong forEach
- Chạy tuần tự khi cần song song
- Nhầm async/await là đa luồng

## 11. Async/Await trong thực tế

Async/await được dùng trong:

- Fetch API
- Axios
- Xử lý form
- Giao tiếp backend
- Ứng dụng React, Vue, Node.js

## 12. Kết luận

Async/Await là bước tiến quan trọng giúp JavaScript xử lý bất đồng bộ rõ ràng, an toàn và hiệu quả hơn. Việc nắm vững async/await không chỉ giúp code dễ đọc, mà còn tránh được nhiều lỗi logic và hiệu năng trong các ứng dụng web hiện đại.

Đây là kiến thức nền tảng trước khi tiếp cận:

- Xử lý bất đồng bộ nâng cao
- Web Performance
- Hệ thống frontend phức tạp
