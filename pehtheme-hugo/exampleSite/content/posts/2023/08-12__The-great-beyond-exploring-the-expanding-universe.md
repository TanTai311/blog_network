---
title: "Giao thức UDP vs TCP: Khi nào nên dùng?"
date: 2024-12-05T08:30:00+07:00
slug: "udp-vs-tcp-nen-dung-khi-nao"
description: "So sánh chi tiết TCP và UDP trong lập trình mạng, ưu/nhược điểm và cách chọn giao thức phù hợp."
image: ''
categories:
  - networking
tags:
  - networking
  - tcp
  - udp
  - java
  - javascript
feature: true
draft: false
---

## 1. Tổng quan ngắn gọn
- TCP: kết nối, tin cậy, đảm bảo thứ tự gói, tự retransmit, có flow control/congestion control.
- UDP: không kết nối, không đảm bảo thứ tự, nhẹ, độ trễ thấp, không retransmit.
- Kịch bản: đăng nhập/thanh toán → TCP; streaming/game/voice → UDP.

## 2. Ưu và nhược điểm
**TCP**
- Ưu: Tin cậy, kiểm soát tắc nghẽn, phù hợp truyền file và API.
- Nhược: Overhead cao hơn, handshake 3 bước, chậm hơn với gói nhỏ.

**UDP**
- Ưu: Độ trễ thấp, không buộc handshake, linh hoạt tự định nghĩa cơ chế tin cậy.
- Nhược: Tự xử lý mất gói/thứ tự, dễ bị flood nếu không rate limit.

## 3. Ví dụ chọn giao thức
- Streaming video/audio: UDP + cơ chế FEC hoặc chấp nhận mất gói nhỏ.
- Chat văn bản, HTTP API: TCP (hoặc WebSocket trên TCP).
- Game realtime: UDP, tự bổ sung thứ tự, chống duplicate, rate limit client.

## 4. Lập trình với Java (mẫu)
### TCP client tối giản
```java
try (Socket socket = new Socket("localhost", 9000);
     OutputStream out = socket.getOutputStream()) {
  out.write("ping".getBytes(StandardCharsets.UTF_8));
}
```
### UDP gửi gói
```java
var socket = new DatagramSocket();
var buf = "ping".getBytes(StandardCharsets.UTF_8);
var packet = new DatagramPacket(buf, buf.length,
        InetAddress.getByName("localhost"), 9001);
socket.send(packet);
```

## 5. Lập trình với JavaScript
- TCP: dùng Node.js `net` module.
- UDP: dùng Node.js `dgram` module.
- Web: chỉ dùng được WebSocket/HTTP (trên TCP), UDP không trực tiếp từ trình duyệt.

## 6. Checklist chọn giao thức
- Có cần đảm bảo thứ tự, retransmit? → TCP.
- Ưu tiên độ trễ cực thấp, chấp nhận mất gói? → UDP.
- Yêu cầu bảo mật? → dùng TLS (TCP) hoặc DTLS (UDP).
- Có NAT/phải mở port? → cân nhắc chạy qua HTTP/WebSocket nếu bị chặn.

## 7. Lưu ý thực chiến
- Timeout rõ ràng: connect/read timeout.
- Log đầy đủ địa chỉ IP/port và thời gian round-trip.
- Rate limit theo client để tránh flood (nhất là UDP).
- Theo dõi packet loss và retry policy phù hợp.
