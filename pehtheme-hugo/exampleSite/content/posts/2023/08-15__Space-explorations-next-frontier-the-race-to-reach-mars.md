---
title: "Chat server TCP đa luồng trong Java"
date: 2024-11-28T09:00:00+07:00
slug: "chat-server-tcp-da-luong-java"
description: "Xây server TCP nhận nhiều client, broadcast theo phòng, xử lý ngắt kết nối và log theo phiên."
image: ''
categories:
  - java
tags:
  - java
  - tcp
  - networking
  - concurrency
draft: false
---

## 1. Kiến trúc tổng quan
- `ServerSocket` lắng nghe.
- `ExecutorService` cấp thread cho từng client.
- Danh sách client an toàn luồng để broadcast.
- Log per-connection: IP:port, thời gian join/leave, số gói gửi/nhận.

## 2. Mẫu code khung
```java
ExecutorService pool = Executors.newFixedThreadPool(32);
List<ClientHandler> clients = new CopyOnWriteArrayList<>();
ServerSocket server = new ServerSocket(9090);
while (true) {
  Socket socket = server.accept();
  var handler = new ClientHandler(socket, clients);
  clients.add(handler);
  pool.submit(handler);
}
```

## 3. Broadcast an toàn
- Dùng `CopyOnWriteArrayList` hoặc `Collections.synchronizedList`.
- Khi client ngắt kết nối, remove khỏi danh sách.
- Bọc send trong try-catch, nếu lỗi -> đóng socket, xóa client.

## 4. Giao thức text đơn giản
- Mỗi dòng là một message.
- Prefixed command: `/join room`, `/quit`, hoặc tên phòng kèm nội dung.
- Server tag người gửi: `[room][user]: message`.

## 5. Timeout và chống treo
- `socket.setSoTimeout(15000)` để đọc không treo.
- Giới hạn độ dài message để tránh spam: ví dụ 1 KB.
- Có thể thêm rate limit theo IP (token bucket).

## 6. Kiểm thử nhanh
- Dùng `nc localhost 9090` để mở nhiều client.
- Kiểm tra broadcast đúng phòng, ngắt kết nối có log.
- Quan sát CPU/thread pool khi 100 client kết nối.

## 7. Mở rộng
- Thêm auth nhẹ (token) trước khi join phòng.
- Ghi log JSON để dễ phân tích (time, user, room, bytes).
- Chuyển sang NIO khi cần scale hơn.
