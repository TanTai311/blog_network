---
title: "Tối ưu giao tiếp mạng: timeout, retry và backoff"
date: 2025-01-05T09:45:00+07:00
slug: "toi-uu-timeout-retry-backoff"
description: "Cách đặt timeout hợp lý, retry có kiểm soát và theo dõi độ trễ để giữ dịch vụ ổn định."
image: 'images/Tối ưu giao tiếp mạng timeout, retry và backoff.png'
categories:
  - performance
tags:
  - performance
  - http
  - java
  - javascript
  - retry
draft: false
---

## 1. Timeout bắt buộc
- Java: `setConnectTimeout`, `setReadTimeout`; Spring: cấu hình trên RestTemplate/WebClient.
- JavaScript: dùng `AbortController` để hủy nếu quá lâu.

## 2. Retry có kiểm soát
- Chỉ retry lỗi tạm thời (408, 429, 502, 503, 504, timeout).
- Exponential backoff + jitter: 0.2s, 0.4s, 0.8s...
- Giới hạn số lần (3) và tổng thời gian để tránh nhân tải.

## 3. Theo dõi và log
- Log thời gian đáp ứng, status code, số lần retry.
- Ghi nhận tỉ lệ timeout/mất kết nối để điều chỉnh cấu hình.

## 4. Circuit breaker (gợi ý)
- Nếu lỗi liên tục, tạm ngắt gọi ra ngoài một thời gian ngắn để hệ thống tự hồi phục.

## 5. Checklist nhanh
- Timeout rõ ràng ở client.
- Retry đúng loại lỗi, có backoff.
- Log đủ dữ liệu để phân tích hiệu năng.
- Thử tải với mạng kém (loss/latency) để hiệu chỉnh.

