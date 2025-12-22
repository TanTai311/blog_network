---
title: "Bảo mật cơ bản: CORS, JWT và HTTPS"
date: 2024-12-07T18:15:00+07:00
slug: "bao-mat-co-ban-cors-jwt-https"
description: "Những lưu ý tối thiểu khi làm API: CORS đúng, JWT an toàn hơn, bật HTTPS."
image: ''
categories:
  - security
tags:
  - security
  - http
  - api
  - jwt
draft: false
---

## 1. CORS đúng cách
- Chỉ allow domain tin cậy, không dùng `*` cho credential.
- Khai báo method, header cần dùng; giới hạn `Access-Control-Max-Age`.
- Kiểm tra preflight (OPTIONS) và log nếu bị chặn.

## 2. JWT an toàn hơn
- Đặt thời hạn ngắn (vài phút) + refresh token.
- Ký bằng secret đủ mạnh; xoay secret khi cần.
- Không lưu JWT ở localStorage nếu app nhạy cảm; cân nhắc httpOnly cookie.
- Gắn `aud`, `iss`, `exp`; kiểm tra kỹ trên server.

## 3. Bật HTTPS
- Tránh nghe lén và sửa đổi gói tin.
- Dù môi trường thử nghiệm, hãy luyện quy trình cấp và gia hạn chứng chỉ.

## 4. Logging và rate limit
- Log IP, path, status, user-agent; ẩn thông tin nhạy cảm.
- Rate limit theo IP/route để tránh brute force.

## 5. Checklist triển khai
- CORS: domain cụ thể, header tối thiểu.
- JWT: thời hạn ngắn, refresh, revoke khi lộ token.
- HTTPS: bắt buộc, redirect HTTP→HTTPS.
- Log & rate limit: bật từ đầu, giám sát 429/401.
